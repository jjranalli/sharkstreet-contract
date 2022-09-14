/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SlicerManager, SlicerManagerInterface } from "../SlicerManager";

const _abi = [
  {
    inputs: [],
    name: "NotAuthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                internalType: "uint32",
                name: "shares",
                type: "uint32",
              },
              {
                internalType: "bool",
                name: "transfersAllowedWhileLocked",
                type: "bool",
              },
            ],
            internalType: "struct Payee[]",
            name: "payees",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "minimumShares",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "currencies",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "releaseTimelock",
            type: "uint256",
          },
          {
            internalType: "uint40",
            name: "transferTimelock",
            type: "uint40",
          },
          {
            internalType: "address",
            name: "controller",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "slicerFlags",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "sliceCoreFlags",
            type: "uint8",
          },
        ],
        internalType: "struct SliceParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "_createSlicer",
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
    inputs: [
      {
        internalType: "address",
        name: "newLogicImpl",
        type: "address",
      },
    ],
    name: "_upgradeSlicers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
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
        name: "implementationAddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b506080516121b961004c6000396000818161031a015281816103660152818161040e0152818161045101526104ed01526121b96000f3fe6080604052600436106200009d5760003560e01c8063715018a61162000060578063715018a614620001615780638da5cb5b1462000179578063c4d66de81462000199578063efab35b814620001be578063f2fde38b14620001e357600080fd5b806331d3055114620000a25780633659cfe614620000e45780634f1ef286146200010b57806352d1902d14620001225780635c60da1b1462000149575b600080fd5b348015620000af57600080fd5b50620000c7620000c136600462000dc3565b62000208565b6040516001600160a01b0390911681526020015b60405180910390f35b348015620000f157600080fd5b50620001096200010336600462000e29565b62000310565b005b620001096200011c36600462000e5f565b62000404565b3480156200012f57600080fd5b506200013a620004e0565b604051908152602001620000db565b3480156200015657600080fd5b50620000c762000596565b3480156200016e57600080fd5b50620001096200060c565b3480156200018657600080fd5b506097546001600160a01b0316620000c7565b348015620001a657600080fd5b5062000109620001b836600462000e29565b62000647565b348015620001cb57600080fd5b5062000109620001dd36600462000e29565b6200071f565b348015620001f057600080fd5b50620001096200020236600462000e29565b620007b0565b60003373e7f1725e7734ce288f8367e1bb143e90bb3f0512146200023f5760405163ea8e4eb560e01b815260040160405180910390fd5b60c9546000906001600160a01b0316635f4df1db60e11b856200026960e0870160c0880162000f2f565b88602088013560608901356200028360408b018b62000f54565b6040516024016200029b979695949392919062000fa8565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051620002da9062000d91565b620002e792919062001088565b604051809103906000f08015801562000304573d6000803e3d6000fd5b509150505b9392505050565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163003620003645760405162461bcd60e51b81526004016200035b90620010b6565b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316620003af6000805160206200213d833981519152546001600160a01b031690565b6001600160a01b031614620003d85760405162461bcd60e51b81526004016200035b9062001102565b620003e3816200084f565b6040805160008082526020820190925262000401918391906200087c565b50565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036200044f5760405162461bcd60e51b81526004016200035b90620010b6565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166200049a6000805160206200213d833981519152546001600160a01b031690565b6001600160a01b031614620004c35760405162461bcd60e51b81526004016200035b9062001102565b620004ce826200084f565b620004dc828260016200087c565b5050565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620005825760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c000000000000000060648201526084016200035b565b506000805160206200213d83398151915290565b60c95460408051635c60da1b60e01b815290516000926001600160a01b031691635c60da1b9160048083019260209291908290030181865afa158015620005e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200060791906200114e565b905090565b6097546001600160a01b03163314620006395760405162461bcd60e51b81526004016200035b906200116e565b620006456000620009f9565b565b600062000655600162000a4b565b905080156200066e576000805461ff0019166101001790555b6200067862000adb565b81604051620006879062000d9f565b6001600160a01b039091168152602001604051809103906000f080158015620006b4573d6000803e3d6000fd5b5060c980546001600160a01b0319166001600160a01b03929092169190911790558015620004dc576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b6097546001600160a01b031633146200074c5760405162461bcd60e51b81526004016200035b906200116e565b60c954604051631b2ce7f360e11b81526001600160a01b03838116600483015290911690633659cfe690602401600060405180830381600087803b1580156200079457600080fd5b505af1158015620007a9573d6000803e3d6000fd5b5050505050565b6097546001600160a01b03163314620007dd5760405162461bcd60e51b81526004016200035b906200116e565b6001600160a01b038116620008445760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016200035b565b6200040181620009f9565b6097546001600160a01b03163314620004015760405162461bcd60e51b81526004016200035b906200116e565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615620008b757620008b28362000b0f565b505050565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801562000914575060408051601f3d908101601f191682019092526200091191810190620011a3565b60015b620009795760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b60648201526084016200035b565b6000805160206200213d8339815191528114620009eb5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b60648201526084016200035b565b50620008b283838362000bae565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60008054610100900460ff161562000a97578160ff16600114801562000a705750303b155b62000a8f5760405162461bcd60e51b81526004016200035b90620011bd565b506000919050565b60005460ff80841691161062000ac15760405162461bcd60e51b81526004016200035b90620011bd565b506000805460ff191660ff92909216919091179055600190565b600054610100900460ff1662000b055760405162461bcd60e51b81526004016200035b906200120b565b6200064562000bdf565b6001600160a01b0381163b62000b7e5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016200035b565b6000805160206200213d83398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b62000bb98362000c14565b60008251118062000bc75750805b15620008b25762000bd9838362000c56565b50505050565b600054610100900460ff1662000c095760405162461bcd60e51b81526004016200035b906200120b565b6200064533620009f9565b62000c1f8162000b0f565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b62000cc05760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016200035b565b600080846001600160a01b03168460405162000cdd919062001256565b600060405180830381855af49150503d806000811462000d1a576040519150601f19603f3d011682016040523d82523d6000602084013e62000d1f565b606091505b509150915062000d4a82826040518060600160405280602781526020016200215d6027913962000d53565b95945050505050565b6060831562000d6457508162000309565b82511562000d755782518084602001fd5b8160405162461bcd60e51b81526004016200035b919062001274565b61098a806200128a83390190565b6105298062001c1483390190565b6001600160a01b03811681146200040157600080fd5b60008060006060848603121562000dd957600080fd5b833562000de68162000dad565b925060208401359150604084013567ffffffffffffffff81111562000e0a57600080fd5b8401610100818703121562000e1e57600080fd5b809150509250925092565b60006020828403121562000e3c57600080fd5b8135620003098162000dad565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121562000e7357600080fd5b823562000e808162000dad565b9150602083013567ffffffffffffffff8082111562000e9e57600080fd5b818501915085601f83011262000eb357600080fd5b81358181111562000ec85762000ec862000e49565b604051601f8201601f19908116603f0116810190838211818310171562000ef35762000ef362000e49565b8160405282815288602084870101111562000f0d57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60006020828403121562000f4257600080fd5b813560ff811681146200030957600080fd5b6000808335601e1984360301811262000f6c57600080fd5b83018035915067ffffffffffffffff82111562000f8857600080fd5b6020019150600581901b360382131562000fa157600080fd5b9250929050565b87815260ff87166020808301919091526001600160a01b038781166040840152606083018790526080830186905260c060a084018190528301849052600091859160e08501845b878110156200101a578435620010058162000dad565b83168252938301939083019060010162000fef565b509c9b505050505050505050505050565b60005b83811015620010485781810151838201526020016200102e565b8381111562000bd95750506000910152565b60008151808452620010748160208601602086016200102b565b601f01601f19169290920160200192915050565b6001600160a01b0383168152604060208201819052600090620010ae908301846200105a565b949350505050565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b6000602082840312156200116157600080fd5b8151620003098162000dad565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600060208284031215620011b657600080fd5b5051919050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b600082516200126a8184602087016200102b565b9190910192915050565b6020815260006200030960208301846200105a56fe608060405260405161098a38038061098a8339810160408190526100229161048b565b61004d60017fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5161054b565b6000805160206109438339815191521461006957610069610570565b6100758282600061007c565b50506105f0565b61008583610147565b6040516001600160a01b038416907f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e90600090a26000825111806100c65750805b1561014257610140836001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561010c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101309190610586565b836102d860201b6100291760201c565b505b505050565b61015a8161030460201b6100551760201c565b6101b95760405162461bcd60e51b815260206004820152602560248201527f455243313936373a206e657720626561636f6e206973206e6f74206120636f6e6044820152641d1c9858dd60da1b60648201526084015b60405180910390fd5b61022d816001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061021e9190610586565b61030460201b6100551760201c565b6102925760405162461bcd60e51b815260206004820152603060248201527f455243313936373a20626561636f6e20696d706c656d656e746174696f6e206960448201526f1cc81b9bdd08184818dbdb9d1c9858dd60821b60648201526084016101b0565b806102b760008051602061094383398151915260001b61031360201b6100641760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b60606102fd838360405180606001604052806027815260200161096360279139610316565b9392505050565b6001600160a01b03163b151590565b90565b60606001600160a01b0384163b61037e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016101b0565b600080856001600160a01b03168560405161039991906105a1565b600060405180830381855af49150503d80600081146103d4576040519150601f19603f3d011682016040523d82523d6000602084013e6103d9565b606091505b5090925090506103ea8282866103f4565b9695505050505050565b606083156104035750816102fd565b8251156104135782518084602001fd5b8160405162461bcd60e51b81526004016101b091906105bd565b80516001600160a01b038116811461044457600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561047a578181015183820152602001610462565b838111156101405750506000910152565b6000806040838503121561049e57600080fd5b6104a78361042d565b60208401519092506001600160401b03808211156104c457600080fd5b818501915085601f8301126104d857600080fd5b8151818111156104ea576104ea610449565b604051601f8201601f19908116603f0116810190838211818310171561051257610512610449565b8160405282815288602084870101111561052b57600080fd5b61053c83602083016020880161045f565b80955050505050509250929050565b60008282101561056b57634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fd5b60006020828403121561059857600080fd5b6102fd8261042d565b600082516105b381846020870161045f565b9190910192915050565b60208152600082518060208401526105dc81604085016020870161045f565b601f01601f19169190910160400192915050565b610344806105ff6000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610067565b610100565b565b606061004e83836040518060600160405280602781526020016102e860279139610124565b9392505050565b6001600160a01b03163b151590565b90565b600061009a7fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50546001600160a01b031690565b6001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100fb919061023f565b905090565b3660008037600080366000845af43d6000803e80801561011f573d6000f35b3d6000fd5b60606001600160a01b0384163b6101915760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b0316856040516101ac9190610298565b600060405180830381855af49150503d80600081146101e7576040519150601f19603f3d011682016040523d82523d6000602084013e6101ec565b606091505b50915091506101fc828286610206565b9695505050505050565b6060831561021557508161004e565b8251156102255782518084602001fd5b8160405162461bcd60e51b815260040161018891906102b4565b60006020828403121561025157600080fd5b81516001600160a01b038116811461004e57600080fd5b60005b8381101561028357818101518382015260200161026b565b83811115610292576000848401525b50505050565b600082516102aa818460208701610268565b9190910192915050565b60208152600082518060208401526102d3816040850160208701610268565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212200a8784ef78317407f2c7b1745bf5ef3b6cdac210deca4e00fb85be3ed6617d9d64736f6c634300080d0033a3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564608060405234801561001057600080fd5b5060405161052938038061052983398101604081905261002f91610151565b61003833610047565b61004181610097565b50610181565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6100aa8161014260201b61020a1760201c565b6101205760405162461bcd60e51b815260206004820152603360248201527f5570677261646561626c65426561636f6e3a20696d706c656d656e746174696f60448201527f6e206973206e6f74206120636f6e747261637400000000000000000000000000606482015260840160405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03163b151590565b60006020828403121561016357600080fd5b81516001600160a01b038116811461017a57600080fd5b9392505050565b610399806101906000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633659cfe61461005c5780635c60da1b14610071578063715018a61461009a5780638da5cb5b146100a2578063f2fde38b146100b3575b600080fd5b61006f61006a3660046102fe565b6100c6565b005b6001546001600160a01b03165b6040516001600160a01b03909116815260200160405180910390f35b61006f610139565b6000546001600160a01b031661007e565b61006f6100c13660046102fe565b61016f565b6000546001600160a01b031633146100f95760405162461bcd60e51b81526004016100f09061032e565b60405180910390fd5b61010281610219565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6000546001600160a01b031633146101635760405162461bcd60e51b81526004016100f09061032e565b61016d60006102ae565b565b6000546001600160a01b031633146101995760405162461bcd60e51b81526004016100f09061032e565b6001600160a01b0381166101fe5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016100f0565b610207816102ae565b50565b6001600160a01b03163b151590565b6001600160a01b0381163b61028c5760405162461bcd60e51b815260206004820152603360248201527f5570677261646561626c65426561636f6e3a20696d706c656d656e746174696f6044820152721b881a5cc81b9bdd08184818dbdb9d1c9858dd606a1b60648201526084016100f0565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561031057600080fd5b81356001600160a01b038116811461032757600080fd5b9392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260408201526060019056fea26469706673582212208123a6d169a2deb2adf0c6aaaf1a96921c0bb8e1d853e3531dc6f43eed4c873c64736f6c634300080d0033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220212d3dc418e6c9bb897cd72033135429c964f8227765fab214da4ffc80fa1bb864736f6c634300080d0033";

type SlicerManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SlicerManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SlicerManager__factory extends ContractFactory {
  constructor(...args: SlicerManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SlicerManager";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SlicerManager> {
    return super.deploy(overrides || {}) as Promise<SlicerManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SlicerManager {
    return super.attach(address) as SlicerManager;
  }
  connect(signer: Signer): SlicerManager__factory {
    return super.connect(signer) as SlicerManager__factory;
  }
  static readonly contractName: "SlicerManager";
  public readonly contractName: "SlicerManager";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SlicerManagerInterface {
    return new utils.Interface(_abi) as SlicerManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SlicerManager {
    return new Contract(address, _abi, signerOrProvider) as SlicerManager;
  }
}
