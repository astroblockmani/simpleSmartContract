var contractABI = [];
var contractAddress = "0x86D61C182962Cef7b72fF92aaF0D93005F49D6f3";

var web3 = new Web3("http://localhost:9545");
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpleSmartContract);

web3.eth.getAccounts().then(console.log);
