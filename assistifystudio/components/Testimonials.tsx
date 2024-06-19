import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Vaibhav Tirpathi",
    username: "@Vaibhavtirpathi",
    body: "We approached Assitify Studio for a complete rebranding, including a new logo and website. The results were beyond our expectations. The new design is fresh, modern, and truly represents our mission. We couldn't be happier!",
    img: "./empty.avif",
  },
  {
    name: "Alok Dubey",
    username: "@dubey.alok19",
    body: "From start to finish, [Your Startup Name] delivered a seamless process. They listened to our needs, provided valuable insights, and delivered a stunning e-commerce site. Our online sales have improved dramatically.",
    img: "./empty.avif",
  },
  {
    name: "Abhishek Singh",
    username: "@abhisheksingh09",
    body: "Assistify Studio handled the design and development of our complex web platform flawlessly. Their technical expertise and creative vision resulted in a product we're proud of.",
    img: "./empty.avif",
  },
  {
    name: "Shubham Pandey",
    username: "@shubh16",
    body: "Flawless handling of complex web platform design and development.",
    img: "./empty.avif",
  },
  {
    name: "Jenny",
    username: "@jennyfer",
    body: "Results exceeded our expectations, fresh and modern design",
    img: "./empty.avif",
  },
  {
    name: "Arpit Thakur",
    username: "@arpitsingh01",
    body: "Professional logo and brand identity, highly skilled and creative team.",
    img: "./empty.avif",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="30" height="30" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default MarqueeDemo;
