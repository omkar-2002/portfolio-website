import React, { ReactElement } from "react";
import './styles.css'
type InfoCardProps = {
  value: string;
  label: string;
  icon: ReactElement;
};

const InfoCard: React.FC<InfoCardProps> = ({ value, label, icon }) => {
  return (
    <div className="flex items-center mt-10 self-start">
      <div className="w-[46px] h-[46px] flex justify-center items-center card-bg-primary">
        {icon}
      </div>
      <div className="flex flex-col ml-4 max-w-[70%]">
        <p className="text-primarytext1 text-xs">{label}</p>
        <h4 className="text-primarytext text-sm truncate-text">{value}</h4>
      </div>
    </div>
  );
};

export default InfoCard;
