/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import LOTTERY_ABI from "@/abi/lottery-contract";
import { CHAIN_INFO } from "@/config/chains-config";
import { config } from "@/config/wagmi-config";
import { useWriteContract } from "wagmi";
import { useEffect, useState } from "react";
import { zeroAddress } from "viem";
import { useAccount } from "wagmi";
import ERC20_ABI from "@/abi/token-abi";
import { waitForTransactionReceipt } from "wagmi/actions";
export default function useApprove() {
  const {data:hash,writeContractAsync}=useWriteContract()
  const { address } = useAccount();
  const { chainId } = useAccount();
  const [isLoadingApprove, setisLoadingApprove] = useState(false);
  async function useApproveIce(price:number) {
    setisLoadingApprove(true);
    try{
    const approveIce = await writeContractAsync({
      abi: ERC20_ABI,
      address: CHAIN_INFO[5003].tokens[1].contractAddress,
      functionName: "approve",
      args: [CHAIN_INFO[5003].LOTTERY_ADDRESS,price],
    });
    const stakeTxReceipt = await waitForTransactionReceipt(config, {
        hash: approveIce,
      });
      if (stakeTxReceipt.status == "success") {
        setisLoadingApprove(false);
      }
      setisLoadingApprove(false);
  }catch(e)
  {
    setisLoadingApprove(false);
  }
  
}
return {useApproveIce,isLoadingApprove};
}
