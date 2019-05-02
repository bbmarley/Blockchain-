//to transfer ERC-20 Tokens\
// console.log(to.length)
// var count = 0 
// while(count <= to.length){
// 	result = to[count]
var Tx = require('ethereumjs-tx');
const Web3 = require('web3');
var Web3Utils = require('web3-utils');

const web3 = new Web3 (new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/690b1a5f315d4feeb65bf406ac059c15'));

var from = "0x8477ce2B3d635C8Af4B5D00a8a4Bf0cFEe4D8951";
var to = ["0xE0E223D0c1828795B95a672B2E0AFc586964f05c","0xAc99440b5e55A44F2Df1693bd40DA0c60A309fd6","0x3DDB4efde58D055a453bbF0e837660a61e9fc16a"];
// while(count < to.length){
// for(let i=0 ; i < to.length ; i++){
// 			result = to[i]
// 			return result
// 				}
// 	}
var count = web3.eth.getTransactionCount(from);
// console.log(count);
// var abiArray = JSON.parse(fs.readFileSync('coin.json', 'utf-8'));
var createtokensContract = web3.eth.contract([
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_spender",
				"type": "address"
			},
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "totalSupply",
				"type": "uint256"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "balance",
				"type": "uint256"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "_spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"name": "remaining",
				"type": "uint256"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"inputs": [],
		"payable": false,
		"type": "constructor",
		"stateMutability": "nonpayable"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_spender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	}
]);



var contractAddress = "0x1503cca4775645af71ba51dd70e98289ab7eb635";

var contract = web3.eth.contract(createtokensContract.abi).at(contractAddress);

// while(count < to.length){
// 	var result = to[count]
// 	// return result

var rawTransaction = {
    "from": from,
    "nonce": Web3Utils.toHex(count),
    "gasPrice": Web3Utils.toHex(Web3Utils.toWei('2', 'gwei')),
    "gasLimit": Web3Utils.toHex(500000),
    "to": contractAddress,
	"value": 0x0,
	"data": contract.transfer.getData(to[2-1], Web3Utils.toWei('33', 'ether')),
    "chainId": "0x03"

};
// count++
// }

var privKey = new Buffer('273A9DFBA15B2730A05DBB8B05445C55309B7CB761595BEA4C7D91EE2B85804F', 'hex');
var tx = new Tx(rawTransaction);
tx.sign(privKey);
var serializedTx = tx.serialize();
web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
    if (!err){
		console.log(hash);
	}
    else {
		console.log(err);
	}
})
// count++
// }

