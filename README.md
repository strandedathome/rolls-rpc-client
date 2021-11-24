# PecanRolls RPC Client

TypeScript client for PecanRolls RPC interfaces. All API calls return promises.

### Install and Setup
```
npm install https://github.com/strandedathome/rolls-rpc-client.git
```

### Full Node

```
// test a full node with blockchain and display to console
// run with node index.js

var fullNode = new FullNode_1.FullNode({
    protocol: 'https',
    hostname: 'localhost',
    port: 9877
});

var blockchain = fullNode.getBlockchainState();
blockchain.then(function (fullNode) {
    console.log(fullNode);
});
```

### Wallet

```
import { Wallet } from 'rolls-rpc-client';

const wallet = new Wallet({
    protocol: 'https',
    hostname: 'localhost',
    port: 58765
});

const mnemonic = await wallet.generateMnemonic();
```

### Credits

This client is provided by [Rolls Blockchain Explorer](https://www.pecanrolls.net).
