"use client"

import NumberTicker from "@/components/magicui/number-ticker";

const NumberTickerDemo = () => {
  return (
    <div>
        
    <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black dark:text-white mb-8 text-center">
      <NumberTicker value={20} />+  <span className="bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-6xl font-bold leading-none tracking-tighter text-transparent ">Happy Clients</span>
    </p>
    
    </div>
  );
};

export default NumberTickerDemo;
