import React from 'react';
import { CiDeliveryTruck } from "react-icons/ci";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { IoCashOutline, IoLocationOutline } from "react-icons/io5";
import { MdVerifiedUser } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import useContextInfo from "../../Hooks/useContextInfo";
import PropTypes from "prop-types";

const DeliveryDetails = React.memo(({ returnPolicy, warrantyInformation, shippingInformation }) => {
  const { textColor } = useContextInfo();

  return (
    <div className='dark:text-secondary-text-dark mt-2'>
      <div className='mt-2'>
        <h2 className='mb-5'>Delivery</h2>
        <div className='flex gap-2 justify-between'>
          <div className='flex gap-1 items-center'>
            <IoLocationOutline size={25} />
            <p className='text-xs dark:text-secondary-text-dark'>
              Dhaka, Dhaka North, Banani Road No. 12 - 19
            </p>
          </div>
          <button className='text-blue-500'>Change</button>
        </div>
        <div className='flex gap-2 justify-between mt-5'>
          <div className='flex gap-1 items-center'>
            <CiDeliveryTruck size={25} />
            <p className='text-sm dark:text-secondary-text-dark'>
              Standard Delivery
            </p>
          </div>
          <span className='text-gray-500 flex items-center gap-1'>
            <FaBangladeshiTakaSign size={14} />
            75
          </span>
        </div>
        <div className='flex gap-2 justify-between mt-5'>
          <div className='flex gap-1 items-center'>
            <LiaShippingFastSolid size={25} />
            <p className='text-sm'>{shippingInformation}</p>
          </div>
        </div>
        <div className='flex gap-2 justify-between mt-5'>
          <div className='flex gap-1 items-center'>
            <IoCashOutline size={25} />
            <p className='text-sm'>Standard Delivery Available</p>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <h2 className='mb-5'>Service</h2>
        <div className='flex gap-2 justify-between'>
          <div className='flex gap-1 items-center'>
            <MdVerifiedUser className={textColor} size={25} />
            <p className={textColor}>Verified by me</p>
          </div>
        </div>
        <div className='flex gap-2 justify-between mt-5'>
          <div className='flex gap-1 items-center'>
            <CiDeliveryTruck size={25} />
            <p className='text-sm'>{returnPolicy}</p>
          </div>
        </div>
        <div className='flex gap-2 justify-between mt-5'>
          <div className='flex gap-1 items-center'>
            <IoCashOutline size={25} />
            <p className='text-sm'>{warrantyInformation}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

DeliveryDetails.propTypes = {
  returnPolicy: PropTypes.string,
  warrantyInformation: PropTypes.string,
  shippingInformation: PropTypes.string,
};

export default DeliveryDetails;
