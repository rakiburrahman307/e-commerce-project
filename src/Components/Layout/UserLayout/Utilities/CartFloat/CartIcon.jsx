import { useMemo } from "react";
import { FiShoppingCart } from "react-icons/fi";
import PropTypes from "prop-types";
import useContextInfo from "../../Hooks/useContextInfo";

const CartIcon = ({carts, cartsLoading, toggleSidebar}) => {
  const { textColor } = useContextInfo();
  return useMemo(
    () => (
      <div className='relative'>
        <FiShoppingCart
          size={25}
          className='text-white hover:scale-110 duration-300'
          onClick={toggleSidebar}
        />
        {carts?.length > 0 && !cartsLoading && (
          <span
            className={`absolute left-6 -top-2 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-white text-center text-[12px] ${textColor}`}
          >
            {carts?.length}
          </span>
        )}
      </div>
    ),
    [carts, cartsLoading, textColor, toggleSidebar]
  );
};

CartIcon.propTypes = {
  carts: PropTypes.array,
  cartsLoading: PropTypes.bool,
  toggleSidebar: PropTypes.func,
};
export default CartIcon;
