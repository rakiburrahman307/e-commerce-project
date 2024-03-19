import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import ColorPalette from "../ColorPalette/ColorPalette";
import { GrClose } from "react-icons/gr";
import useContextInfo from "../../Hooks/useContextInfo";
import DarkModeSwitch from "../DarkMode/DarkModeSwitch";


const RightButton = () => {
    const [isOpenDrawer, setIsOpenDrawer] = useState(true);
    const { selectedColor } = useContextInfo();

    const utilityButton = [
        {
            id: 1,
            child: (
                <>
                    <FaArrowLeft size={25} />Utility
                </>
            ),
            style: 'rounded-tr-lg',
        },
    ];

    return (
        <div>

            {
                isOpenDrawer ? (<div className=" top-[35%] right-0 fixed z-10">
                    {
                        utilityButton?.map(({ id, child }) =>
                            <li
                                onClick={() => setIsOpenDrawer(false)}
                                key={id}
                                className={`flex justify-between items-center w-36 h-14 px-4 mr-[-90px] duration-300 ${selectedColor} hover:mr-[-10px] cursor-pointer rounded-tl-2xl rounded-bl-2xl dark:bg-bg-primary-dark dark:text-secondary-text-dark`}>
                                <p

                                    className="flex justify-between items-center w-full text-white rounded-tr-lg">{child}</p>
                            </li>
                        )
                    }


                </div>) : (
                    <div className={`fixed top-[35%] ${isOpenDrawer ? 'translate-x-[9000px]' : 'translate-x-[300px] right-[280px]'} z-10 transition-all duration-500`}>
                        <div className={`menu p-4 w-80 min-h-full px-4 ${selectedColor} cursor-pointer rounded-tl-2xl rounded-bl-2xl dark:bg-bg-primary-dark dark:text-secondary-text-dark`}>
                            <div>
                                <div className="flex justify-end items-center">
                                    <GrClose
                                        onClick={() => setIsOpenDrawer(!isOpenDrawer)}
                                        className="text-white text-2xl mr-5"
                                    />
                                </div>
                                <ColorPalette />
                               
                            <DarkModeSwitch></DarkModeSwitch>
                            </div>
                        </div>
                    </div>

                )
            }

        </div>


    );
};

export default RightButton;