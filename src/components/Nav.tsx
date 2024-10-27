import React, { useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SquareMenu } from "lucide-react";
import WalletButton from "./Wallet_Button";
interface MyComponentProps {
  lotteryData: number;
}
export const Nav:React.FC<MyComponentProps>= ({lotteryData}) => {
  
  useEffect(() => {
    
  }, []);
  return (
    <>
      <div className="hidden sm:flex justify-between sm:px-8 md:px-16 lg:px-40 xl:px-72">
        <button className="bg-blue-button rounded-lg px-10 py-[0.66rem] font-semibold text-2xl">
          Lottery
        </button>
        <div className="flex gap-4 items-center">
          <p className="text-4xl font-semibold">Tickets</p>
          <div className="blue-invert rounded-lg px-10 py-[0.66rem] font-semibold text-2xl">
            {Number(lotteryData)}
          </div>
          <div className="">
            <WalletButton />
          </div>
        </div>
      </div>

      <div className="block sm:hidden absolute top-8 right-8">
        <Sheet>
          <SheetTrigger>
            <SquareMenu size={34} />
          </SheetTrigger>
          <SheetContent className="bg-aurora">
            <SheetHeader className="py-8 flex flex-col justify-between items-start">
              <SheetTitle>
                <div className="flex gap-4 pb-4">
                  <p className="text-2xl text-white font-semibold">Tickets</p>
                  <div className="border-2 border-white text-white px-4 rounded-xl font-semibold text-2xl">
                  {Number(lotteryData)}
                  </div>
                </div>
              </SheetTitle>
              {/* seperator */}
              <div className="w-full bg-white h-[1px]"></div>
              <SheetDescription className="flex flex-col w-full gap-4 pt-8">
                <button className="bg-blue-button rounded-lg text-white font-semibold text-2xl py-2">
                  Lottery
                </button>
                <div className="">
            <WalletButton />
          </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};
