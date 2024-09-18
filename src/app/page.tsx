'use client'
// import Image from "next/image";
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Home() {
  const [age, setAge] = useState('');
  const [isWhitelisted, setIsWhitelisted] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const handleWhitelist = () => {
    setIsWhitelisted(true);
  }
  return (
    <div className="bg-image h-screen flex justify-center items-center">
      <main className="w-1/2 gap-8 flex flex-col justify-between border p-8 rounded-2xl backdrop-blur-xl">

        <div className="flex justify-between">
          <button className="border py-2 px-7 rounded-lg bg-white/10 hover:bg-white/15 transition">
            Lottery
          </button>

          <div className="flex gap-4 items-center">
            <p className="text-2xl">
              Tickets
            </p>
            <div className="border p-2 rounded-lg bg-white/10 ">
              0/10
            </div>
            <button className="border py-2 px-7 rounded-lg bg-white/10 hover:bg-white/15 transition">
              Wallet
            </button>
          </div>
        </div>

        <div className="h-1/2">
          <p className="text-3xl mb-2">Round #2</p>
          <div className="border rounded-xl p-4 bg-white/5 gap-5 grid grid-cols-2 grid-rows-2">
            <div className="grid gap-2 place-items-center">
              <p className="text-xl">
                Prize Pool
              </p>
              <button className="border rounded-lg py-4 w-full text-2xl bg-white/10 hover:bg-white/15 transition">
                500 ICE
              </button>
            </div>

            <div className="grid gap-2 place-items-center">
              <p className="text-xl">
                Deadline
              </p>
              <button className="border rounded-lg py-4 w-full text-2xl bg-white/10 hover:bg-white/15 transition">
                20m:30s
              </button>
            </div>

            <div className="grid gap-2 place-items-center">
              <p className="text-xl">
                Ticket
              </p>
              <button className="border rounded-lg py-4 w-full text-2xl bg-white/10 hover:bg-white/15 transition">
                Sold: 7 <br /> Price 1 ICE
              </button>
            </div>

            <div className="grid gap-2 place-items-center">
              <p className="text-xl">
                Last Win
              </p>
              <button className="border rounded-lg py-4 w-full text-2xl bg-white/10 hover:bg-white/15 transition">
                Amount: 15.5 ICE <br /> User: 0x653...764
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-evenly items-center">
          <div className="flex gap-2 items-center justify-center">
            <button className='text-4xl grid place-items-center'>
              -
            </button>
            <div className="border rounded-md px-7 text-xl py-1">3</div>
            <button className='text-4xl grid place-items-center'>
              +
            </button>
          </div>
          <div className='relative'>
            <button className="border px-7 py-1 text-xl rounded-md">
              3
            </button>
            <div className="absolute text-xs bottom-[-20px]">Balance: 456</div>
          </div>
          <div>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel
                id="demo-select-small-label"
                sx={{
                  color: "white",
                  '&.Mui-focused': {
                    color: 'white',  // Color when the label floats (on focus)
                  },
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
                    color: 'white',  // Arrow icon color
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

        <div>
          {!isWhitelisted ?
            <button onClick={handleWhitelist} className='border w-full text-4xl py-4 rounded-xl font-bold bg-white/10 hover:bg-white/20 transition'>
              Whitelist
            </button>
            : <button className='border w-full text-4xl py-4 rounded-xl font-bold bg-white/10 hover:bg-white/20 transition'>
              Approve
            </button>   
          }
        </div>
      </main>
    </div>
  );
}
