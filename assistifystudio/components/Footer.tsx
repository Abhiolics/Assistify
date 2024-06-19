"use client"

import Link from "next/link";
import { CoolMode } from "./magicui/cool-mode";
import { NeonGradientCard } from "./magicui/neon-gradient-card";

// components/Footer.js

const Footer = () => {
    return (
        <div>
      <footer className="bg-[url(https://cdn.pixabay.com/photo/2021/02/05/18/05/paper-5985445_1280.jpg)]   text-white pt-12 pb-6" >
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2 ">
                <p className="text-[9px] semibold">Don't click on  this icon</p>
                <CoolMode>
                <img src="https://media.licdn.com/dms/image/D560BAQEEyjAG3fXM8g/company-logo_100_100/0/1717747661665/assistifystudio_logo?e=1726704000&v=beta&t=Pr68g_GmEISKFwdnD0F03GWU7O9RX4pWk4THQ-FbImQ" alt="" />
                </CoolMode>
              <h2 className="text-2xl font-semibold "><span className="text-orange-400">Assistify </span>Studio.</h2>
              <p className="text-green-600 font-semibold">Turning ideas into intuitive experiences.</p>
              <p className="text-lg mt-4  backdrop-filter backdrop-blur-lg rounded-lg">Let's work together and create something amazing. Feel free to reach out! :)</p>
              
            </div>
            <div className="flex flex-col">
          <NeonGradientCard className="h-18 " >
            <div className="flex  justify-center items-center bg-[url()]  "> 

           <h1 className="text-black text-2xl justify-center font-itallic">Connect with us</h1>
           <Link href="https://www.instagram.com/assistify.studio/" target="blank"><img src="https://img.icons8.com/?size=48&id=32323&format=png" alt="" /> </Link>
           <Link href="https://www.linkedin.com/company/103033674/admin/feed/posts/" target="blank"> <img src="https://img.icons8.com/?size=48&id=13930&format=png" alt="" /></Link>
           <Link href=""><img src="https://img.icons8.com/?size=48&id=ClbD5JTFM7FA&format=png" alt="" /></Link>
           </div>
          </NeonGradientCard>
          <h1 className="text-center mt-5">Built with lots of high octane fuel <br /> <span className="text-orange-500 font-semibold">by Abhay Pratap Singh </span></h1>
          </div>
          </div>
       
          <div className="text-center mt-8">
            <p>&copy; {new Date().getFullYear()} Assitify Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
    );
  };
  
  export default Footer;
  
  