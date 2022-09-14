import { expect } from "chai"
import { ethers } from "hardhat"
import { SharkStreet } from "../../../typechain-types/SharkStreet"
import { ERC721Test } from "../../../typechain-types/ERC721Test"
import { createSlicer, createProduct } from "../../helpers"
import {
  a0,
  a1,
  a2,
  a3,
  a4,
  addr1,
  isPurchaseAllowedSignature,
  onProductPurchaseSignature,
  productsModule,
  slx,
} from "../../setup"

describe("{SharkStreet}", () => {
  let sharkStreet: SharkStreet
  let erc721: ERC721Test
  let slicerId: number
  const gateAmount = ethers.BigNumber.from(10).pow(22)

  it("Contract is deployed and initialized", async () => {
    const SHARKSTREET = await ethers.getContractFactory("SharkStreetTest")
    const ERC721TEST = await ethers.getContractFactory("ERC721Test")

    // Create slicer
    const { tokenId, slicerAddress } = await createSlicer(
      [
        { account: a0, shares: 90, transfersAllowedWhileLocked: false },
        { account: a1, shares: 10, transfersAllowedWhileLocked: false },
      ],
      20,
      0,
      0,
      [],
      false
    )
    slicerId = tokenId

    // Deploy contract
    sharkStreet = (await SHARKSTREET.deploy(
      "SHARKSTREET",
      "SS",
      productsModule.address,
      slicerId
    )) as SharkStreet
    await sharkStreet.deployed()

    erc721 = (await ERC721TEST.deploy("721", "721")) as ERC721Test
    await erc721.deployed()

    // Create products

    await createProduct(slicerId, slicerAddress, 1, 100, [], true, false, [], {
      externalAddress: sharkStreet.address,
      checkFunctionSignature: isPurchaseAllowedSignature,
      execFunctionSignature: onProductPurchaseSignature,
      data: [],
      value: ethers.utils.parseEther("0"),
    })

    // Transfer erc721 token
    await erc721.mint(a2)

    // Send SLX to a1 and a3
    await slx.transfer(a1, gateAmount)
    await slx.transfer(a3, gateAmount)
  })

  describe("isPurchaseAllowed", () => {
    it("Has 10k Shark - Returns true", async () => {
      const isAllowedA1 = await sharkStreet.isPurchaseAllowed(
        slicerId,
        1,
        a1,
        1,
        [],
        []
      )

      expect(isAllowedA1).to.be.equal(true)
    })

    it("Has ERC721 - Returns true", async () => {
      const isAllowedA2 = await sharkStreet.isPurchaseAllowed(
        slicerId,
        1,
        a2,
        1,
        [],
        []
      )

      expect(isAllowedA2).to.be.equal(true)
    })

    it("Has no ERC721 and Shark - Returns false", async () => {
      const isAllowedA4 = await sharkStreet.isPurchaseAllowed(
        slicerId,
        1,
        a4,
        1,
        [],
        []
      )

      expect(isAllowedA4).to.be.equal(false)
    })
  })

  describe("onProductPurchase", () => {
    it("NFT transferred on purchase - Token Gate", async () => {
      const initBalance = await sharkStreet.balanceOf(a1)

      await productsModule.payProducts(a1, [
        {
          slicerId,
          productId: 1,
          quantity: 1,
          currency: ethers.constants.AddressZero,
          buyerCustomData: [],
        },
      ])

      const finalBalance = await sharkStreet.balanceOf(a1)
      expect(finalBalance.sub(initBalance)).to.be.equal(1)
    })
  })

  describe("_setTokenURI", () => {
    it("Token URI set correctly", async () => {
      await sharkStreet._setTokenURI("tokenUriSet")
      expect(await sharkStreet.tokenURI(1)).to.be.equal("tokenUriSet")
    })
  })

  describe("royaltyInfo", () => {
    it("Returns 10% of sale price", async () => {
      const [receiver, royalty] = await sharkStreet.royaltyInfo(1, 1000)
      expect(receiver).to.be.equal("0xAe7f458667f1B30746354aBC3157907d9F6FD15E")
      expect(royalty).to.be.equal(100)
    })
  })

  describe("Reverts", () => {
    it("onProductPurchase - Not allowed", async () => {
      await expect(
        productsModule.payProducts(a4, [
          {
            slicerId,
            productId: 1,
            quantity: 1,
            currency: ethers.constants.AddressZero,
            buyerCustomData: [],
          },
        ])
      ).to.be.reverted
    })

    it("onProductPurchase - Max supply reached", async () => {
      await productsModule.payProducts(a2, [
        {
          slicerId,
          productId: 1,
          quantity: 1,
          currency: ethers.constants.AddressZero,
          buyerCustomData: [],
        },
      ])

      await expect(
        productsModule.payProducts(a3, [
          {
            slicerId,
            productId: 1,
            quantity: 1,
            currency: ethers.constants.AddressZero,
            buyerCustomData: [],
          },
        ])
      ).to.be.reverted
    })

    it("Only contract owner can call setTokenUri", async () => {
      await expect(sharkStreet.connect(addr1)._setTokenURI("test")).to.be
        .reverted
    })
  })
})
