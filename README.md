# PecanRolls RPC Client

TypeScript client for PecanRolls RPC interfaces. All API calls return promises.

### Install and Setup
```
npm install https://github.com/strandedathome/rolls-rpc-client.git
```

### Full Node

```
import { FullNode } from 'rolls-rpc-client';

const fullNode = new FullNode({
    protocol: 'https',
    hostname: 'localhost',
    port: 9877
});

const blockchain = fullNode.getBlockchainState();


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
