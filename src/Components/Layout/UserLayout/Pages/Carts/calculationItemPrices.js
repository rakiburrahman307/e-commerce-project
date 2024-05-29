// Function to calculate subtotal for each item
const calculateItemSubtotal = (item) => {
  return item?.price * item?.quantity;
};

// Function to calculate total price of the cart
export const calculateTotalCartPrice = (carts) => {
  let totalCartPrice = 0;
  const itemTotalPrices = {};

  const updatedCarts = carts?.map((item) => {
    const subtotal = calculateItemSubtotal(item);
    totalCartPrice += subtotal;
    itemTotalPrices[item?._id] = subtotal;
    return { ...item, totalPrice: subtotal };
  });
  return { totalCartPrice, itemTotalPrices, updatedCarts };
};
