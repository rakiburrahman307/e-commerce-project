import avatar from "../../../../../assets/svg/avatar.svg";
import { useCallback, useEffect, useRef, useState } from "react";

const NavDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);
  const items = ["React", "Angular", "Vue"];

  useEffect(() => {
    const close = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target))
        setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const toggleDropDown = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);

  return (
    <div ref={dropDownRef} className='relative mx-auto w-52 text-white cursor-pointer'>
      <div onMouseEnter={toggleDropDown} className='hidden md:flex items-center gap-1'>
        <img src={avatar} alt='avatar' className='w-10 h-10' />
        <div className='flex flex-col justify-start'>
          <span className='text-xs line-clamp-1 text-white'>Hello, Md. Rakibur Rahman</span>
          <span className='text-sm text-white font-extrabold'>
            Orders & Account
          </span>
        </div>
      </div>

      <ul
        onMouseLeave={toggleDropDown}
        className={`${
          open
            ? "visible translate-y-0 duration-300"
            : "invisible translate-y-4"
        } absolute top-14 z-50 w-full space-y-1 rounded-sm bg-white shadow-md`}
      >
        <span className="absolute -top-2.5 left-[50%] h-0 w-0 -translate-x-1/2 -rotate-[45deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-white"></span>
        {items.map((item, idx) => (
          <li
            key={idx}
            className={`rounded-sm p-2 ${
              open ? "opacity-100 duration-300" : "opacity-0"
            } hover:bg-gray-200 text-black cursor-pointer`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavDropdown;
