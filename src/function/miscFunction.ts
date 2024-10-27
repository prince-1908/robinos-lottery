export const shortenString=(string:`0x${string}`,length=4):string=>{
    if (!string) return "";
    if(string.length<=length) return string;
    return `${string.substring(0,length+2)}...${string.substring(42-length)}`
}

export const convertUnixToHours=(epochTimeDifference:number)=>{
    const difference= Number(epochTimeDifference)*1000-Date.now();
    const days=Math.floor(difference/(1000*60*60*24));
    const hours=Math.floor((difference/(1000*60*60))%24);
    const minutes=Math.floor((difference/(1000*60))%60);
    const seconds =Math.floor((difference/(1000))/60);
    return {days,hours, minutes,seconds};
}