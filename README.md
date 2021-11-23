# PecanRolls RPC Client

TypeScript client for communicating with [PecanRolls](https://explorer.pecanrolls.net/) RPC interfaces. All API calls return promises.

### Install and Setup
```
npm install rolls-rpc-client
```

### Full Node

```
import { FullNode } from 'rolls-rpc-client';

const fullNode = new FullNode({
    protocol: 'https',
    hostname: 'localhost',
    port: 4321
});

const blockchain = fullNode.getBlockchainState();

console.log(await blockChainState.blockchain_state.space);
```

### Wallet

```
import { Wallet } from 'chia-client';

const wallet = new Wallet({
    protocol: 'https',
    hostname: 'localhost',
    port: 8765
});

const mnemonic = await wallet.generateMnemonic();
```

### Credits

This client is provided by [PecanRolls Blockchain Explorer](https://explorer.pecanrolls.net).
