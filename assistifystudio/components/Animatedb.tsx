import { BorderBeam } from "@/components/magicui/border-beam";

export default function BorderBeamDemo() {
  return (
    
    <div className="relative rounded-xl w-32 text-center">
    <button className="btn my-2 text-center ml">Work</button>
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}
