/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ModStore, ModStoreInterface } from "../ModStore";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IProjects",
        name: "_projects",
        type: "address",
      },
      {
        internalType: "contract IOperatorStore",
        name: "_operatorStore",
        type: "address",
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
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "configuration",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "preferUnstaked",
            type: "bool",
          },
          {
            internalType: "uint16",
            name: "percent",
            type: "uint16",
          },
          {
            internalType: "uint48",
            name: "lockedUntil",
            type: "uint48",
          },
          {
            internalType: "address payable",
            name: "beneficiary",
            type: "address",
          },
          {
            internalType: "contract IModAllocator",
            name: "allocator",
            type: "address",
          },
          {
            internalType: "uint56",
            name: "projectId",
            type: "uint56",
          },
        ],
        indexed: false,
        internalType: "struct PayoutMod",
        name: "mods",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "SetPayoutMod",
    type: "event",
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
        indexed: true,
        internalType: "uint256",
        name: "configuration",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "preferUnstaked",
            type: "bool",
          },
          {
            internalType: "uint16",
            name: "percent",
            type: "uint16",
          },
          {
            internalType: "uint48",
            name: "lockedUntil",
            type: "uint48",
          },
          {
            internalType: "address payable",
            name: "beneficiary",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct TicketMod",
        name: "mods",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "SetTicketMod",
    type: "event",
  },
  {
    inputs: [],
    name: "operatorStore",
    outputs: [
      {
        internalType: "contract IOperatorStore",
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
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_configuration",
        type: "uint256",
      },
    ],
    name: "payoutModsOf",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "preferUnstaked",
            type: "bool",
          },
          {
            internalType: "uint16",
            name: "percent",
            type: "uint16",
          },
          {
            internalType: "uint48",
            name: "lockedUntil",
            type: "uint48",
          },
          {
            internalType: "address payable",
            name: "beneficiary",
            type: "address",
          },
          {
            internalType: "contract IModAllocator",
            name: "allocator",
            type: "address",
          },
          {
            internalType: "uint56",
            name: "projectId",
            type: "uint56",
          },
        ],
        internalType: "struct PayoutMod[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "projects",
    outputs: [
      {
        internalType: "contract IProjects",
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
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_configuration",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "preferUnstaked",
            type: "bool",
          },
          {
            internalType: "uint16",
            name: "percent",
            type: "uint16",
          },
          {
            internalType: "uint48",
            name: "lockedUntil",
            type: "uint48",
          },
          {
            internalType: "address payable",
            name: "beneficiary",
            type: "address",
          },
          {
            internalType: "contract IModAllocator",
            name: "allocator",
            type: "address",
          },
          {
            internalType: "uint56",
            name: "projectId",
            type: "uint56",
          },
        ],
        internalType: "struct PayoutMod[]",
        name: "_mods",
        type: "tuple[]",
      },
    ],
    name: "setPayoutMods",
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
      {
        internalType: "uint256",
        name: "_configuration",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "preferUnstaked",
            type: "bool",
          },
          {
            internalType: "uint16",
            name: "percent",
            type: "uint16",
          },
          {
            internalType: "uint48",
            name: "lockedUntil",
            type: "uint48",
          },
          {
            internalType: "address payable",
            name: "beneficiary",
            type: "address",
          },
        ],
        internalType: "struct TicketMod[]",
        name: "_mods",
        type: "tuple[]",
      },
    ],
    name: "setTicketMods",
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
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_configuration",
        type: "uint256",
      },
    ],
    name: "ticketModsOf",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "preferUnstaked",
            type: "bool",
          },
          {
            internalType: "uint16",
            name: "percent",
            type: "uint16",
          },
          {
            internalType: "uint48",
            name: "lockedUntil",
            type: "uint48",
          },
          {
            internalType: "address payable",
            name: "beneficiary",
            type: "address",
          },
        ],
        internalType: "struct TicketMod[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b5060405162001b7638038062001b7683398101604081905262000034916200006a565b6001600160a01b03918216608052811660a0521660c052620000be565b6001600160a01b03811681146200006757600080fd5b50565b6000806000606084860312156200008057600080fd5b83516200008d8162000051565b6020850151909350620000a08162000051565b6040850151909250620000b38162000051565b809150509250925092565b60805160a05160c051611a5f620001176000396000818161010f015281816103140152610c5301526000818160b0015281816103aa0152610ce901526000818161014b0152818161045a0152610d990152611a5f6000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638b79543c1161005b5780638b79543c1461010a578063a67e210a14610131578063ad007d6314610146578063ebe352a41461016d57600080fd5b80634833b512146100825780636abcf8e3146100ab5780637559aaaa146100ea575b600080fd5b6100956100903660046114b8565b610180565b6040516100a29190611514565b60405180910390f35b6100d27f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100a2565b6100fd6100f83660046114b8565b610231565b6040516100a291906115c1565b6100d27f000000000000000000000000000000000000000000000000000000000000000081565b61014461013f36600461170a565b6102fe565b005b6100d27f000000000000000000000000000000000000000000000000000000000000000081565b61014461017b36600461183f565b610c3d565b60008281526001602090815260408083208484528252808320805482518185028101850190935280835260609492939192909184015b82821015610225576000848152602090819020604080516080810182529185015460ff811615158352610100810461ffff16838501526301000000810465ffffffffffff1691830191909152600160481b90046001600160a01b031660608201528252600190920191016101b6565b50505050905092915050565b6000828152602081815260408083208484528252808320805482518185028101850190935280835260609492939192909184015b828210156102255760008481526020908190206040805160c08101825260028602909201805460ff811615158452610100810461ffff16848601526301000000810465ffffffffffff1692840192909252600160481b9091046001600160a01b0390811660608401526001918201549081166080840152600160a01b900466ffffffffffffff1660a08301529083529092019101610265565b6040516331a9108f60e11b8152600481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e90602401602060405180830381865afa158015610363573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610387919061193f565b604051634fe0eced60e01b8152600481018590528490600e906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690634fe0eced90602401602060405180830381865afa1580156103f1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610415919061193f565b336001600160a01b03851614806104c5575060405163c161c93f60e01b81523360048201526001600160a01b03858116602483015260448201859052606482018490527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f90608401602060405180830381865afa1580156104a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c59190611963565b806104d85750336001600160a01b038216145b6105245760405162461bcd60e51b815260206004820152601860248201527713dc195c985d18589b194e8815539055551213d49256915160421b60448201526064015b60405180910390fd5b60008551116105755760405162461bcd60e51b815260206004820152601e60248201527f4d6f6453746f72653a3a7365745061796f75744d6f64733a204e4f5f4f500000604482015260640161051b565b600087815260208181526040808320898452825280832080548251818502810185019093528083529192909190849084015b828210156106405760008481526020908190206040805160c08101825260028602909201805460ff811615158452610100810461ffff16848601526301000000810465ffffffffffff1692840192909252600160481b9091046001600160a01b0390811660608401526001918201549081166080840152600160a01b900466ffffffffffffff1660a083015290835290920191016105a7565b50505050905060005b81518110156108b65781818151811061066457610664611980565b60200260200101516040015165ffffffffffff164210156108a4576000805b88518110156108485783838151811061069e5761069e611980565b60200260200101516020015161ffff168982815181106106c0576106c0611980565b60200260200101516020015161ffff1614801561072857508383815181106106ea576106ea611980565b6020026020010151606001516001600160a01b031689828151811061071157610711611980565b6020026020010151606001516001600160a01b0316145b801561077f575083838151811061074157610741611980565b6020026020010151608001516001600160a01b031689828151811061076857610768611980565b6020026020010151608001516001600160a01b0316145b80156107d6575083838151811061079857610798611980565b602002602001015160a0015166ffffffffffffff168982815181106107bf576107bf611980565b602002602001015160a0015166ffffffffffffff16145b801561082c57508383815181106107ef576107ef611980565b60200260200101516040015165ffffffffffff1689828151811061081557610815611980565b60200260200101516040015165ffffffffffff1610155b1561083657600191505b80610840816119ac565b915050610683565b50806108a25760405162461bcd60e51b8152602060048201526024808201527f4d6f6453746f72653a3a7365745061796f75744d6f64733a20534f4d455f4c4f60448201526310d2d15160e21b606482015260840161051b565b505b806108ae816119ac565b915050610649565b506000888152602081815260408083208a845290915281206108d791611422565b6000805b8751811015610c315760008882815181106108f8576108f8611980565b60200260200101516020015161ffff16116109665760405162461bcd60e51b815260206004820152602860248201527f4d6f6453746f72653a3a7365745061796f75744d6f64733a204241445f4d4f4460448201526717d4115490d1539560c21b606482015260840161051b565b87818151811061097857610978611980565b60200260200101516020015161ffff168261099391906119c5565b91506127108211156109fa5760405162461bcd60e51b815260206004820152602a60248201527f4d6f6453746f72653a3a7365745061796f75744d6f64733a204241445f544f54604482015269105317d4115490d1539560b21b606482015260840161051b565b60006001600160a01b0316888281518110610a1757610a17611980565b6020026020010151608001516001600160a01b0316141580610a69575060006001600160a01b0316888281518110610a5157610a51611980565b6020026020010151606001516001600160a01b031614155b610ac35760405162461bcd60e51b815260206004820152602560248201527f4d6f6453746f72653a3a7365745061796f75744d6f64733a205a45524f5f4144604482015264445245535360d81b606482015260840161051b565b60008a8152602081815260408083208c845290915290208851899083908110610aee57610aee611980565b60209081029190910181015182546001808201855560009485529383902082516002909202018054938301516040840151606085015162ffffff1990961693151562ffff0019169390931761010061ffff90921691909102176301000000600160e81b031916630100000065ffffffffffff90931692909202600160481b600160e81b03191691909117600160481b6001600160a01b039485160217815560808201519301805460a090920151939092166001600160d81b031990911617600160a01b66ffffffffffffff90931692909202919091179055875189908b907f11d093e1f86a50d3e49cd68b453d3dc4ea6c3785bf9d407f4ba2fcc44b0acbbd908b9085908110610c0057610c00611980565b602002602001015133604051610c179291906119dd565b60405180910390a380610c29816119ac565b9150506108db565b50505050505050505050565b6040516331a9108f60e11b8152600481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e90602401602060405180830381865afa158015610ca2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc6919061193f565b604051634fe0eced60e01b8152600481018590528490600f906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690634fe0eced90602401602060405180830381865afa158015610d30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d54919061193f565b336001600160a01b0385161480610e04575060405163c161c93f60e01b81523360048201526001600160a01b03858116602483015260448201859052606482018490527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f90608401602060405180830381865afa158015610de0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e049190611963565b80610e175750336001600160a01b038216145b610e5e5760405162461bcd60e51b815260206004820152601860248201527713dc195c985d18589b194e8815539055551213d49256915160421b604482015260640161051b565b6000855111610eaf5760405162461bcd60e51b815260206004820152601e60248201527f4d6f6453746f72653a3a7365745469636b65744d6f64733a204e4f5f4f500000604482015260640161051b565b6000878152600160209081526040808320898452825280832080548251818502810185019093528083529192909190849084015b82821015610f52576000848152602090819020604080516080810182529185015460ff811615158352610100810461ffff16838501526301000000810465ffffffffffff1691830191909152600160481b90046001600160a01b03166060820152825260019092019101610ee3565b50505050905060005b815181101561111a57818181518110610f7657610f76611980565b60200260200101516040015165ffffffffffff16421015611108576000805b88518110156110ac57838381518110610fb057610fb0611980565b60200260200101516020015161ffff16898281518110610fd257610fd2611980565b60200260200101516020015161ffff1614801561103a5750838381518110610ffc57610ffc611980565b6020026020010151606001516001600160a01b031689828151811061102357611023611980565b6020026020010151606001516001600160a01b0316145b8015611090575083838151811061105357611053611980565b60200260200101516040015165ffffffffffff1689828151811061107957611079611980565b60200260200101516040015165ffffffffffff1610155b1561109a57600191505b806110a4816119ac565b915050610f95565b50806111065760405162461bcd60e51b8152602060048201526024808201527f4d6f6453746f72653a3a7365745469636b65744d6f64733a20534f4d455f4c4f60448201526310d2d15160e21b606482015260840161051b565b505b80611112816119ac565b915050610f5b565b5060008881526001602090815260408083208a8452909152812061113d91611446565b6000805b8751811015610c3157600088828151811061115e5761115e611980565b60200260200101516020015161ffff16116111cc5760405162461bcd60e51b815260206004820152602860248201527f4d6f6453746f72653a3a7365745469636b65744d6f64733a204241445f4d4f4460448201526717d4115490d1539560c21b606482015260840161051b565b8781815181106111de576111de611980565b60200260200101516020015161ffff16826111f991906119c5565b91506127108211156112605760405162461bcd60e51b815260206004820152602a60248201527f4d6f6453746f72653a3a7365745469636b65744d6f64733a204241445f544f54604482015269105317d4115490d1539560b21b606482015260840161051b565b60006001600160a01b031688828151811061127d5761127d611980565b6020026020010151606001516001600160a01b0316036112ed5760405162461bcd60e51b815260206004820152602560248201527f4d6f6453746f72653a3a7365745469636b65744d6f64733a205a45524f5f4144604482015264445245535360d81b606482015260840161051b565b60008a81526001602090815260408083208c84529091529020885189908390811061131a5761131a611980565b602090810291909101810151825460018101845560009384529282902081519301805492820151604083015160609093015162ffffff1990941694151562ffff0019169490941761010061ffff90951694909402939093176301000000600160e81b031916630100000065ffffffffffff90921691909102600160481b600160e81b03191617600160481b6001600160a01b0390921691909102179055875189908b907fbe6dc180c545b9c03d152e2058d9c71d2c7a2f1b897461cd0a4a161ba011c1c3908b90859081106113f1576113f1611980565b602002602001015133604051611408929190611a03565b60405180910390a38061141a816119ac565b915050611141565b50805460008255600202906000526020600020908101906114439190611464565b50565b50805460008255906000526020600020908101906114439190611499565b5b808211156114955780546001600160e81b03191681556001810180546001600160d81b0319169055600201611465565b5090565b5b808211156114955780546001600160e81b031916815560010161149a565b600080604083850312156114cb57600080fd5b50508035926020909101359150565b80511515825260208082015161ffff169083015260408082015165ffffffffffff16908301526060908101516001600160a01b0316910152565b6020808252825182820181905260009190848201906040850190845b81811015611556576115438385516114da565b9284019260809290920191600101611530565b50909695505050505050565b80511515825261ffff602082015116602083015265ffffffffffff6040820151166040830152606081015160018060a01b038082166060850152806080840151166080850152505066ffffffffffffff60a08201511660a08301525050565b6020808252825182820181905260009190848201906040850190845b81811015611556576115f0838551611562565b9284019260c092909201916001016115dd565b634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561163c5761163c611603565b60405290565b6040516080810167ffffffffffffffff8111828210171561163c5761163c611603565b604051601f8201601f1916810167ffffffffffffffff8111828210171561168e5761168e611603565b604052919050565b600067ffffffffffffffff8211156116b0576116b0611603565b5060051b60200190565b801515811461144357600080fd5b803561ffff811681146116da57600080fd5b919050565b803565ffffffffffff811681146116da57600080fd5b6001600160a01b038116811461144357600080fd5b6000806000606080858703121561172057600080fd5b84359350602080860135935060408087013567ffffffffffffffff81111561174757600080fd5b8701601f8101891361175857600080fd5b803561176b61176682611696565b611665565b81815260c0918202830185019185820191908c84111561178a57600080fd5b938601935b8385101561182d5780858e0312156117a75760008081fd5b6117af611619565b85356117ba816116ba565b81526117c78689016116c8565b888201526117d68787016116df565b87820152888601356117e7816116f5565b818a01526080868101356117fa816116f5565b9082015260a08681013566ffffffffffffff8116811461181a5760008081fd5b908201528352938401939186019161178f565b50809750505050505050509250925092565b6000806000606080858703121561185557600080fd5b84359350602080860135935060408087013567ffffffffffffffff81111561187c57600080fd5b8701601f8101891361188d57600080fd5b803561189b61176682611696565b81815260079190911b8201840190848101908b8311156118ba57600080fd5b928501925b8284101561192e576080848d0312156118d85760008081fd5b6118e0611642565b84356118eb816116ba565b81526118f88588016116c8565b878201526119078686016116df565b8682015287850135611918816116f5565b81890152825260809390930192908501906118bf565b809750505050505050509250925092565b60006020828403121561195157600080fd5b815161195c816116f5565b9392505050565b60006020828403121561197557600080fd5b815161195c816116ba565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016119be576119be611996565b5060010190565b600082198211156119d8576119d8611996565b500190565b60e081016119eb8285611562565b6001600160a01b039290921660c09190910152919050565b60a08101611a1182856114da565b6001600160a01b03929092166080919091015291905056fea2646970667358221220ee4528eb644447b083fbddef736b45db1eb920a4d30727390d45532fb97b079964736f6c634300080d0033";

type ModStoreConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ModStoreConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ModStore__factory extends ContractFactory {
  constructor(...args: ModStoreConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ModStore";
  }

  deploy(
    _projects: string,
    _operatorStore: string,
    _terminalDirectory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ModStore> {
    return super.deploy(
      _projects,
      _operatorStore,
      _terminalDirectory,
      overrides || {}
    ) as Promise<ModStore>;
  }
  getDeployTransaction(
    _projects: string,
    _operatorStore: string,
    _terminalDirectory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _projects,
      _operatorStore,
      _terminalDirectory,
      overrides || {}
    );
  }
  attach(address: string): ModStore {
    return super.attach(address) as ModStore;
  }
  connect(signer: Signer): ModStore__factory {
    return super.connect(signer) as ModStore__factory;
  }
  static readonly contractName: "ModStore";
  public readonly contractName: "ModStore";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ModStoreInterface {
    return new utils.Interface(_abi) as ModStoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ModStore {
    return new Contract(address, _abi, signerOrProvider) as ModStore;
  }
}
