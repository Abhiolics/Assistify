import {
    MagicCard,
    MagicContainer,
  } from "@/components/magicui/magic-card";
  
  export default function MagicCardDemo() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-1 p-10 bg-[url(https://img.freepik.com/free-vector/colorful-confetti-background-with-text-space_1017-32374.jpg?t=st=1718432200~exp=1718435800~hmac=ec66bd62958844517940c3ac4eeddd7e14fd34b348299d55a9871c6b154260ef&w=1380)]">
            <div className="rounde-full">
            <h1 className="text-center font-bold text-4xl mb-2 backdrop-filter backdrop-blur-lg py-2 rounded-3xl">Our Process to solve any problem</h1></div>
      <MagicContainer
        className={
          "flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"
        }
      >
        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl">
          <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
            Magic
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl">
          <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
            Card
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl">
          <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
            Demo
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
      </MagicContainer>
      </div>
    );
  }
  