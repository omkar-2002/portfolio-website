import React, { ReactElement } from "react";
import Image from "next/image";
import InfoCard from "../InfoCard";
import PersonalData from "@/app/constant/PersonalInfo";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import "./styles.css";
const profile = require("../../../public/my-avatar.png");

type SideBarProps = {};

type PersonalDataProps = {
  value: string;
  label: string;
  icon: ReactElement;
};

const SideBar: React.FC<SideBarProps> = ({}) => {
  return (
    <div className="flex flex-col items-center bg-[#1E1E1F] px-10 py-10 rounded-[20px] custom-border">
      <div className="w-[150px] h-[150px] bg-[#FFFFFF] rounded-3xl">
        <Image
          src={profile}
          style={{ width: "100%", height: "100%" }}
          alt={""}
        />
      </div>
      <h1 className="m-0 p-0 text-center text-2xl mt-6 text-primary">
        Omkar Salapurkar
      </h1>
      <div className="px-3 pr-2 bg-[#2B2B2C] text-[#FFFFFF] rounded-[6px] text-[14px] mt-4">
        Frontend Developer
      </div>
      <div className="w-[100%] h-[1px] bg-[#383838] mt-8"></div>
      {PersonalData?.map((item: PersonalDataProps) => (
        <InfoCard value={item?.value} label={item?.label} icon={item?.icon} />
      ))}
      <div className="flex items-center justify-center mt-10">
        <FaLinkedinIn className="text-primarytext1 mr-3" />
        <FaInstagram className="text-primarytext1 mr-3" />
        <FaTwitter className="text-primarytext1" />
      </div>
    </div>
  );
};

export default SideBar;
