"use strict";
exports.__esModule = true;
exports.SharedCalls = exports.Wallet = exports.Harvester = exports.Farmer = exports.FullNode = void 0;
var FullNode_1 = require("./src/FullNode");
exports.FullNode = FullNode_1.FullNode;
var Wallet_1 = require("./src/Wallet");
exports.Wallet = Wallet_1.Wallet;
var Harvester_1 = require("./src/Harvester");
exports.Harvester = Harvester_1.Harvester;
var Farmer_1 = require("./src/Farmer");
exports.Farmer = Farmer_1.Farmer;
var SharedCalls_1 = require("./src/SharedCalls");
exports.SharedCalls = SharedCalls_1.SharedCalls;
var fullNode = new FullNode_1.FullNode({
    protocol: 'https',
    hostname: 'localhost',
    port: 9877
});
var blockchain = fullNode.getBlockchainState();
console.log(blockchain);
blockchain.then(function (fullNode) {
    console.log(fullNode);
});
