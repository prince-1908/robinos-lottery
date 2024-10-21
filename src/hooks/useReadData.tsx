/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import LOTTERY_ABI from "@/abi/lottery-contract";
import { CHAIN_INFO } from "@/config/chains-config";
import { config } from "@/config/wagmi-config";
import { readContract } from "@wagmi/core";
import { useEffect, useState } from "react";
import { zeroAddress } from "viem";
import { useAccount } from "wagmi";
export default function useReadData() {
  const { address } = useAccount();
  const { chainId } = useAccount();
  const [lotdata, setLotdata] = useState<any>();
  useEffect(() => {
    console.log("hello");
    readLotteryData();
  }, [address, chainId]);
  async function readLotteryData() {
    const lotteryData: any = await readContract(config, {
      abi: LOTTERY_ABI,
      address: "0xd58B1AE005B3c99266Bb005C9D4256cd69d24be9",
      functionName: "getAllData",
      args: [address ? address : zeroAddress],
    });
    setLotdata(lotteryData);
    console.log(lotteryData.totalTicketsSold);
  }
  return [lotdata];
}
