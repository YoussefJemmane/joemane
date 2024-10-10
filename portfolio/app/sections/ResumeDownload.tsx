import React from "react";
import { Download } from "lucide-react";
import pdf from "@/app/assets/YoussefJemmane.pdf";
const ResumeDownload = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#D84747]">
            Download My Resume
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Get a comprehensive overview of my skills and experience
          </p>
        </div>
        <div>
          <a
            href="/YoussefJemmane.pdf"
            download="Youssef_Jemmane.pdf"
            className="inline-flex items-center px-6 py-3 bg-[#D84747] text-white font-semibold rounded-lg hover:bg-[#C13636] transition duration-300"
          >
            <Download size={20} className="mr-2" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeDownload;
