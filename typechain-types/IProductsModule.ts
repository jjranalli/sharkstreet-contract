/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type SubSlicerProductStruct = {
  subSlicerId: BigNumberish;
  subProductId: BigNumberish;
};

export type SubSlicerProductStructOutput = [BigNumber, number] & {
  subSlicerId: BigNumber;
  subProductId: number;
};

export type CurrencyPriceStruct = {
  value: BigNumberish;
  dynamicPricing: boolean;
  externalAddress: string;
  currency: string;
};

export type CurrencyPriceStructOutput = [BigNumber, boolean, string, string] & {
  value: BigNumber;
  dynamicPricing: boolean;
  externalAddress: string;
  currency: string;
};

export type ProductParamsStruct = {
  subSlicerProducts: SubSlicerProductStruct[];
  currencyPrices: CurrencyPriceStruct[];
  data: BytesLike;
  purchaseData: BytesLike;
  availableUnits: BigNumberish;
  maxUnitsPerBuyer: BigNumberish;
  isFree: boolean;
  isInfinite: boolean;
  isExternalCallPaymentRelative: boolean;
  isExternalCallPreferredToken: boolean;
};

export type ProductParamsStructOutput = [
  SubSlicerProductStructOutput[],
  CurrencyPriceStructOutput[],
  string,
  string,
  number,
  number,
  boolean,
  boolean,
  boolean,
  boolean
] & {
  subSlicerProducts: SubSlicerProductStructOutput[];
  currencyPrices: CurrencyPriceStructOutput[];
  data: string;
  purchaseData: string;
  availableUnits: number;
  maxUnitsPerBuyer: number;
  isFree: boolean;
  isInfinite: boolean;
  isExternalCallPaymentRelative: boolean;
  isExternalCallPreferredToken: boolean;
};

export type FunctionStruct = {
  data: BytesLike;
  value: BigNumberish;
  externalAddress: string;
  checkFunctionSignature: BytesLike;
  execFunctionSignature: BytesLike;
};

export type FunctionStructOutput = [
  string,
  BigNumber,
  string,
  string,
  string
] & {
  data: string;
  value: BigNumber;
  externalAddress: string;
  checkFunctionSignature: string;
  execFunctionSignature: string;
};

export type PurchaseParamsStruct = {
  slicerId: BigNumberish;
  quantity: BigNumberish;
  currency: string;
  productId: BigNumberish;
  buyerCustomData: BytesLike;
};

export type PurchaseParamsStructOutput = [
  BigNumber,
  number,
  string,
  number,
  string
] & {
  slicerId: BigNumber;
  quantity: number;
  currency: string;
  productId: number;
  buyerCustomData: string;
};

export type PriceStruct = {
  eth: BigNumberish;
  currency: BigNumberish;
  ethExternalCall: BigNumberish;
  currencyExternalCall: BigNumberish;
};

export type PriceStructOutput = [BigNumber, BigNumber, BigNumber, BigNumber] & {
  eth: BigNumber;
  currency: BigNumber;
  ethExternalCall: BigNumber;
  currencyExternalCall: BigNumber;
};

