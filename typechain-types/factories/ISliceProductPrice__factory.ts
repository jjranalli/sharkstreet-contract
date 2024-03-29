/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ISliceProductPrice,
  ISliceProductPriceInterface,
} from "../ISliceProductPrice";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "slicerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "productPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "ethPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currencyPrice",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ISliceProductPrice__factory {
  static readonly abi = _abi;
  static createInterface(): ISliceProductPriceInterface {
    return new utils.Interface(_abi) as ISliceProductPriceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISliceProductPrice {
    return new Contract(address, _abi, signerOrProvider) as ISliceProductPrice;
  }
}
