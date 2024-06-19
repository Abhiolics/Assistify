import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Animatedb from "@/components/Animatedb"
import About from "@/components/About"
import ComingSoon from "@/components/ComingSoon"
import Testimonials from "@/components/Testimonials"
import Feature from "@/components/Feature"
import Approach from "@/components/Approach"
import Process from "@/components/Process"
import Tech from "@/components/Tech"
import Footer from "@/components/Footer"
import Clients from "@/components/Clients"

export default function Home() {
  return (
  <>
  <main className="">
    <ComingSoon/>
  <Navbar/>
  <Hero/>
  <About/>
  {/* <Feature/> */}
  <Process/>
  <Tech/>
  <Clients/>
  <Testimonials/>
  <Footer/>
  </main>
  
  </>
  );
}