export interface IProductsModuleInterface extends utils.Interface {
  contractName: "IProductsModule";
  functions: {
    "addProduct(uint256,((uint128,uint32)[],(uint248,bool,address,address)[],bytes,bytes,uint32,uint8,bool,bool,bool,bool),(bytes,uint256,address,bytes4,bytes4))": FunctionFragment;
    "availableUnits(uint256,uint256)": FunctionFragment;
    "ethBalance(uint256)": FunctionFragment;
    "isProductOwner(uint256,uint256,address)": FunctionFragment;
    "payProducts(address,(uint128,uint32,address,uint32,bytes)[])": FunctionFragment;
    "productPrice(uint256,uint256,address,uint256,address,bytes)": FunctionFragment;
    "releaseEthToSlicer(uint256)": FunctionFragment;
    "removeProduct(uint256,uint256)": FunctionFragment;
    "setProductInfo(uint256,uint256,uint8,bool,bool,uint32,(uint248,bool,address,address)[])": FunctionFragment;
    "validatePurchase(uint256,uint256)": FunctionFragment;
    "validatePurchaseUnits(address,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addProduct",
    values: [BigNumberish, ProductParamsStruct, FunctionStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "availableUnits",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ethBalance",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isProductOwner",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "payProducts",
    values: [string, PurchaseParamsStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "productPrice",
    values: [
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      string,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "releaseEthToSlicer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeProduct",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setProductInfo",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      boolean,
      boolean,
      BigNumberish,
      CurrencyPriceStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "validatePurchase",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "validatePurchaseUnits",
    values: [string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addProduct", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "availableUnits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ethBalance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isProductOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "payProducts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "productPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releaseEthToSlicer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeProduct",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProductInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validatePurchase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validatePurchaseUnits",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IProductsModule extends BaseContract {
  contractName: "IProductsModule";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IProductsModuleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addProduct(
      slicerId: BigNumberish,
      params: ProductParamsStruct,
      externalCall_: FunctionStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    availableUnits(
      slicerId: BigNumberish,
      productId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean] & { units: BigNumber; isInfinite: boolean }
    >;

    ethBalance(
      slicerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isProductOwner(
      slicerId: BigNumberish,
      productId: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isAllowed: boolean }>;

    payProducts(
      buyer: string,
      purchases: PurchaseParamsStruct[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    productPrice(
      slicerId: BigNumberish,
      productId: BigNumberish,
      currency: string,
      quantity: BigNumberish,
      buyer: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[PriceStructOutput] & { price: PriceStructOutput }>;

    releaseEthToSlicer(
      slicerId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeProduct(
      slicerId: BigNumberish,
      productId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setProductInfo(
      slicerId: BigNumberish,
      productId: BigNumberish,
      newMaxUnits: BigNumberish,
      isFree: boolean,
      isInfinite: boolean,
      newUnits: BigNumberish,
      currencyPrices: CurrencyPriceStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    validatePurchase(
      slicerId: BigNumberish,
      productId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string] & { purchases: BigNumber; purchaseData: string }
    >;

    validatePurchaseUnits(
      account: string,
      slicerId: BigNumberish,
      productId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { purchases: BigNumber }>;
  };

  addProduct(
    slicerId: BigNumberish,
    params: ProductParamsStruct,
    externalCall_: FunctionStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  availableUnits(
    slicerId: BigNumberish,
    productId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, boolean] & { units: BigNumber; isInfinite: boolean }>;

  ethBalance(
    slicerId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isProductOwner(
    slicerId: BigNumberish,
    productId: BigNumberish,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  payProducts(
    buyer: string,
    purchases: PurchaseParamsStruct[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  productPrice(
    slicerId: BigNumberish,
    productId: BigNumberish,
    currency: string,
    quantity: BigNumberish,
    buyer: string,
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<PriceStructOutput>;

  releaseEthToSlicer(
    slicerId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeProduct(
    slicerId: BigNumberish,
    productId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setProductInfo(
    slicerId: BigNumberish,
    productId: BigNumberish,
    newMaxUnits: BigNumberish,
    isFree: boolean,
    isInfinite: boolean,
    newUnits: BigNumberish,
    currencyPrices: CurrencyPriceStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  validatePurchase(
    slicerId: BigNumberish,
    productId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string] & { purchases: BigNumber; purchaseData: string }
  >;

  validatePurchaseUnits(
    account: string,
    slicerId: BigNumberish,
    productId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    addProduct(
      slicerId: BigNumberish,
      params: ProductParamsStruct,
      externalCall_: FunctionStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    availableUnits(
      slicerId: BigNumberish,
      productId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean] & { units: BigNumber; isInfinite: boolean }
    >;

    ethBalance(
      slicerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isProductOwner(
      slicerId: BigNumberish,
      productId: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    payProducts(
      buyer: string,
      purchases: PurchaseParamsStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    productPrice(
      slicerId: BigNumberish,
      productId: BigNumberish,
      currency: string,
      quantity: BigNumberish,
      buyer: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PriceStructOutput>;

    releaseEthToSlicer(
      slicerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    removeProduct(
      slicerId: BigNumberish,
      productId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setProductInfo(
      slicerId: BigNumberish,
      productId: BigNumberish,
      newMaxUnits: BigNumberish,
      isFree: boolean,
      isInfinite: boolean,
      newUnits: BigNumberish,
      currencyPrices: CurrencyPriceStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    validatePurchase(
      slicerId: BigNumberish,
      productId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string] & { purchases: BigNumber; purchaseData: string }
    >;

    validatePurchaseUnits(
      account: string,
      slicerId: BigNumberish,
      productId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    addProduct(
      slicerId: BigNumberish,
      params: ProductParamsStruct,
      externalCall_: FunctionStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    availableUnits(
      slicerId: BigNumberish,
      productId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ethBalance(
      slicerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isProductOwner(
      slicerId: BigNumberish,
      productId: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    payProducts(
      buyer: string,
      purchases: PurchaseParamsStruct[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    productPrice(
      slicerId: BigNumberish,
      productId: BigNumberish,
      currency: string,
      quantity: BigNumberish,
      buyer: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    releaseEthToSlicer(
      slicerId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeProduct(
      slicerId: BigNumberish,
      productId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setProductInfo(
      slicerId: BigNumberish,
      productId: BigNumberish,
      newMaxUnits: BigNumberish,
      isFree: boolean,
      isInfinite: boolean,
      newUnits: BigNumberish,
      currencyPrices: CurrencyPriceStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    validatePurchase(
      slicerId: BigNumberish,
      productId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validatePurchaseUnits(
      account: string,
      slicerId: BigNumberish,
      productId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addProduct(
      slicerId: BigNumberish,
      params: ProductParamsStruct,
      externalCall_: FunctionStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    availableUnits(
      slicerId: BigNumberish,
      productId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ethBalance(
      slicerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isProductOwner(
      slicerId: BigNumberish,
      productId: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    payProducts(
      buyer: string,
      purchases: PurchaseParamsStruct[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    productPrice(
      slicerId: BigNumberish,
      productId: BigNumberish,
      currency: string,
      quantity: BigNumberish,
      buyer: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    releaseEthToSlicer(
      slicerId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeProduct(
      slicerId: BigNumberish,
      productId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setProductInfo(
      slicerId: BigNumberish,
      productId: BigNumberish,
      newMaxUnits: BigNumberish,
      isFree: boolean,
      isInfinite: boolean,
      newUnits: BigNumberish,
      currencyPrices: CurrencyPriceStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    validatePurchase(
      slicerId: BigNumberish,
      productId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validatePurchaseUnits(
      account: string,
      slicerId: BigNumberish,
      productId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
