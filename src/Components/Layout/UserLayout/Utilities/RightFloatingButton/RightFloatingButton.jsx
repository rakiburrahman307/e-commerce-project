import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import ColorPalette from "../ColorPalette/ColorPalette";
import { GrClose } from "react-icons/gr";
import useContextInfo from "../../Hooks/useContextInfo";
import DarkModeSwitch from "../DarkMode/DarkModeSwitch";
import './ScrollStyle.css'
import { useGetCartsQuery } from "../../../../Features/cartApiSlice";
import { useGetUserQuery } from "../../../../Features/authApiSlice";
const RightFloatingButton = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { selectedColor, textColor } = useContextInfo();
  const { data: user } = useGetUserQuery();
  const { data: carts, isLoading } = useGetCartsQuery(user?.user?._id);
  const utilityButton = [
    {
      id: 1,
      child: (
        <>
          <FaArrowLeft size={25} />
          Utility
        </>
      ),
      style: "rounded-tr-lg",
    },
  ];

  return (
    <div>
      <div className={`top-[35%] right-0 fixed z-10 ${isOpenDrawer ? 'invisible':'visible'}`}>
        {utilityButton?.map(({ id, child }) => (
          <li
            onClick={() => setIsOpenDrawer(!isOpenDrawer)}
            key={id}
            className={`relative flex justify-between items-center w-36 h-14 px-4 mr-[-90px] duration-300 ${selectedColor} hover:mr-[-10px] cursor-pointer rounded-tl-2xl rounded-bl-2xl dark:bg-semi-dark dark:text-secondary-text-dark`}
          >
            <p className='flex justify-between items-center w-full text-white rounded-tr-lg'>
              {child}
              {carts?.length > 0 && !isLoading && (
                <span
                  className={`absolute -left-2 -top-2 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-white text-center text-[12px] ${textColor}`}
                >
                  {carts?.length}
                </span>
              )}
            </p>
          </li>
        ))}
      </div>
      <div
        className={`top-[35%] ${isOpenDrawer ? 'visible opacity-1':'invisible opacity-0 translate-x-52'} z-50 right-0 fixed duration-500`}
      >
        <div
          className={`menu p-4 w-80 min-h-full px-4 ${selectedColor} cursor-pointer rounded-tl-2xl rounded-bl-2xl dark:bg-semi-dark dark:text-secondary-text-dark`}
        >
          <div>
            <div className='flex justify-end items-center'>
              <GrClose
                onClick={() => setIsOpenDrawer(!isOpenDrawer)}
                className='text-white text-2xl mr-5'
              />
            </div>
            <ColorPalette />

            <DarkModeSwitch></DarkModeSwitch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightFloatingButton;
