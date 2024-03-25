import { ethers, WebSocketLike, AbiCoder } from "ethers";
import config from "./config";
import ABI_ROUTER from "./abi.router.json";

// const provider = new ethers.InfuraProvider(
//   config.NETWORK,
//   config.INFURA_API_KEY
// );
// const signer = new ethers.Wallet(config.PRIVATE_KEY, provider);
type WebSocketBot = WebSocketLike & { ping: () => void };
async function start() {
  const wsProvider = new ethers.WebSocketProvider(config.INFURA_WS_URL);
  const router = new ethers.Contract(
    config.SWAP_ROUTER,
    ABI_ROUTER,
    wsProvider
  );

  let blockNumber = await wsProvider.getBlockNumber();

  // Verifica as transações em cada bloco
  wsProvider.on("block", async (blockNumber) => {
    let block = await wsProvider.getBlock(blockNumber);
    if (!block) return;

    // Itera sobre as transações no bloco
    for (let txHash of block.transactions) {
      let tx = await wsProvider.getTransaction(txHash);

      // Verifica se a transação é para o contrato de interesse
      if (tx && tx.to === config.SWAP_ROUTER) {
        const data = tx.data;
        console.log(tx);
      }
    }
    console.log(1);
  });
}

start();
