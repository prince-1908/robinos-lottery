'use client'
// import Image from "next/image";
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [age, setAge] = useState<string>('');
  const [isWhitelisted, setIsWhitelisted] = useState<boolean>(false);
  const [value, setValue] = useState<number>(3);

  const handleReduce = () => {
    setValue(value - 1);
  }

  const handleIncrease = () => {
    setValue(value + 1);
  };
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const handleWhitelist = () => {
    setIsWhitelisted(true);
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <main className="w-full h-full container-shadow grid place-items-center">

        <div className='gap-8 flex flex-col justify-between py-8  w-full relative'>
          <div className="flex justify-between px-72">
            <button className="bg-blue-button rounded-lg px-10 py-[0.66rem] font-semibold text-2xl">
              Lottery
            </button>
            <div className="flex gap-4 items-center">
              <p className="text-4xl font-semibold">
                Tickets
              </p>
              <div className="blue-invert rounded-lg px-10 py-[0.66rem] font-semibold text-2xl">
                0
              </div>
              <button className="bg-blue-button rounded-lg px-10 py-[0.66rem] font-semibold text-2xl">
                Wallet
              </button>
            </div>
          </div>

          <div className='absolute z-[-1000] top-[75px] h-[70%] w-full'>
            <Image
              src="/igloo13.jpg"
              alt=""
              height={2160}
              width={4100}
              quality={100}
              className='object-cover w-full h-full overflow-hidden'
            />
            <div className="absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute inset-x-0 top-0 h-[20%] bg-gradient-to-b from-black to-transparent"></div>
          </div>

          <div className="h-1/2 px-72">
            <p className="text-5xl font-bold mb-2">Round #2</p>
            <div className="border-t p-4  gap-5 grid grid-cols-2 grid-rows-2">
              <div className="grid gap-2 place-items-center">
                <p className="text-xl">
                  Prize Pool
                </p>
                <button className="rounded-lg py-4 w-full text-2xl font-semibold bg-blue-button transition">
                  500 ICE
                </button>
              </div>
              <div className="grid gap-2 place-items-center">
                <p className="text-xl">
                  Deadline
                </p>
                <button className=" rounded-lg py-4 w-full text-2xl bg-blue-button font-semibold transition">
                  20m:30s
                </button>
              </div>
              <div className="grid gap-2 place-items-center">
                <p className="text-xl">
                  Ticket
                </p>
                <button className="rounded-lg py-4 w-full text-2xl bg-blue-button font-semibold transition">
                  Sold: 7 <br /> Price 1 ICE
                </button>
              </div>
              <div className="grid gap-2 place-items-center">
                <p className="text-xl">
                  Last Win
                </p>
                <button className="rounded-lg py-4 w-full text-2xl bg-blue-button font-semibold transition">
                  Amount: 15.5 ICE <br /> User: 0x653...764
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly items-center px-72">
            <div className="flex gap-2 items-center justify-center">
              <div className=''>
                <button
                  className='text-4xl grid place-items-center'
                  onClick={handleReduce}
                >
                  <Minus />
                </button>
              </div>
              <div className="white-invert rounded-xl px-7 text-xl py-1">
                {value}
              </div>
              <button
                className='text-4xl grid place-items-center'
                onClick={handleIncrease}
              >
                <Plus />
              </button>
            </div>
            <div className='relative'>
              <div className="white-invert px-7 py-1 text-xl rounded-xl">
                3
              </div>
              <div className="absolute text-white text-xs bottom-[-20px]">Balance: 456</div>
            </div>
            <div>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel
                  id="demo-select-small-label"
                  sx={{
                    color: "white",
                    '&.Mui-focused': {
                      color: 'white',
                    }
                  }}
                >Age</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  sx={{
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '.MuiSelect-icon': {
                      color: 'white',
                    },
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className='px-72'>
            {!isWhitelisted ?
              <button onClick={handleWhitelist} className='w-full text-4xl py-4 rounded-xl font-bold bg-blue-button transition'>
                Whitelist
              </button>
              : <div className='flex justify-between'>
                <button className='text-4xl py-4 rounded-xl font-bold bg-blue-button transition w-[49%]'>
                  Approve
                </button>
                <button className='text-4xl py-4 rounded-xl font-bold bg-blue-button transition w-[49%]'>
                  Buy
                </button>
              </div>
            }
          </div>
        </div>
      </main>
    </div>
  );
}
