/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Governance, GovernanceInterface } from "../Governance";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
      {
        internalType: "contract ITerminalDirectory",
        name: "_terminalDirectory",
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
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract ITerminalV1",
        name: "_terminalV1",
        type: "address",
      },
    ],
    name: "acceptGovernance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPrices",
        name: "_prices",
        type: "address",
      },
      {
        internalType: "contract AggregatorV3Interface",
        name: "_feed",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_currency",
        type: "uint256",
      },
    ],
    name: "addPriceFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITerminal",
        name: "_from",
        type: "address",
      },
      {
        internalType: "contract ITerminal",
        name: "_to",
        type: "address",
      },
    ],
    name: "allowMigration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITerminalV1",
        name: "_terminalV1",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_newGovernance",
        type: "address",
      },
    ],
    name: "appointGovernance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        internalType: "string",
        name: "_memo",
        type: "string",
      },
      {
        internalType: "bool",
        name: "_preferUnstakedTickets",
        type: "bool",
      },
    ],
    name: "pay",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "projectId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITerminalV1",
        name: "_terminalV1",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "setFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOperatorStore",
        name: "_operatorStore",
        type: "address",
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_permissionIndexes",
        type: "uint256[]",
      },
    ],
    name: "setOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOperatorStore",
        name: "_operatorStore",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_operators",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_projectIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[][]",
        name: "_permissionIndexes",
        type: "uint256[][]",
      },
    ],
    name: "setOperators",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
    ],
    name: "setProjectId",
    outputs: [],
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
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IProjects",
        name: "_projects",
        type: "address",
      },
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "transferProjectOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516112f43803806112f483398101604081905261002f916100a4565b818161003a33610054565b6001919091556001600160a01b0316608052506100e19050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080604083850312156100b757600080fd5b825160208401519092506001600160a01b03811681146100d657600080fd5b809150509250929050565b6080516111f1610103600039600081816101f0015261062501526111f16000f3fe6080604052600436106101025760003560e01c8063897c063e11610095578063c0a485e211610064578063c0a485e2146102d0578063ce9246dd146102f0578063e55156b514610310578063f2fde38b14610330578063f3fef3a31461035057600080fd5b8063897c063e1461025f5780638da5cb5b14610272578063999a244f14610290578063bda77386146102b057600080fd5b80635f23d794116100d15780635f23d794146101be5780636abcf8e3146101de578063715018a61461022a578063787768821461023f57600080fd5b8063150b7a021461010e5780631d6c1343146101585780633fafa1271461017a578063544c0e151461019e57600080fd5b3661010957005b600080fd5b34801561011a57600080fd5b5061013a610129366004610c2f565b630a85bd0160e11b95945050505050565b6040516001600160e01b031990911681526020015b60405180910390f35b34801561016457600080fd5b50610178610173366004610ca2565b610370565b005b34801561018657600080fd5b5061019060015481565b60405190815260200161014f565b3480156101aa57600080fd5b506101786101b9366004610d20565b610403565b3480156101ca57600080fd5b506101786101d9366004610d82565b610498565b3480156101ea57600080fd5b506102127f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161014f565b34801561023657600080fd5b50610178610518565b34801561024b57600080fd5b5061017861025a366004610ca2565b61054e565b61017861026d366004610da6565b6105a6565b34801561027e57600080fd5b506000546001600160a01b0316610212565b34801561029c57600080fd5b506101786102ab366004610e13565b610780565b3480156102bc57600080fd5b506101786102cb366004610ec0565b61081b565b3480156102dc57600080fd5b506101786102eb366004610c2f565b6108ac565b3480156102fc57600080fd5b5061017861030b366004610f01565b61090a565b34801561031c57600080fd5b5061017861032b366004610f1a565b610939565b34801561033c57600080fd5b5061017861034b366004610d82565b610990565b34801561035c57600080fd5b5061017861036b366004610f1a565b610a2b565b6000546001600160a01b031633146103a35760405162461bcd60e51b815260040161039a90610f46565b60405180910390fd5b60405163e2c673a560e01b81526001600160a01b03828116600483015283169063e2c673a5906024015b600060405180830381600087803b1580156103e757600080fd5b505af11580156103fb573d6000803e3d6000fd5b505050505050565b6000546001600160a01b0316331461042d5760405162461bcd60e51b815260040161039a90610f46565b604051632f53664360e11b81526001600160a01b03861690635ea6cc869061045f908790879087908790600401610fb1565b600060405180830381600087803b15801561047957600080fd5b505af115801561048d573d6000803e3d6000fd5b505050505050505050565b6000546001600160a01b031633146104c25760405162461bcd60e51b815260040161039a90610f46565b806001600160a01b031663238efcbc6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156104fd57600080fd5b505af1158015610511573d6000803e3d6000fd5b5050505050565b6000546001600160a01b031633146105425760405162461bcd60e51b815260040161039a90610f46565b61054c6000610a63565b565b6000546001600160a01b031633146105785760405162461bcd60e51b815260040161039a90610f46565b60405163308a20ad60e01b81526001600160a01b03828116600483015283169063308a20ad906024016103cd565b6001546000036106085760405162461bcd60e51b815260206004820152602760248201527f4a75696365626f7850726f6a6563743a3a7061793a2050524f4a4543545f4e4f6044820152661517d193d5539160ca1b606482015260840161039a565b600154604051634fe0eced60e01b81526000916001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691634fe0eced9161065c9160040190815260200190565b602060405180830381865afa158015610679573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069d9190610fe3565b90506001600160a01b0381166107065760405162461bcd60e51b815260206004820152602860248201527f4a75696365626f7850726f6a6563743a3a7061793a205445524d494e414c5f4e60448201526713d517d193d5539160c21b606482015260840161039a565b6001546040516302c8986f60e01b81526001600160a01b038316916302c8986f91349161073d918a908a908a908a90600401611029565b60206040518083038185885af115801561075b573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906103fb9190611068565b6000546001600160a01b031633146107aa5760405162461bcd60e51b815260040161039a90610f46565b6040516393535be160e01b81526001600160a01b038816906393535be1906107e090899089908990899089908990600401611081565b600060405180830381600087803b1580156107fa57600080fd5b505af115801561080e573d6000803e3d6000fd5b5050505050505050505050565b6000546001600160a01b031633146108455760405162461bcd60e51b815260040161039a90610f46565b60405163a967c20b60e01b81526001600160a01b0383811660048301526024820183905284169063a967c20b90604401600060405180830381600087803b15801561088f57600080fd5b505af11580156108a3573d6000803e3d6000fd5b50505050505050565b6000546001600160a01b031633146108d65760405162461bcd60e51b815260040161039a90610f46565b604051635c46a7ef60e11b81526001600160a01b0386169063b88d4fde9061045f903090889088908890889060040161117c565b6000546001600160a01b031633146109345760405162461bcd60e51b815260040161039a90610f46565b600155565b6000546001600160a01b031633146109635760405162461bcd60e51b815260040161039a90610f46565b6040516369fe0e2d60e01b8152600481018290526001600160a01b038316906369fe0e2d906024016103cd565b6000546001600160a01b031633146109ba5760405162461bcd60e51b815260040161039a90610f46565b6001600160a01b038116610a1f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161039a565b610a2881610a63565b50565b6000546001600160a01b03163314610a555760405162461bcd60e51b815260040161039a90610f46565b610a5f8282610ab3565b5050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80471015610b035760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e6365000000604482015260640161039a565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610b50576040519150601f19603f3d011682016040523d82523d6000602084013e610b55565b606091505b5050905080610bcc5760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d61792068617665207265766572746564000000000000606482015260840161039a565b505050565b6001600160a01b0381168114610a2857600080fd5b60008083601f840112610bf857600080fd5b50813567ffffffffffffffff811115610c1057600080fd5b602083019150836020828501011115610c2857600080fd5b9250929050565b600080600080600060808688031215610c4757600080fd5b8535610c5281610bd1565b94506020860135610c6281610bd1565b935060408601359250606086013567ffffffffffffffff811115610c8557600080fd5b610c9188828901610be6565b969995985093965092949392505050565b60008060408385031215610cb557600080fd5b8235610cc081610bd1565b91506020830135610cd081610bd1565b809150509250929050565b60008083601f840112610ced57600080fd5b50813567ffffffffffffffff811115610d0557600080fd5b6020830191508360208260051b8501011115610c2857600080fd5b600080600080600060808688031215610d3857600080fd5b8535610d4381610bd1565b94506020860135610d5381610bd1565b935060408601359250606086013567ffffffffffffffff811115610d7657600080fd5b610c9188828901610cdb565b600060208284031215610d9457600080fd5b8135610d9f81610bd1565b9392505050565b60008060008060608587031215610dbc57600080fd5b8435610dc781610bd1565b9350602085013567ffffffffffffffff811115610de357600080fd5b610def87828801610be6565b90945092505060408501358015158114610e0857600080fd5b939692955090935050565b60008060008060008060006080888a031215610e2e57600080fd5b8735610e3981610bd1565b9650602088013567ffffffffffffffff80821115610e5657600080fd5b610e628b838c01610cdb565b909850965060408a0135915080821115610e7b57600080fd5b610e878b838c01610cdb565b909650945060608a0135915080821115610ea057600080fd5b50610ead8a828b01610cdb565b989b979a50959850939692959293505050565b600080600060608486031215610ed557600080fd5b8335610ee081610bd1565b92506020840135610ef081610bd1565b929592945050506040919091013590565b600060208284031215610f1357600080fd5b5035919050565b60008060408385031215610f2d57600080fd5b8235610f3881610bd1565b946020939093013593505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b81835260006001600160fb1b03831115610f9457600080fd5b8260051b8083602087013760009401602001938452509192915050565b60018060a01b0385168152836020820152606060408201526000610fd9606083018486610f7b565b9695505050505050565b600060208284031215610ff557600080fd5b8151610d9f81610bd1565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b8581526001600160a01b03851660208201526080604082018190526000906110549083018587611000565b905082151560608301529695505050505050565b60006020828403121561107a57600080fd5b5051919050565b6060808252810186905260008760808301825b898110156110c45782356110a781610bd1565b6001600160a01b0316825260209283019290910190600101611094565b5060209150838103828501526110db81888a610f7b565b84810360408601528581529050818101600586811b830184018860005b8981101561116957858303601f190185528135368c9003601e1901811261111e57600080fd5b8b01803567ffffffffffffffff81111561113757600080fd5b80861b36038d131561114857600080fd5b61115585828b8501610f7b565b9689019694505050908601906001016110f8565b50909d9c50505050505050505050505050565b6001600160a01b03868116825285166020820152604081018490526080606082018190526000906111b09083018486611000565b97965050505050505056fea26469706673582212205e311d3a357c9606a349a9117ee09f65ab20632b387b611ec9c55b688054036a64736f6c634300080d0033";

type GovernanceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GovernanceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Governance__factory extends ContractFactory {
  constructor(...args: GovernanceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Governance";
  }

  deploy(
    _projectId: BigNumberish,
    _terminalDirectory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Governance> {
    return super.deploy(
      _projectId,
      _terminalDirectory,
      overrides || {}
    ) as Promise<Governance>;
  }
  getDeployTransaction(
    _projectId: BigNumberish,
    _terminalDirectory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _projectId,
      _terminalDirectory,
      overrides || {}
    );
  }
  attach(address: string): Governance {
    return super.attach(address) as Governance;
  }
  connect(signer: Signer): Governance__factory {
    return super.connect(signer) as Governance__factory;
  }
  static readonly contractName: "Governance";
  public readonly contractName: "Governance";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GovernanceInterface {
    return new utils.Interface(_abi) as GovernanceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Governance {
    return new Contract(address, _abi, signerOrProvider) as Governance;
  }
}
