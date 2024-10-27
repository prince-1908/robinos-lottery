/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import LOTTERY_ABI from "@/abi/lottery-contract";
import { CHAIN_INFO } from "@/config/chains-config";
import { config } from "@/config/wagmi-config";
import { useWriteContract } from "wagmi";
import { useEffect, useState } from "react";
import { zeroAddress } from "viem";
import { useAccount } from "wagmi";
export default function useSubscribe() {
  const {data:hash,writeContractAsync}=useWriteContract()
  const { address } = useAccount();
  const { chainId } = useAccount();
  async function useSubscribeData() {
    const subscribe = await writeContractAsync({
      abi: LOTTERY_ABI,
      address: "0xd58B1AE005B3c99266Bb005C9D4256cd69d24be9",
      functionName: "subscribe",
      args: [],
    });
   
  }
  return [useSubscribeData];
}
