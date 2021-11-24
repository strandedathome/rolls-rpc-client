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
    port: 9987
});
```

For using ts-node
```
blockchain.then(function(fullNode) {
   console.log(fullNode.blockChainState.blockchain_state)
})
```
### Credits

This client is provided by [PecanRolls Blockchain Explorer](https://explorer.pecanrolls.net).
