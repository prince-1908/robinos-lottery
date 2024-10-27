/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import LOTTERY_ABI from "@/abi/lottery-contract";
import { CHAIN_INFO } from "@/config/chains-config";
import { config } from "@/config/wagmi-config";
import { useWriteContract } from "wagmi";
import { useEffect, useState } from "react";
import { zeroAddress } from "viem";
import { useAccount } from "wagmi";
import { waitForTransactionReceipt } from "@wagmi/core";
export default function useBuy() {
  const {data:hash,writeContractAsync}=useWriteContract()
  const { address } = useAccount();
  const { chainId } = useAccount();
  const [lotdata, setLotdata] = useState();
  const [isLoadingBuy, setisLoadingBuy] = useState(false);
  async function useBuyData(ticketCount:number) {
    try{
    setisLoadingBuy(true);
    const buyIce = await writeContractAsync({
      abi: LOTTERY_ABI,
      address: "0xd58B1AE005B3c99266Bb005C9D4256cd69d24be9",
      functionName: "buyWithICE",
      args: [ticketCount],
    });
    const stakeTxReceipt = await waitForTransactionReceipt(config, {
      hash: buyIce,
    });
  
  if (stakeTxReceipt.status == "success") {
    setisLoadingBuy(false);
  }
  

}catch(e)
{
setisLoadingBuy(false);
}
 
}
return {useBuyData,isLoadingBuy};
}