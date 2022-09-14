import { BigNumber } from "ethers"
import { ethers } from "hardhat"
import { Slicer } from "../../../typechain-types/Slicer"
import { getEventArgsByIndex } from "../../helpers"
const { getContractAt } = ethers
import { BigNumberish } from "ethers"
import { productsModule } from "../../setup"

export const createProduct = async (
  slicerId: number,
  slicerAddress: string,
  maxUnits_ = 0,
  units = 100,
  prices:
    | string
    | {
        currency: string
        dynamicPricing: boolean
        value: BigNumberish
        externalAddress: string
      }[] = [
    {
      currency: ethers.constants.AddressZero,
      dynamicPricing: false,
      value: ethers.utils.parseEther("1.0"),
      externalAddress: ethers.constants.AddressZero,
    },
  ],
  isFree_ = false,
  isInfinite_ = false,
  subSlicersProductsParam: {
    subSlicerId: number
    subProductId: number
  }[] = [],
  externalCallData: {
    externalAddress: string
    checkFunctionSignature: string
    execFunctionSignature: string
    data: any
    value: BigNumberish
  } = {
    externalAddress: ethers.constants.AddressZero,
    checkFunctionSignature: "0x00000000",
    execFunctionSignature: "0x00000000",
    data: [],
    value: ethers.utils.parseEther("0"),
  },
  isExternalCallPaymentRelative = false,
  isExternalCallPreferredToken = false,
  category = 0
) => {
  const slicer = (await getContractAt("Slicer", slicerAddress)) as Slicer
  const productPrice =
    typeof prices == "string"
      ? [
          {
            currency: ethers.constants.AddressZero,
            dynamicPricing: false,
            value: ethers.utils.parseEther(prices),
            externalAddress: ethers.constants.AddressZero,
          },
        ]
      : prices

  const txEvents = (
    await (
      await productsModule.addProduct(
        slicerId,
        {
          // categoryIndex: category,
          isFree: isFree_,
          maxUnitsPerBuyer: maxUnits_,
          isInfinite: isInfinite_,
          availableUnits: units,
          data: [],
          purchaseData: "0x1234",
          subSlicerProducts: subSlicersProductsParam,
          currencyPrices: productPrice,
          isExternalCallPaymentRelative,
          isExternalCallPreferredToken,
        },
        externalCallData
      )
    ).wait()
  ).events
  const [, productId, categoryIndex, creator, params, externalCall] =
    getEventArgsByIndex(txEvents, "ProductAdded", [0, 1, 2, 3, 4, 5])

  const {
    isFree,
    isInfinite,
    maxUnitsPerBuyer: maxUnits,
    data,
    availableUnits,
    subSlicerProducts,
    currencyPrices,
  } = params

  return {
    productId,
    categoryIndex,
    isFree,
    maxUnits,
    isInfinite,
    availableUnits,
    creator,
    data,
    subSlicerProducts,
    currencyPrices,
    externalCall,
    txEvents,
  }
}
