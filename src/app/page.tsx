"use client";
import { useEffect, useState } from "react";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import useReadData from "@/hooks/useReadData";
import { useAccount } from "wagmi";
import { convertUnixToHours, shortenString } from "@/function/miscFunction";
import useSubscribe from "@/hooks/useSubscribe";
import useBuy from "@/hooks/useBuy";
import useApprove from "@/hooks/useApprove";
import { Blocks } from 'react-loader-spinner';

export default function Home() {
  const [value, setValue] = useState<number>(1);
  const [lotdata, readLotteryData] = useReadData();
  const { address } = useAccount();
  const { useBuyData, isLoadingBuy } = useBuy(); // Call the useBuy hook here
  const { useApproveIce, isLoadingApprove } = useApprove(); // Call the useApprove hook here
  const {useSubscribeData,isLoadingSubscribe}= useSubscribe(); // Call the useSubscribe hook here
  
  const [days, setDays] = useState(0);
  const [hours, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isApproved, setIsApproved] = useState(false);

  useEffect(() => {
    if (lotdata) {
      const { days, hours, minutes, seconds } = convertUnixToHours(Number(lotdata?.deadline));
      setHour(hours);
      setMinutes(minutes);
      setSeconds(seconds);
      setDays(days);
    }
  }, [lotdata, address]);

  async function HandleBuy() {
    await useBuyData(value);
    readLotteryData();
    setIsApproved(false);
  }

  async function HandleApprove() {
    await useApproveIce(value * (Number(lotdata?.price)));
    setIsApproved(true);
  }

  function handleReduce() {
    setValue(value - 1);
  }

  function handleIncrease() {
    setValue(value + 1);
  }

  function HandleWhitelist() {
    useSubscribeData();
    readLotteryData();

  }

  return (
    <div className="md:h-screen flex justify-center items-center pb-16 md:pb-0">
      <main className="w-full h-full container-shadow grid place-items-center">
        <div className="gap-8 flex flex-col justify-between py-8  w-full relative">
          <Nav lotteryData={lotdata.userTicketsCount}/>
          <div className="absolute z-[-1000] top-[75px] h-[70%] w-full">
            <Image
              src="/igloo13.jpg"
              alt=""
              height={2160}
              width={4100}
              quality={100}
              className="object-cover w-full h-full overflow-hidden"
            />
            <div className="absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute inset-x-0 top-0 h-[20%] bg-gradient-to-b from-black to-transparent"></div>
          </div>

          <div className="h-1/2 px-4 sm:px-8 md:px-16 lg:px-40 xl:px-72">
            <p className="text-5xl font-bold mb-2">{Number(lotdata?.round)}</p>
            <div className="border-t pt-8 p-4 gap-8 md:gap-5 grid grid-cols-1 md:grid-cols-2 grid-rows-2">
              <div className="grid gap-2 place-items-center">
                <p className="text-xl">Prize Pool</p>
                <button className="rounded-lg py-4 w-full text-2xl font-semibold bg-blue-button transition">
                  {(Number(lotdata?.price) / 10 ** 18) * (Number(lotdata?.ticketsCount))} ICE
                </button>
              </div>
              <div className="grid gap-2 place-items-center">
                <p className="text-xl">Deadline</p>
                <button className="rounded-lg py-4 w-full text-2xl bg-blue-button font-semibold transition">
                  {hours >= 0 ? (
                    <>
                      {days}d {hours}h:{minutes}m:{seconds}s
                    </>
                  ) : (
                    "Time Ended"
                  )}
                </button>
              </div>
              <div className="grid gap-2 place-items-center">
                <p className="text-xl">Ticket</p>
                <button className="rounded-lg py-4 w-full text-2xl bg-blue-button font-semibold transition">
                  Sold: {Number(lotdata.totalTicketsSold)} <br /> Price {Number(lotdata?.price) / 10 ** 18} ICE
                </button>
              </div>
              <div className="grid gap-2 place-items-center">
                <p className="text-xl">Last Win</p>
                <button className="rounded-lg py-4 w-full text-2xl bg-blue-button font-semibold transition">
                  Amount: {Number(lotdata?.lastWinAmount) / 10 ** 18} ICE <br /> User: {address ? shortenString(address) : ""}
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:gap-0 md:flex-row justify-evenly items-center px-8 sm:px-8 md:px-16 lg:px-40 xl:px-72">
            <div className="flex flex-col gap-2 items-center w-full md:w-auto">
              <label className="text-xl">Number of Lottery Tickets</label>
              <div className="flex gap-2 items-center">
                {value>0 && (<button className="text-4xl grid place-items-center" onClick={()=>{handleReduce();setIsApproved(false)}}>
                  
                  <Minus />
                </button>)}
               
                <div className="white-invert rounded-xl px-7 text-xl py-1 text-center">
                  {value}
                </div>
                <button className="text-4xl grid place-items-center" onClick={()=>{handleIncrease();setIsApproved(false)}}>
                  <Plus />
                </button>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-8 md:px-16 lg:px-40 xl:px-72">
            {!lotdata?.whitelisted ? (
              <button
                onClick={HandleWhitelist}
                className="w-full text-4xl py-4 rounded-xl font-bold bg-blue-button transition"
              >
                {isLoadingSubscribe ? (
                    <div className="flex items-center justify-center">
                      <Blocks height="50" width="50" color="#4fa94d" ariaLabel="blocks-loading" visible={true} />
                    </div>
                  ) : (
                    "Subscribe"
                  )}
              </button>
            ) : (
              <div className="flex justify-between">
                <button onClick={HandleApprove} className="text-4xl py-4 rounded-xl font-bold bg-blue-button transition w-[49%]">
                  {isLoadingApprove ? (
                    <div className="flex items-center justify-center">
                      <Blocks height="50" width="50" color="#4fa94d" ariaLabel="blocks-loading" visible={true} />
                    </div>
                  ) : (
                    "Approve"
                  )}
                </button>
                <button
                  onClick={HandleBuy}
                  className={`text-4xl py-4 rounded-xl font-bold bg-blue-button transition w-[49%] ${!isApproved ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {isLoadingBuy ? (
                    <div className="flex items-center justify-center">
                      <Blocks height="50" width="50" color="#4fa94d" ariaLabel="blocks-loading" visible={true} />
                    </div>
                  ) : (
                    "Buy"
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
