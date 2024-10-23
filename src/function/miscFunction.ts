export const shortenString=(string:`0x${string}`,length=4):string=>{
    if (!string) return "";
    if(string.length<=length) return string;
    return `${string.substring(0,length+2)}...${string.substring(42-length)}`
}

export const convertUnixToHours=(epochTimeDifference:BigInt)=>{
    const totalSecond=Math.floor(Number(epochTimeDifference));
    const hours=Math.floor(totalSecond/3600);
    const minutes=Math.floor((totalSecond%3600)/60);
    const seconds =totalSecond%60;
    return {hours, minutes,seconds};
}