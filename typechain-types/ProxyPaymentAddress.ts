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
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ProxyPaymentAddressInterface extends utils.Interface {
  contractName: "ProxyPaymentAddress";
  functions: {
    "memo()": FunctionFragment;
    "owner()": FunctionFragment;
    "projectId()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "tap()": FunctionFragment;
    "terminalDirectory()": FunctionFragment;
    "ticketBooth()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "transferTickets(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "memo", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "projectId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "tap", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "terminalDirectory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ticketBooth",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferTickets",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "memo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "projectId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "terminalDirectory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ticketBooth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferTickets",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "Receive(address,uint256)": EventFragment;
    "Tap(address,uint256)": EventFragment;
    "TransferTickets(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Receive"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Tap"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferTickets"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type ReceiveEvent = TypedEvent<
  [string, BigNumber],
  { caller: string; value: BigNumber }
>;

export type ReceiveEventFilter = TypedEventFilter<ReceiveEvent>;

export type TapEvent = TypedEvent<
  [string, BigNumber],
  { caller: string; value: BigNumber }
>;

export type TapEventFilter = TypedEventFilter<TapEvent>;

export type TransferTicketsEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  {
    caller: string;
    beneficiary: string;
    projectId: BigNumber;
    amount: BigNumber;
  }
>;

export type TransferTicketsEventFilter = TypedEventFilter<TransferTicketsEvent>;

export interface ProxyPaymentAddress extends BaseContract {
  contractName: "ProxyPaymentAddress";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ProxyPaymentAddressInterface;

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
    memo(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    projectId(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tap(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    terminalDirectory(overrides?: CallOverrides): Promise<[string]>;

    ticketBooth(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferTickets(
      _beneficiary: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  memo(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  projectId(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tap(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  terminalDirectory(overrides?: CallOverrides): Promise<string>;

  ticketBooth(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferTickets(
    _beneficiary: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    memo(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    projectId(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    tap(overrides?: CallOverrides): Promise<void>;

    terminalDirectory(overrides?: CallOverrides): Promise<string>;

    ticketBooth(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferTickets(
      _beneficiary: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Receive(address,uint256)"(
      caller?: string | null,
      value?: null
    ): ReceiveEventFilter;
    Receive(caller?: string | null, value?: null): ReceiveEventFilter;

    "Tap(address,uint256)"(
      caller?: string | null,
      value?: null
    ): TapEventFilter;
    Tap(caller?: string | null, value?: null): TapEventFilter;

    "TransferTickets(address,address,uint256,uint256)"(
      caller?: string | null,
      beneficiary?: string | null,
      projectId?: BigNumberish | null,
      amount?: null
    ): TransferTicketsEventFilter;
    TransferTickets(
      caller?: string | null,
      beneficiary?: string | null,
      projectId?: BigNumberish | null,
      amount?: null
    ): TransferTicketsEventFilter;
  };

  estimateGas: {
    memo(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    projectId(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tap(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    terminalDirectory(overrides?: CallOverrides): Promise<BigNumber>;

    ticketBooth(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferTickets(
      _beneficiary: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    memo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    projectId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tap(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    terminalDirectory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ticketBooth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferTickets(
      _beneficiary: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
