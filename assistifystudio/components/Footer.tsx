"use client"

import { CoolMode } from "./magicui/cool-mode";

// components/Footer.js

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2  backdrop-filter backdrop-blur-lg">
                <p className="text-[9px] semibold">Don't click on  this icon</p>
                <CoolMode>
                <img src="https://media.licdn.com/dms/image/D560BAQEEyjAG3fXM8g/company-logo_100_100/0/1717747661665/assistifystudio_logo?e=1726704000&v=beta&t=Pr68g_GmEISKFwdnD0F03GWU7O9RX4pWk4THQ-FbImQ" alt="" />
                </CoolMode>
              <h2 className="text-2xl font-semibold "><span className="text-orange-400">Assistify </span>Studio.</h2>
              <p className="text-green-400">Turning ideas into intuitive experiences.</p>
              <p className="text-lg mt-4">Let's work together and create something amazing. Feel free to reach out!</p>
              
            </div>
            <div className="col-span-1">
              <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
              <ul className="text-lg">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Portfolio</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">About Me</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
  