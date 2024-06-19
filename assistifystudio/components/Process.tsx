'use client';
import { MagicCard, MagicContainer } from "@/components/magicui/magic-card";
import { useRef } from "react";
import { FcMindMap } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";

export default function MagicCardDemo() {



  return (
    <div className="grid grid-cols-1 lg:grid-cols-1 p-12 ">
      <div className="rounded-full">
        <h1 className="text-center font-bold text-4xl mb-10 backdrop-filter backdrop-blur-lg py-2 rounded-3xl">
          Our Process to Solve Any Problem
        </h1>
      </div>
      <MagicContainer
        className={
          "flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row "
        }
      >
        <MagicCard className="flex w-full  cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl">
          <div className="flex gap-3 mb-3 justify-center items-center">
<h1 className="font-semibold text-2xl">Step 1</h1><FcMindMap  size={25}/>
</div>
<p className="text-sm  sm:text[5px]"><span className="font-bold">Consultation: </span>We begin with an in-depth consultation to understand your goals, brand, and vision. This helps us align our creativity and technical expertise with your needs.
<br /><span className="font-bold">Research & Analysis:</span> We conduct thorough research on your industry, competitors, and target audience to ensure our designs and solutions stand out.
<br /><span className="font-bold">Strategy & Planning: </span>We create a strategic plan outlining the project scope, timeline, and deliverables, ensuring transparency and clear expectations from the start.</p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>

        {/* Step 2 */}
        <MagicCard className="flex w-full  cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl">
          <div className="flex gap-3 mb-3 justify-center items-center">
<h1 className="font-semibold text-2xl">Step 2</h1><FcBullish   size={25}/>
</div>
<p className="text-sm"><span className="font-bold">Creative Design: </span>Our talented designers craft visually stunning and user-friendly designs for your website, app, or logo. We focus on creating designs that not only look great but also provide an excellent user experience.
<br /><span className="font-bold">Development:</span>  Our skilled developers turn the designs into functional and responsive websites or applications using the latest technologies and best practices. We ensure everything works seamlessly across all devices and platforms.
{/* <br /><span className="font-bold">Feedback & Revisions: </span> We share the prototypes and designs with you for feedback. Your input is invaluable, and we make necessary revisions to ensure the final product aligns perfectly with your vision. */}
</p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>

        {/* Step 3 */}
        <MagicCard className="flex w-full  cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl">
          <div className="flex gap-3 mb-3 justify-center items-center">
<h1 className="font-semibold text-2xl">Step 3</h1><FcAbout   size={25}/>
</div>
<p className="text-sm"><span className="font-bold">Testing & Quality Assurance</span>Before launch, we perform rigorous testing to ensure everything is working perfectly. This includes checking for bugs, compatibility issues, and performance optimization.
<br /><span className="font-bold">Ongoing Support:</span>  Our relationship doesn’t end at launch. We offer ongoing support and maintenance services to keep your site or app running smoothly. Whether it's updates, upgrades, or troubleshooting, we're here to help you succeed.
{/* <br /><span className="font-bold">Feedback & Revisions: </span> We share the prototypes and designs with you for feedback. Your input is invaluable, and we make necessary revisions to ensure the final product aligns perfectly with your vision. */}
</p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        
      </MagicContainer>
    </div>
  );
}

