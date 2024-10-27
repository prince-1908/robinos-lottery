/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import LOTTERY_ABI from "@/abi/lottery-contract";
import { CHAIN_INFO } from "@/config/chains-config";
import { config } from "@/config/wagmi-config";
import { readContract } from "@wagmi/core";
import { useCallback, useEffect, useState } from "react";
import { zeroAddress } from "viem";
import { useAccount } from "wagmi";
type lotteryDatas={
  round:number,
  userTicketsCount:number,
  ticketsCount:number,
  maxTickets:number
  totalTicketsSold:number,
  price:number,
  deadline:number,
  burnPercentage:number,
  lastWinAmount:number,
  lastWinner:string,
  whitelisted:boolean
  }
export default function useReadData(): [lotteryDatas, () => Promise<void>] {
 
  const { address } = useAccount();
  const { chainId } = useAccount();
  const [lotdata, setLotdata] = useState<lotteryDatas>({
  round:0,
  userTicketsCount:0,
  ticketsCount:0,
  maxTickets:0,
  totalTicketsSold:0,
  price:0,
  deadline:0,
  burnPercentage:0,
  lastWinAmount:0,
  lastWinner:"id",
  whitelisted:false
  });
  useEffect(() => {
    readLotteryData();
  });
  const readLotteryData = useCallback(async () => {
    const lotteryData = await readContract(config, {
      abi: LOTTERY_ABI,
      address: "0xd58Bbe9",
      functionName: "getAllData",
      args: [address || zeroAddress],
    }) as lotteryDatas;
    setLotdata(lotteryData);
  }, [address]);
  return [lotdata,readLotteryData];
}
