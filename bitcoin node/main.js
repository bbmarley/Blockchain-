const Client = require('bitcoin-core');
const client = new Client({
network:'mainnet',
host:'localhost',
port: 8332,
username: 'bharath',
password: 'marley'
});

client.getblockchaininfo((error, res) => {
    if(error){console.log(error)}
    else console.log(res)
})