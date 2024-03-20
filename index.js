const nft_for_iot_tool = require('nft-for-iot-tool');
const nft_for_iot_fullsystem = require('nft-for-iot-fullsystem');
const jest = require('jest');
const moment = require('moment');
const request = require('request');
const ipfs_http_client = require('ipfs-http-client');
const fs_extra = require('fs-extra');
const mocha = require('mocha');
const web3 = require('web3');
const eslint = require('eslint');
const async = require('async');

const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'secret');
hmac.update('Hello HMAC');
console.log('HMAC:', hmac.digest('hex'));

const assert = require('assert');
assert.strictEqual(1 + 2, 3, '1 + 2 should be equal to 3');

class Polygon {
  constructor(height, width) {
    this.area = height * width;
  }
}
console.log(new Polygon(4, 3).area);

console.log(`Your OS is ${process.env.OS}`);

const regex = new RegExp('\\bHello\\b');
console.log(regex.test('Hello World'));

// Call a view or pure function on a smart contract using Hardhat
async function callContractFunction() {
  const contractAddress = '0xcontractAddress';
  const YourContract = await ethers.getContractFactory('YourContract');
  const contract = await YourContract.attach(contractAddress);

  const result = await contract.someViewFunction();
  console.log('View function result:', result);
}

callContractFunction().catch(err => {
  console.error('Error calling contract function:', err);
});

// Convert a string to title case
function toTitleCase(str) {
  return str.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}
console.log('Title case:', toTitleCase('hello world'));

// Get the Ethereum protocol version
web3.eth.getProtocolVersion().then(version => {
  console.log('Protocol version:', version);
}).catch(err => {
  console.error('Error getting protocol version:', err);
});