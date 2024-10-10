import React from "react";
import { Menu as MenuIcon } from "lucide-react";

const MenuButton = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-full ${
        isOpen ? "bg-[#B63E3E]" : "bg-[#D84747]"
      } text-white hover:bg-[#B63E3E] transition-colors duration-200`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <MenuIcon size={24} />
    </button>
  );
};

export default MenuButton;