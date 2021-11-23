import { FullNode } from './src/FullNode';

const fullNode = new FullNode({
    protocol: 'https',
    hostname: 'localhost',
    port: 9877
});

const blockchain = fullNode.getBlockchainState();

blockchain.then(function(fullNode) {
   console.log(fullNode.blockchain_state.space/1024/1024/1024/1024/1024)
})