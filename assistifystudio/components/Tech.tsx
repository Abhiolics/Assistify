import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
];

export default function IconCloudDemo() {
  return (
    <div className="flex flex-col lg:flex-row justify-center">
       <div className="flex justify-center items-center">
       <h1 className="text-center text-2xl font-semibold">Technologies we are using</h1>
       </div>
    <div className=" flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg  bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
    <div className="flex justify-center items-center">
       <h1 className="text-center text-2xl font-semibold sm:mb-5">to deliever best Products.</h1>
       </div>
   
    </div>
  );
}
