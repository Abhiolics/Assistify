import BoxReveal from "@/components/magicui/box-reveal";

import { Button } from "@/components/ui/button";
import { BorderBeam } from "./magicui/border-beam";
import WordPullUp from "./magicui/word-pul-up";
import Ripple from "./magicui/ripple";
import RetroGrid from "./magicui/retro-grid";
import Link from "next/link";
import { CoolMode } from "./magicui/cool-mode";

export default async function BoxRevealDemo() {
  return (
    <div className="flex  justify-center  items-center p-5 ">
    <div className=" max-w-[32rem]  pt-8">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Assistify Studio<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          ONE Stop for{" "}
          <span className="text-[#5046e6]">Designers & Developers</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-[1.5rem]">
          <p>
            -&gt; 20+ Happy Clients we are closed till now by providing services,
            <span className="font-semibold text-[#5046e6]"> Logo Design</span>,
            <span className="font-semibold text-[#5046e6]"> Graphic Design</span>,
            <span className="font-semibold text-[#5046e6]">Website/App Design</span>,
            and
            <span className="font-semibold text-[#5046e6]"> Social Media Optimization</span>
            . <br />
            -&gt; 100% quality work by experienced employees. <br />
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-3">
            <Link href="https://www.instagram.com/assistify.studio" target="blank">
         
        <Button className=" bg-[#5046e6] text-white hover:text-black border hover:border-blue-600">Explore
    
        </Button></Link> </div> 
        
      </BoxReveal>
    </div>

  
    <RetroGrid/>
    </div>
  );
}
