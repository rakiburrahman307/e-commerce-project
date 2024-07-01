import { useState } from 'react';
const calculateItemSubtotal = (item) => {
  return item?.price * item?.quantity;
};

const useCartCalculator = () => {
  const [deliveryCharge, setDeliveryCharge] = useState(0);

  const calculateTotalCartPrice = (carts) => {
    let totalCartPrice = 0;
    const itemTotalPrices = {};

    const updatedCarts = carts?.map((item) => {
      const subtotal = calculateItemSubtotal(item);
      totalCartPrice += subtotal;
      itemTotalPrices[item?._id] = subtotal;
      return { ...item, totalPrice: subtotal };
    });

    totalCartPrice += deliveryCharge;

    return { totalCartPrice, itemTotalPrices, updatedCarts };
  };

  const setDynamicDeliveryCharge = (charge) => {
    setDeliveryCharge(charge);
  };

  return { calculateTotalCartPrice, setDynamicDeliveryCharge };
};

export default useCartCalculator;
