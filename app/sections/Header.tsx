import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import ContactItem from "../components/ContactItem";
import  photo  from "@/app/assets/p.jpg"
import Image from "next/image";

const Header = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-6 md:space-y-0">
        <div className="flex-shrink-0">
          <Image
            src={photo} 
            alt="Profile"
            className="rounded-full w-[150px] h-[150px] object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-[#D84747]">
            Youssef Jemmane
          </h1>
          <h2 className="text-xl md:text-2xl text-[#D84747] italic font-medium mt-2">
            Backend Developer
          </h2>
        </div>
        <div className="flex flex-col space-y-2">
          <ContactItem icon={<Mail size={20} />} text="youssef.jemmane@outlook.com" href="mailto:youssef.jemmane@outlook.com" />
          <ContactItem icon={<MapPin size={20} />} text="Casablanca, Morocco" />
          <ContactItem icon={<Phone size={20} />} text="+212 675-396915" href="tel:+212675396915" />
          <ContactItem icon={<Github size={20} />} text="YoussefJemmane" href="https://github.com/YoussefJemmane" />
          <ContactItem icon={<Linkedin size={20} />} text="Youssef Jemmaane" href="https://www.linkedin.com/in/jemmaneyoussef/" />
        </div>
      </div>
    </div>
  );
};



export default Header;