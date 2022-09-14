import { ethers } from "hardhat"
import { a0, a1, sliceCore } from "../../setup"
import { formatFlags, getEventArgsByIndex } from "../../helpers"
import { Slicer } from "../../../typechain-types/Slicer"

export const createSlicer = async (
  payees = [
    { account: a0, shares: 90, transfersAllowedWhileLocked: false },
    { account: a1, shares: 10, transfersAllowedWhileLocked: false },
  ],
  minimumShares = 20,
  transferTimelock = 0,
  releaseTimelock = 0,
  currencies: string[] = [],
  isImmutable = false,
  controller = {
    address: ethers.constants.AddressZero,
    productsControlled: false,
    currenciesControlled: false,
  },
  acceptsAllCurrencies = false,
  isCustomRoyaltyActive = false,
  isRoyaltyReceiverSlicer = false,
  isResliceAllowed = false,
  isControlledTransferAllowed = false
) => {
  const slicerFlags = formatFlags([
    isImmutable,
    controller.currenciesControlled,
    controller.productsControlled,
    acceptsAllCurrencies,
  ])
  const sliceCoreFlags = formatFlags([
    isCustomRoyaltyActive,
    isRoyaltyReceiverSlicer,
    isResliceAllowed,
    isControlledTransferAllowed,
  ])

  const newSlice = await sliceCore.slice({
    payees,
    minimumShares,
    currencies,
    releaseTimelock,
    transferTimelock,
    controller: controller.address,
    slicerFlags,
    sliceCoreFlags,
  })
  const tokenShares = payees.map((i) => i.shares)
  const tokensTotal = tokenShares.reduce((a, b) => a + b)
  const events = (await newSlice.wait()).events
  const [slicerAddress, tokenId] = getEventArgsByIndex(
    events,
    "TokenSliced",
    [0, 1]
  )
  const slicer = (await ethers.getContractAt("Slicer", slicerAddress)) as Slicer

  return {
    slicerAddress,
    tokenId: Number(tokenId),
    slicer,
    minimumShares,
    tokenShares,
    tokensTotal,
    isImmutable,
    controller: controller.address,
    slicerFlags,
    sliceCoreFlags,
  }
}
