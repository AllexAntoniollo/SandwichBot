import { ethers, WebSocketLike } from "ethers";
import config from "./config";

const provider = new ethers.InfuraProvider(
  config.NETWORK,
  config.INFURA_API_KEY
);
const signer = new ethers.Wallet(config.PRIVATE_KEY, provider);
