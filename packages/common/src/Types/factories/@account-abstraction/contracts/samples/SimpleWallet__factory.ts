/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SimpleWallet,
  SimpleWalletInterface,
} from "../../../../@account-abstraction/contracts/samples/SimpleWallet";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "anEntryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "anOwner",
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
        name: "oldEntryPoint",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newEntryPoint",
        type: "address",
      },
    ],
    name: "EntryPointChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "addDeposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
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
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "func",
        type: "bytes",
      },
    ],
    name: "exec",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "dest",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "func",
        type: "bytes[]",
      },
    ],
    name: "execBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "func",
        type: "bytes",
      },
    ],
    name: "execFromEntryPoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
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
    name: "nonce",
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
        internalType: "address payable",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newEntryPoint",
        type: "address",
      },
    ],
    name: "updateEntryPoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "aggregator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "missingWalletFunds",
        type: "uint256",
      },
    ],
    name: "validateUserOp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawDepositTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610fb4380380610fb483398101604081905261002f9161008f565b600180546001600160a01b039384166001600160a01b031990911617905560008054919092166c01000000000000000000000000026001600160601b039091161790556100c9565b6001600160a01b038116811461008c57600080fd5b50565b600080604083850312156100a257600080fd5b82516100ad81610077565b60208401519092506100be81610077565b809150509250929050565b610edc806100d86000396000f3fe6080604052600436106100ab5760003560e01c80638da5cb5b116100645780638da5cb5b14610161578063a9059cbb146101a5578063affed0e0146101c5578063b0d691fe146101ed578063c399ec881461020b578063d0cb75fa1461022057600080fd5b80630565bb67146100b75780630825d1fc146100d95780631b71bb6e146100f95780634a58db19146101195780634d44560d1461012157806380c5c7d01461014157600080fd5b366100b257005b600080fd5b3480156100c357600080fd5b506100d76100d2366004610b99565b610240565b005b3480156100e557600080fd5b506100d76100f4366004610c22565b61028f565b34801561010557600080fd5b506100d7610114366004610c89565b6102ca565b6100d76102de565b34801561012d57600080fd5b506100d761013c366004610cad565b61034f565b34801561014d57600080fd5b506100d761015c366004610b99565b6103cb565b34801561016d57600080fd5b5060005461018890600160601b90046001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156101b157600080fd5b506100d76101c0366004610cad565b6103d3565b3480156101d157600080fd5b506000546001600160601b03165b60405190815260200161019c565b3480156101f957600080fd5b506001546001600160a01b0316610188565b34801561021757600080fd5b506101df610416565b34801561022c57600080fd5b506100d761023b366004610d1e565b610499565b610248610599565b610289848484848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506105f392505050565b50505050565b610297610663565b6102a28484846106bd565b6102af6040850185610d8a565b90506000036102c1576102c1846107ca565b6102898161085c565b6102d26108a9565b6102db816108b1565b50565b60006102f26001546001600160a01b031690565b6001600160a01b03163460405160006040518083038185875af1925050503d806000811461033c576040519150601f19603f3d011682016040523d82523d6000602084013e610341565b606091505b50509050806102db57600080fd5b610357610599565b6001546001600160a01b031660405163040b850f60e31b81526001600160a01b03848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b1580156103af57600080fd5b505af11580156103c3573d6000803e3d6000fd5b505050505050565b610248610663565b6103db610599565b6040516001600160a01b0383169082156108fc029083906000818181858888f19350505050158015610411573d6000803e3d6000fd5b505050565b600061042a6001546001600160a01b031690565b6040516370a0823160e01b81523060048201526001600160a01b0391909116906370a0823190602401602060405180830381865afa158015610470573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104949190610dd1565b905090565b6104a1610599565b8281146104eb5760405162461bcd60e51b815260206004820152601360248201527277726f6e67206172726179206c656e6774687360681b60448201526064015b60405180910390fd5b60005b838110156105925761058085858381811061050b5761050b610dea565b90506020020160208101906105209190610c89565b600085858581811061053457610534610dea565b90506020028101906105469190610d8a565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506105f392505050565b8061058a81610e16565b9150506104ee565b5050505050565b600054600160601b90046001600160a01b03163314806105b857503330145b6105f15760405162461bcd60e51b815260206004820152600a60248201526937b7363c9037bbb732b960b11b60448201526064016104e2565b565b600080846001600160a01b0316848460405161060f9190610e2f565b60006040518083038185875af1925050503d806000811461064c576040519150601f19603f3d011682016040523d82523d6000602084013e610651565b606091505b50915091508161059257805160208201fd5b6001546001600160a01b031633146105f15760405162461bcd60e51b815260206004820152601b60248201527f77616c6c65743a206e6f742066726f6d20456e747279506f696e74000000000060448201526064016104e2565b6000610716836040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b9050610766610729610140860186610d8a565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250859392505061090d9050565b600054600160601b90046001600160a01b039081169116146102895760405162461bcd60e51b815260206004820152601760248201527f77616c6c65743a2077726f6e67207369676e617475726500000000000000000060448201526064016104e2565b600080546020830135916001600160601b0390911690806107ea83610e6a565b91906101000a8154816001600160601b0302191690836001600160601b031602179055506001600160601b0316146102db5760405162461bcd60e51b815260206004820152601560248201527477616c6c65743a20696e76616c6964206e6f6e636560581b60448201526064016104e2565b80156102db57604051600090339060001990849084818181858888f193505050503d8060008114610592576040519150601f19603f3d011682016040523d82523d6000602084013e610592565b6105f1610599565b6001546040516001600160a01b038084169216907f450909c1478d09248269d4ad4fa8cba61ca3f50faed58c7aedefa51c7f62b83a90600090a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b600080600061091c8585610931565b9150915061092981610976565b509392505050565b60008082516041036109675760208301516040840151606085015160001a61095b87828585610ac0565b9450945050505061096f565b506000905060025b9250929050565b600081600481111561098a5761098a610e90565b036109925750565b60018160048111156109a6576109a6610e90565b036109f35760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016104e2565b6002816004811115610a0757610a07610e90565b03610a545760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016104e2565b6003816004811115610a6857610a68610e90565b036102db5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016104e2565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610af75750600090506003610b7b565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610b4b573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610b7457600060019250925050610b7b565b9150600090505b94509492505050565b6001600160a01b03811681146102db57600080fd5b60008060008060608587031215610baf57600080fd5b8435610bba81610b84565b935060208501359250604085013567ffffffffffffffff80821115610bde57600080fd5b818701915087601f830112610bf257600080fd5b813581811115610c0157600080fd5b886020828501011115610c1357600080fd5b95989497505060200194505050565b60008060008060808587031215610c3857600080fd5b843567ffffffffffffffff811115610c4f57600080fd5b85016101608188031215610c6257600080fd5b9350602085013592506040850135610c7981610b84565b9396929550929360600135925050565b600060208284031215610c9b57600080fd5b8135610ca681610b84565b9392505050565b60008060408385031215610cc057600080fd5b8235610ccb81610b84565b946020939093013593505050565b60008083601f840112610ceb57600080fd5b50813567ffffffffffffffff811115610d0357600080fd5b6020830191508360208260051b850101111561096f57600080fd5b60008060008060408587031215610d3457600080fd5b843567ffffffffffffffff80821115610d4c57600080fd5b610d5888838901610cd9565b90965094506020870135915080821115610d7157600080fd5b50610d7e87828801610cd9565b95989497509550505050565b6000808335601e19843603018112610da157600080fd5b83018035915067ffffffffffffffff821115610dbc57600080fd5b60200191503681900382131561096f57600080fd5b600060208284031215610de357600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201610e2857610e28610e00565b5060010190565b6000825160005b81811015610e505760208186018101518583015201610e36565b81811115610e5f576000828501525b509190910192915050565b60006001600160601b03808316818103610e8657610e86610e00565b6001019392505050565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220a3fa7ae8e1dc12cafff9537c9c2d824ed34defbdffc76773926bfb377c18ed7664736f6c634300080f0033";

type SimpleWalletConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleWalletConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleWallet__factory extends ContractFactory {
  constructor(...args: SimpleWalletConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    anEntryPoint: PromiseOrValue<string>,
    anOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SimpleWallet> {
    return super.deploy(
      anEntryPoint,
      anOwner,
      overrides || {}
    ) as Promise<SimpleWallet>;
  }
  override getDeployTransaction(
    anEntryPoint: PromiseOrValue<string>,
    anOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(anEntryPoint, anOwner, overrides || {});
  }
  override attach(address: string): SimpleWallet {
    return super.attach(address) as SimpleWallet;
  }
  override connect(signer: Signer): SimpleWallet__factory {
    return super.connect(signer) as SimpleWallet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleWalletInterface {
    return new utils.Interface(_abi) as SimpleWalletInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleWallet {
    return new Contract(address, _abi, signerOrProvider) as SimpleWallet;
  }
}
