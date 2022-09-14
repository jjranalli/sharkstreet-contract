import { expect } from "chai"
import { ethers } from "hardhat"
import { SharkStreetV2 } from "../../../typechain-types/SharkStreetV2"
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
} from "../../setup"

describe("{SharkStreet V2}", () => {
  let sharkStreet: SharkStreetV2
  let erc721: ERC721Test
  let slicerId: number

  it("Contract is deployed and initialized", async () => {
    const SHARKSTREET = await ethers.getContractFactory("SharkStreetV2Test")
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
      productsModule.address,
      slicerId,
      "SHARKSTREET",
      "SS"
    )) as SharkStreetV2
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
    await createProduct(slicerId, slicerAddress, 1, 1, [], true, false, [], {
      externalAddress: sharkStreet.address,
      checkFunctionSignature: isPurchaseAllowedSignature,
      execFunctionSignature: onProductPurchaseSignature,
      data: [],
      value: ethers.utils.parseEther("0"),
    })
    await createProduct(
      slicerId,
      slicerAddress,
      0,
      3,
      "0.1",
      false,
      false,
      [],
      {
        externalAddress: sharkStreet.address,
        checkFunctionSignature: isPurchaseAllowedSignature,
        execFunctionSignature: onProductPurchaseSignature,
        data: [],
        value: ethers.utils.parseEther("0"),
      }
    )

    // Transfer erc721 token
    await erc721.mint(a2)
  })

  describe("Constructor", () => {
    it("Init mint is successful", async () => {
      expect(
        await sharkStreet.balanceOf(
          "0x728A4DDe804aeDaF93AC839C9B0Fce031e0361af"
        )
      ).to.be.equal(10)
    })

    it("Init total supply corresponds", async () => {
      expect(await sharkStreet.totalSupply()).to.be.equal(10)
    })
  })

  describe("isPurchaseAllowed", () => {
    it("Product #2, Has gated NFT - Returns true", async () => {
      const isAllowed = await sharkStreet.isPurchaseAllowed(
        slicerId,
        2,
        a2,
        1,
        [],
        []
      )

      expect(isAllowed).to.be.equal(true)
    })

    it("Product #2, Does not have gated NFT - Returns false", async () => {
      const isAllowed = await sharkStreet.isPurchaseAllowed(
        slicerId,
        2,
        a1,
        1,
        [],
        []
      )

      expect(isAllowed).to.be.equal(false)
    })

    it("Product #3 - Returns true", async () => {
      const isAllowed = await sharkStreet.isPurchaseAllowed(
        slicerId,
        3,
        a1,
        1,
        [],
        []
      )

      expect(isAllowed).to.be.equal(true)
    })
  })

  describe("onProductPurchase", () => {
    it("Product #2, mint successful", async () => {
      const initBalance = await sharkStreet.balanceOf(a2)

      await productsModule.payProducts(a2, [
        {
          slicerId,
          productId: 2,
          quantity: 1,
          currency: ethers.constants.AddressZero,
          buyerCustomData: [],
        },
      ])

      const finalBalance = await sharkStreet.balanceOf(a2)
      expect(finalBalance.sub(initBalance)).to.be.equal(1)
    })

    it("Product #3, mint successful", async () => {
      const initBalance = await sharkStreet.balanceOf(a1)

      await productsModule.payProducts(
        a1,
        [
          {
            slicerId,
            productId: 3,
            quantity: 1,
            currency: ethers.constants.AddressZero,
            buyerCustomData: [],
          },
        ],
        { value: ethers.utils.parseEther("0.1") }
      )

      const finalBalance = await sharkStreet.balanceOf(a1)
      expect(finalBalance.sub(initBalance)).to.be.equal(1)
    })

    it("Product #3, multiple mint successful", async () => {
      const quantity = 2
      const initBalance = await sharkStreet.balanceOf(a1)

      await productsModule.payProducts(
        a1,
        [
          {
            slicerId,
            productId: 3,
            quantity,
            currency: ethers.constants.AddressZero,
            buyerCustomData: [],
          },
        ],
        { value: ethers.utils.parseEther("0.2") }
      )

      const finalBalance = await sharkStreet.balanceOf(a1)
      expect(finalBalance.sub(initBalance)).to.be.equal(quantity)
    })
  })

  describe("_mintRaffle", () => {
    it("Raffle mint can only be executed by contract owner", async () => {
      await expect(sharkStreet.connect(addr1)._mintRaffle(a4)).to.be.reverted
    })

    it("Raffle mint executed correctly", async () => {
      const initBalance = await sharkStreet.balanceOf(a4)
      const initSupply = await sharkStreet.totalSupply()
      await sharkStreet._mintRaffle(a4)

      const finalBalance = await sharkStreet.balanceOf(a4)
      const finalSupply = await sharkStreet.totalSupply()
      expect(finalBalance.sub(initBalance)).to.be.equal(1)
      expect(finalSupply.sub(initSupply)).to.be.equal(1)
      expect(finalSupply).to.be.equal(15)
    })

    it("Raffle mint can only be executed once", async () => {
      await expect(sharkStreet._mintRaffle(a4)).to.be.reverted
    })
  })

  describe("_setBaseTokenURI", () => {
    it("Token URI set correctly", async () => {
      await sharkStreet._setBaseTokenURI("tokenUriSet/")
      expect(await sharkStreet.tokenURI(1)).to.be.equal("tokenUriSet/1")
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
    it("isPurchaseAllowed - Max supply reached", async () => {
      await expect(
        productsModule.payProducts(
          a4,
          [
            {
              slicerId,
              productId: 3,
              quantity: 1,
              currency: ethers.constants.AddressZero,
              buyerCustomData: [],
            },
          ],
          { value: ethers.utils.parseEther("0.1") }
        )
      ).to.be.reverted
    })

    it("Only contract owner can call setTokenUri", async () => {
      await expect(sharkStreet.connect(addr1)._setBaseTokenURI("test")).to.be
        .reverted
    })
  })
})
