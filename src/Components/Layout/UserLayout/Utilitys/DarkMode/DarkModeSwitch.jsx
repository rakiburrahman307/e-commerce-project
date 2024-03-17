import { IoSunny,IoMoon } from "react-icons/io5";
import { HiComputerDesktop } from "react-icons/hi2";
import useContextInfo from "../../Hooks/useContextInfo";
import React from "react";
const DarkModeSwitch = () => {
    const {textColor, selectedColor} = useContextInfo();
    const iconName = {
        IoSunny,
        IoMoon,
        HiComputerDesktop
      };
      const icons =[
        {
            name:"IoSunny",
            text:"light"
        },
        {
            name:"IoMoon",
            text:"dark"
        },
        {
            name:"HiComputerDesktop",
            text:"system"
        },
      ]
    return (
        <div className={`dark:text-secondary-text ${selectedColor} rounded-md dark:bg-bg-primary-dark`}>
            {
                icons?.map(icon=><button key={icon?.text} className={`w-8 h-8 text-xl rounded-full m-1 text-sky-600`}>   {React.createElement(iconName[icon?.name], {
                    className: `group-hover:${textColor}`,
                  })}</button>)
            }
        </div>
    );
};

export default DarkModeSwitch;