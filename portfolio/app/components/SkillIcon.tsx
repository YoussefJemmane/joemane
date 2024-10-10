
const SkillIcon = ({ Icon, name }) => (
  <div className="flex flex-col items-center mx-4">
     <Icon className="w-[100px] h-[100px] grayscale" alt={name} />
  </div>
);

export default SkillIcon;
