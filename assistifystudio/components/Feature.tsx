import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

export default async function NeonGradientCardDemo() {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-4  mb-10 p-10 gap-8">
    <NeonGradientCard className="max-w-sm  i text-center">
      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
        Assistify Studio.
      </span>
      <p>hhhhh</p>
    </NeonGradientCard>
    <NeonGradientCard className="max-w-sm ">
      <div>
        <h1 className="text-3xl font-bold">Research & Planning</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officia nobis vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellendus, beatae non qui vitae maxime.</p>
      </div>
    </NeonGradientCard>
    <NeonGradientCard className="max-w-sm ">
      <div>
        <h1 className="text-3xl font-bold">Research & Planning</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officia nobis vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellendus, beatae non qui vitae maxime.</p>
      </div>
    </NeonGradientCard>
    <NeonGradientCard className="max-w-sm ">
      <div>
        <h1 className="text-3xl font-bold">Research & Planning</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officia nobis vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellendus, beatae non qui vitae maxime.</p>
      </div>
    </NeonGradientCard>
    </div>
  );
}
