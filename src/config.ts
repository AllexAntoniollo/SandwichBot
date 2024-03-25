import dotenv from "dotenv";
dotenv.config();

const WALLET: string = `${process.env.WALLET}`;
const PRIVATE_KEY: string = `${process.env.PRIVATE_KEY}`;
const NETWORK: string = `${process.env.NETWORK}`;
const INFURA_API_KEY: string = `${process.env.INFURA_API_KEY}`;
const INFURA_WS_URL: string = `${process.env.INFURA_WS_URL}`;
const INTERVAL: number = parseInt(`${process.env.INTERVAL}`);

export default {
  PRIVATE_KEY,
  NETWORK,
  WALLET,
  INFURA_API_KEY,
  INTERVAL,
  INFURA_WS_URL,
};
