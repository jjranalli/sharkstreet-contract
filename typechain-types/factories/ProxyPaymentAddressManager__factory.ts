/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ProxyPaymentAddressManager,
  ProxyPaymentAddressManagerInterface,
} from "../ProxyPaymentAddressManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ITerminalDirectory",
        name: "_terminalDirectory",
        type: "address",
      },
      {
        internalType: "contract ITicketBooth",
        name: "_ticketBooth",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "memo",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "Deploy",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
    ],
    name: "addressesOf",
    outputs: [
      {
        internalType: "contract IProxyPaymentAddress[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_memo",
        type: "string",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "terminalDirectory",
    outputs: [
      {
        internalType: "contract ITerminalDirectory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ticketBooth",
    outputs: [
      {
        internalType: "contract ITicketBooth",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405161126438038061126483398101604081905261002f9161005e565b6001600160a01b039182166080521660a052610098565b6001600160a01b038116811461005b57600080fd5b50565b6000806040838503121561007157600080fd5b825161007c81610046565b602084015190925061008d81610046565b809150509250929050565b60805160a05161119b6100c96000396000818160be01526101f0015260008181607f01526101cf015261119b6000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80634cbcdc23146100515780636abcf8e31461007a5780639b602d60146100b9578063ffbf2bd8146100e0575b600080fd5b61006461005f366004610329565b6100f3565b6040516100719190610342565b60405180910390f35b6100a17f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610071565b6100a17f000000000000000000000000000000000000000000000000000000000000000081565b6100a16100ee3660046103a5565b61015d565b6000818152602081815260409182902080548351818402810184019094528084526060939283018282801561015157602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610133575b50505050509050919050565b60008083116101cb5760405162461bcd60e51b815260206004820152603060248201527f50726f78795061796d656e74416464726573734d616e616765723a3a6465706c60448201526f1bde4e8816915493d7d41493d29150d560821b606482015260840160405180910390fd5b60007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000858560405161021d9061031c565b61022a94939291906104ad565b604051809103906000f080158015610246573d6000803e3d6000fd5b5060405163f2fde38b60e01b81523360048201529091506001600160a01b0382169063f2fde38b90602401600060405180830381600087803b15801561028b57600080fd5b505af115801561029f573d6000803e3d6000fd5b5050506000858152602081815260408083208054600181018255908452919092200180546001600160a01b0319166001600160a01b0385161790555133915085907fb24384e68b59e576d1779bfdf48410e953d8c8064ed33288f28b16c7c6f78cf89061030d9087906104ea565b60405180910390a39392505050565b610c618061050583390190565b60006020828403121561033b57600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156103835783516001600160a01b03168352928401929184019160010161035e565b50909695505050505050565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156103b857600080fd5b82359150602083013567ffffffffffffffff808211156103d757600080fd5b818501915085601f8301126103eb57600080fd5b8135818111156103fd576103fd61038f565b604051601f8201601f19908116603f011681019083821181831017156104255761042561038f565b8160405282815288602084870101111561043e57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b6000815180845260005b818110156104865760208185018101518683018201520161046a565b81811115610498576000602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906104e090830184610460565b9695505050505050565b6020815260006104fd6020830184610460565b939250505056fe60e06040523480156200001157600080fd5b5060405162000c6138038062000c6183398101604081905262000034916200019c565b6200003f3362000077565b6001600160a01b03808516608052831660a05260c082905280516200006c906001906020840190620000c7565b5050505050620002ea565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054620000d590620002ae565b90600052602060002090601f016020900481019282620000f9576000855562000144565b82601f106200011457805160ff191683800117855562000144565b8280016001018555821562000144579182015b828111156200014457825182559160200191906001019062000127565b506200015292915062000156565b5090565b5b8082111562000152576000815560010162000157565b6001600160a01b03811681146200018357600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215620001b357600080fd5b8451620001c0816200016d565b80945050602080860151620001d5816200016d565b6040870151606088015191955093506001600160401b0380821115620001fa57600080fd5b818801915088601f8301126200020f57600080fd5b81518181111562000224576200022462000186565b604051601f8201601f19908116603f011681019083821181831017156200024f576200024f62000186565b816040528281528b868487010111156200026857600080fd5b600093505b828410156200028c57848401860151818501870152928501926200026d565b828411156200029e5760008684830101525b989b979a50959850505050505050565b600181811c90821680620002c357607f821691505b602082108103620002e457634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05161091e620003436000396000818160ff0152818161028601528181610321015281816104ff01526105ab0152600081816101e701526102c30152600081816101680152610527015261091e6000f3fe60806040526004361061008a5760003560e01c8063715018a611610059578063715018a6146101a25780638da5cb5b146101b75780639b602d60146101d5578063f2fde38b14610209578063fd2210311461022957600080fd5b8063323a9beb146100cb5780633fafa127146100ed57806358c3b870146101345780636abcf8e31461015657600080fd5b366100c65760405134815233907fd6717f327e0cb88b4a97a7f67a453e9258252c34937ccbdd86de7cb840e7def39060200160405180910390a2005b600080fd5b3480156100d757600080fd5b506100eb6100e63660046106cf565b61023e565b005b3480156100f957600080fd5b506101217f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b34801561014057600080fd5b50610149610391565b60405161012b91906106fb565b34801561016257600080fd5b5061018a7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161012b565b3480156101ae57600080fd5b506100eb61041f565b3480156101c357600080fd5b506000546001600160a01b031661018a565b3480156101e157600080fd5b5061018a7f000000000000000000000000000000000000000000000000000000000000000081565b34801561021557600080fd5b506100eb610224366004610750565b610455565b34801561023557600080fd5b506100eb6104f0565b6000546001600160a01b031633146102715760405162461bcd60e51b815260040161026890610774565b60405180910390fd5b6040516333681fb160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006024820152604481018290526001600160a01b0383811660648301527f000000000000000000000000000000000000000000000000000000000000000016906333681fb190608401600060405180830381600087803b15801561030757600080fd5b505af115801561031b573d6000803e3d6000fd5b505050507f0000000000000000000000000000000000000000000000000000000000000000826001600160a01b0316336001600160a01b03167fb160bbc4aa5a748ded771f39724cf08e31503f67d71efcb891aea516c01e16138460405161038591815260200190565b60405180910390a45050565b6001805461039e906107a9565b80601f01602080910402602001604051908101604052809291908181526020018280546103ca906107a9565b80156104175780601f106103ec57610100808354040283529160200191610417565b820191906000526020600020905b8154815290600101906020018083116103fa57829003601f168201915b505050505081565b6000546001600160a01b031633146104495760405162461bcd60e51b815260040161026890610774565b610453600061066a565b565b6000546001600160a01b0316331461047f5760405162461bcd60e51b815260040161026890610774565b6001600160a01b0381166104e45760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610268565b6104ed8161066a565b50565b604051634fe0eced60e01b81527f0000000000000000000000000000000000000000000000000000000000000000600482015247907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690634fe0eced90602401602060405180830381865afa158015610576573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059a91906107e3565b6001600160a01b03166302c8986f827f000000000000000000000000000000000000000000000000000000000000000030600160006040518663ffffffff1660e01b81526004016105ee9493929190610800565b60206040518083038185885af115801561060c573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061063191906108cf565b5060405181815233907ffc3b98e76f4840b19b2829249e3a6ec2bbac1fb30a799c637102913eb3928a069060200160405180910390a250565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146104ed57600080fd5b600080604083850312156106e257600080fd5b82356106ed816106ba565b946020939093013593505050565b600060208083528351808285015260005b818110156107285785810183015185820160400152820161070c565b8181111561073a576000604083870101525b50601f01601f1916929092016040019392505050565b60006020828403121561076257600080fd5b813561076d816106ba565b9392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600181811c908216806107bd57607f821691505b6020821081036107dd57634e487b7160e01b600052602260045260246000fd5b50919050565b6000602082840312156107f557600080fd5b815161076d816106ba565b8481526000602060018060a01b03861681840152608060408401526000855481600182811c91508083168061083657607f831692505b858310810361085357634e487b7160e01b85526022600452602485fd5b6080880183905260a088018180156108725760018114610883576108ae565b60ff198616825287820196506108ae565b60008c81526020902060005b868110156108a85781548482015290850190890161088f565b83019750505b505050508615156060870152509092506108c6915050565b95945050505050565b6000602082840312156108e157600080fd5b505191905056fea264697066735822122094de9b9cf5e6724e014a96e2f3289ab6fb451ad93658c7041306489fa1ea6e1d64736f6c634300080d0033a2646970667358221220023f5e0e4c3dd15c480837fb88e9eabe311eba98ec1de96de59ed3d7320bda7464736f6c634300080d0033";

type ProxyPaymentAddressManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProxyPaymentAddressManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProxyPaymentAddressManager__factory extends ContractFactory {
  constructor(...args: ProxyPaymentAddressManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ProxyPaymentAddressManager";
  }

  deploy(
    _terminalDirectory: string,
    _ticketBooth: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ProxyPaymentAddressManager> {
    return super.deploy(
      _terminalDirectory,
      _ticketBooth,
      overrides || {}
    ) as Promise<ProxyPaymentAddressManager>;
  }
  getDeployTransaction(
    _terminalDirectory: string,
    _ticketBooth: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _terminalDirectory,
      _ticketBooth,
      overrides || {}
    );
  }
  attach(address: string): ProxyPaymentAddressManager {
    return super.attach(address) as ProxyPaymentAddressManager;
  }
  connect(signer: Signer): ProxyPaymentAddressManager__factory {
    return super.connect(signer) as ProxyPaymentAddressManager__factory;
  }
  static readonly contractName: "ProxyPaymentAddressManager";
  public readonly contractName: "ProxyPaymentAddressManager";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProxyPaymentAddressManagerInterface {
    return new utils.Interface(_abi) as ProxyPaymentAddressManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProxyPaymentAddressManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ProxyPaymentAddressManager;
  }
}