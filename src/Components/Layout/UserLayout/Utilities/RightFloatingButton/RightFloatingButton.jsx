import { useMemo, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import ColorPalette from "../ColorPalette/ColorPalette";
import { GrClose } from "react-icons/gr";
import useContextInfo from "../../Hooks/useContextInfo";
import DarkModeSwitch from "../DarkMode/DarkModeSwitch";
import "./ScrollStyle.css";
import { useGetCartsQuery } from "../../../../Features/cartApiSlice";
import { useGetUserQuery } from "../../../../Features/authApiSlice";
import CartFloat from "../CartFloat/CartFloat";
import WishList from "../Wishlist/WishList";
import { useGetWishListQuery } from "../../../../Features/cartWishListApiSlice";

const RightFloatingButton = () => {
  const { selectedColor, textColor } = useContextInfo();
  const { data: user, isLoading: userLoading } = useGetUserQuery();
  const { data: carts, isLoading: cartsLoading } = useGetCartsQuery(
    user?.user?._id
  );
  const { data: wishListData, isLoading: wishListLoading } =
    useGetWishListQuery(user?.user?._id);

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setIsOpenDrawer((prevState) => !prevState);
  };

  const utilityButton = useMemo(() => [
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
  ], []);

  return (
    <div>
      <div
        className={`top-[35%] right-0 fixed z-10 ${
          isOpenDrawer ? "invisible" : "visible"
        }`}
      >
        {utilityButton.map(({ id, child }) => (
          <li
            key={id}
            className={`relative flex justify-between items-center w-36 h-14 px-4 mr-[-90px] duration-300 ${selectedColor} hover:mr-[-10px] cursor-pointer rounded-tl-2xl rounded-bl-2xl dark:bg-semi-dark dark:text-secondary-text-dark`}
            onClick={toggleDrawer}
          >
            <p className='flex justify-between items-center w-full text-white rounded-tr-lg'>
              {child}
              {!cartsLoading && !wishListLoading && (
                <span
                  className={`absolute -left-2 -top-2 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-white text-center text-[12px] ${textColor}`}
                >
                  {carts?.length + wishListData?.length}
                </span>
              )}
            </p>
          </li>
        ))}
      </div>

      <div
        className={`top-[35%] ${
          isOpenDrawer
            ? "visible opacity-1"
            : "invisible opacity-0 translate-x-52"
        } z-50 right-0 fixed duration-500`}
      >
        <div
          className={`menu p-4 w-80 min-h-full px-4 ${selectedColor} cursor-pointer rounded-tl-2xl rounded-bl-2xl dark:bg-semi-dark dark:text-secondary-text-dark`}
        >
          <div>
            <div className='flex justify-end items-center'>
              <GrClose
                onClick={toggleDrawer}
                className='text-white text-2xl mr-5 hover:scale-110 duration-200'
              />
            </div>
            <div className='flex gap-10 items-center'>
              <CartFloat
                carts={carts}
                userLoading={userLoading}
                cartsLoading={cartsLoading}
              />
              <WishList
                wishListData={wishListData}
                WishListLoading={wishListLoading}
                userLoading={userLoading}
              />
            </div>
            <ColorPalette />
            <DarkModeSwitch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightFloatingButton;
