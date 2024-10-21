import { mantle } from "./wagmi-config";
import RPC from "@/lib/rpc-list";
export const INPUT_CHAIN_URL = RPC[mantle.id][0];
type token = {
  chainID: string;
  symbol: string;
  contractAddress: `0x${string}`;
  img: string;
  altText: string;
  decimal: number;
  balance: number;
};
type ChainInfo = {
  active: boolean;
  mainnet: boolean;
  explorer: string;
  label: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: 18;
  };
  rpcUrl: string;
  img: string;
  altText: string;
  LOTTERY_ADDRESS: `0x${string}`;
  tokens: token[];
};
export const CHAIN_INFO: { [key: string]: ChainInfo } = {
  [mantle.id]: {
    active: true,
    mainnet: false,
    explorer: "https://explorer.sepolia.mantle.xyz/",
    label: "Mantle Testnet",
    nativeCurrency: {
      name: "Mantle",
      symbol: "MNT",
      decimals: 18,
    },
    rpcUrl: RPC[mantle.id][0],
    img: "https://raw.githubusercontent.com/swapsicledex/robinos-images/master/brand/partner/botanix.png",
    altText: "Mantle logo",
    LOTTERY_ADDRESS: "0xd58B1AE005B3c99266Bb005C9D4256cd69d24be9",
    tokens: [
      {
        chainID: "5003",
        symbol: "SLUSH",
        contractAddress: "0x36BFE1F1b36CfdB4fe75cC592FF5dC6200Ad3E0f",
        img: "https://raw.githubusercontent.com/swapsicledex/robinos-images/master/brand/partner/PUSD.png",
        altText: "MNT logo",
        decimal: 18,
        balance: 0,
      },
      {
        chainID: "5003",
        symbol: "Ice Token",
        contractAddress: "0x0c4e57A3a3EF4790C4848a711851DC08e8A16dA7",
        img: "https://raw.githubusercontent.com/swapsicledex/robinos-images/master/brand/partner/PUSD.png",
        altText: "MNT logo",
        decimal: 18,
        balance: 0,
      },
    ],
  },
};
// URLs
export const METAMASK_URL = "https://metamask.io/download/";
