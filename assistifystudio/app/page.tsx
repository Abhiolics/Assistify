import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Animatedb from "@/components/Animatedb"
import About from "@/components/About"
import ComingSoon from "@/components/ComingSoon"
import Feature from "@/components/Feature"

export default function Home() {
  return (
  <>
  <main className="">
    <ComingSoon/>
  <Navbar/>
  <Hero/>
  <About/>
  <Feature/>
  </main>
  
  </>
  );
}
