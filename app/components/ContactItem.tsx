interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, text, href }) => (
  <div className="flex items-center space-x-2">
    {icon}
    {href ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-[#D84747] transition-colors"
      >
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </div>
);

export default ContactItem;
