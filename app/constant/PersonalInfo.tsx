import { LuMail } from "react-icons/lu";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default [
  {
    icon: <LuMail className="text-primary" />,
    label: "Email",
    value: "omkarsalapurkar2002@gmail.com",
  },
  {
    icon: <MdOutlinePhoneIphone className="text-primary" />,
    label: "Phone",
    value: "+91 9503270645",
  },
  {
    icon: <MdOutlineCalendarMonth className="text-primary" />,
    label: "Birthday",
    value: "February 16th, 2002",
  },
  {
    icon: <FaLocationDot className="text-primary" />,
    label: "Location",
    value: "Bangalore",
  },
];
