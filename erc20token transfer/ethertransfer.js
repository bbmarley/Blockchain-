const Web3 = require('web3');
var Tx = require('ethereumjs-tx');
var Web3Utils = require('web3-utils');
// Show Web3 where it needs to look for a connection to Ethereum.
//web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/690b1a5f315d4feeb65bf406ac059c15'));
// var gasPrice = "5";//or get with web3.eth.gasPrice
// var gasPrice = 5;
    // web3.eth.getGasPrice(function(error, result) {
    //         console.log('Gas Price: '+ result);
    //         gasPrice = result;
// var gasLimit = 21000;
var addr = "0x8477ce2B3d635C8Af4B5D00a8a4Bf0cFEe4D8951";
var toAddress = "0xE0E223D0c1828795B95a672B2E0AFc586964f05c";
// var amountToSend = "0.1"; //$1
var nonce = web3.eth.getTransactionCount(addr);
var rawTransaction = {
"from": addr,
"nonce": Web3Utils.toHex(nonce),
"gasPrice":Web3Utils.toHex(Web3Utils.toWei('2', 'gwei')),
"gasLimit": Web3Utils.toHex(500000),
"to": toAddress,
"value": web3.toHex(Web3Utils.toWei('1', "ether")),
};
var privateKey = "273A9DFBA15B2730A05DBB8B05445C55309B7CB761595BEA4C7D91EE2B85804F";
var privKey = new Buffer(privateKey, 'hex');
console.log("privKey  : ", privKey);
var tx = new Tx(rawTransaction);
tx.sign(privKey);
var serializedTx = tx.serialize();
console.log('serializedTx : '+serializedTx);
web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
if (!err)
{
console.log('Txn Sent and hash is '+hash);
}
else
{
console.error(err);
}
});