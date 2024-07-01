import React, { useEffect, useState, useCallback, lazy, Suspense } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../../Utilities/Breadcrumbs/Breadcrumb";
import ImageMagnifier from "../../Utilities/ImageMagnifier/ImageMagnifier";
import ReactStars from "react-rating-stars-component";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import useContextInfo from "../../Hooks/useContextInfo";
import SkeletonLoader from "./SkeletonLoader";
import { useGetSingleProductQuery } from "../../../../Features/productsApiSlice";
import ShowErrorMessage from "../../Utilities/ErrorMessage/ShowErrorMessage";
import { useAddToCartProductMutation } from "../../../../Features/cartApiSlice";
import ShowSuccessMessage from "../../Utilities/SuccessMessage/ShowSuccessMessage";
import { useGetUserQuery } from "../../../../Features/authApiSlice";
import ProtectedRoutes from "../../../../../Router/ProtectedRoutes";
import LazyLoading from "../../../BigSpinner/LazyLoading";

const DeliveryDetails = lazy(() => import("./DeliveryDetails"));
const CommentsInputField = lazy(() => import("./CommentsInputField"));
const DescriptionAndRating = lazy(() => import("./DescriptionAndRating"));
const RelatedProduct = lazy(() => import("./RelatedProduct"));
const SlickSlider = lazy(() => import("./SlickSlider"));

const ProductDetail = () => {
  const { id } = useParams();
  const { textColor, selectedColor, borderColor } = useContextInfo();
  const { data: product, isLoading, error } = useGetSingleProductQuery(id);
  const [state, setState] = useState({
    imgUrl: "",
    currentSlideIndex: 0,
    heartFill: false,
    quantity: 1,
  });
  const navigate = useNavigate();
  const [addToCartProduct] = useAddToCartProductMutation();
  const { data: user } = useGetUserQuery();

  const userId = user?.user?._id;

  useEffect(() => {
    if (product) {
      const img = product.images?.[state.currentSlideIndex] || product.thumbnail;
      setState((prevState) => ({ ...prevState, imgUrl: img }));
    }
  }, [state.currentSlideIndex, product]);

  const handleDecrease = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      quantity: Math.max(prevState.quantity - 1, 1),
    }));
  }, []);

  const handleIncrease = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      quantity: Math.min(prevState.quantity + 1, 10),
    }));
  }, []);

  const handleAddToCarts = useCallback(async () => {
    const cart = { ...product, quantity: state.quantity, userId };
    try {
      const res = await addToCartProduct(cart).unwrap();
      if (res.success) {
        ShowSuccessMessage(res.success.message || "Product added successfully");
      }
    } catch (error) {
      ShowErrorMessage(
        error.data?.error?.message || error.message || "An unexpected error occurred"
      );
    }
  }, [product, state.quantity, userId, addToCartProduct]);

  if (isLoading) return <SkeletonLoader />;
  if (error) {
    ShowErrorMessage(error.data?.error);
    navigate("/login");
    return null;
  }

  return (
    <section className='w-full md:w-11/12 lg:w-11/12 mx-auto min-h-screen pb-5'>
      <Breadcrumb />
      <div className='w-full bg-white shadow-lg rounded-lg dark:bg-semi-dark'>
        <div className='flex flex-col px-1 md:px-3 lg:px-5 lg:flex-row my-4 gap-10 h-auto md:min-h-[500px]'>
          <div className={`flex flex-col items-center mt-5`}>
            <div className={`p-2 rounded-lg h-[300px] shadow-sm md:shadow-md`}>
              <ImageMagnifier src={state.imgUrl} />
            </div>
            <div className='w-[320px] md:w-[300px] mx-auto mt-3 md:mt-5 lg:mt-8 px-1 md:px-2 lg:px-3'>
              <Suspense fallback={<LazyLoading />}>
                <SlickSlider product={product} setState={setState} />
              </Suspense>
            </div>
          </div>
          <div className='px-3 mt-10 w-full'>
            <h2 className='text-4xl font-semibold dark:text-secondary-text-dark'>
              {product?.title}
            </h2>
            <div className='flex justify-between items-center'>
              <div className='flex flex-col'>
                <div className='flex items-center gap-2'>
                  <ReactStars
                    value={product?.rating}
                    count={5}
                    edit={false}
                    isHalf={true}
                    size={24}
                    activeColor='#ffd700'
                  />
                  <span className='text-blue-600'>
                    {product?.rating} Ratings
                  </span>
                </div>
                <p className='dark:text-secondary-text-dark'>
                  Brand: <span className='text-blue-500'>{product?.brand}</span>
                </p>
                <p className='dark:text-secondary-text-dark'>
                  Stock:{" "}
                  {product?.stock > 0 ? (
                    <span className='text-blue-500'>
                      {product?.availabilityStatus || "In stock"}
                    </span>
                  ) : (
                    <span className='text-blue-500'>
                      {product?.availabilityStatus || "Out of stock"}
                    </span>
                  )}
                </p>
              </div>
              <div>
                {state.heartFill ? (
                  <IoHeartSharp
                    onClick={() =>
                      setState((prev) => ({
                        ...prev,
                        heartFill: !prev.heartFill,
                      }))
                    }
                    size={25}
                    className={`${textColor}`}
                  />
                ) : (
                  <IoHeartOutline
                    onClick={() =>
                      setState((prev) => ({
                        ...prev,
                        heartFill: !prev.heartFill,
                      }))
                    }
                    size={25}
                    className='dark:text-secondary-text-dark'
                  />
                )}
              </div>
            </div>
            <div className='mt-2 mb-4 dark:text-secondary-text-dark'>
              <hr />
            </div>
            <p className={`flex gap-2 text-3xl ${textColor}`}>
              <FaBangladeshiTakaSign size={30} />
              {product.price}
            </p>
            <p className='mt-2 mb-4 text-base text-semi-dark font-medium dark:text-secondary-text-dark'>
              Promotion:{" "}
            </p>
            <div className='flex gap-5 items-center'>
              <p className='text-base text-semi-dark font-medium dark:text-secondary-text-dark'>
                Quantity:
              </p>
              <div className='flex gap-8 items-center'>
                <button
                  className={`border ${
                    state.quantity > 1
                      ? `hover:text-white hover:scale-95 duration-500 ${textColor} hover:${selectedColor}`
                      : "border-gray-500 text-gray-500"
                  } font-bold rounded-full text-sm px-2.5 py-1 text-center inline-flex items-center cursor-pointer dark:${textColor} dark:hover:${selectedColor}`}
                  onClick={handleDecrease}
                  disabled={state.quantity === 1}
                >
                  -
                </button>
                <p className='text-lg w-4 mx-auto dark:text-secondary-text-dark'>
                  {state.quantity}
                </p>
                <button
                  className={`border ${
                    state.quantity < 10
                      ? `hover:text-white hover:scale-95 duration-500 ${textColor} hover:${selectedColor}`
                      : "border-gray-500 text-gray-500"
                  } font-bold rounded-full text-sm px-2.5 py-1 text-center inline-flex items-center cursor-pointer dark:${textColor} dark:hover:${selectedColor}`}
                  onClick={handleIncrease}
                  disabled={state.quantity === 10}
                >
                  +
                </button>
              </div>
            </div>
            <ProtectedRoutes>
              <div className='flex justify-between md:justify-start gap-2 md:gap-5 mt-14 mx-auto'>
                <button
                  className={`rounded-sm hover:scale-95 w-42 md:w-full border border-blue-500 px-8 py-3 text-base md:text-xl text-blue-500 duration-300 hover:bg-blue-500 hover:text-white`}
                >
                  Buy Now
                </button>
                <button
                  onClick={handleAddToCarts}
                  className={`rounded-sm hover:scale-95 w-42 md:w-full border ${borderColor} px-6 py-3 text-base md:text-xl ${textColor} duration-300 hover:${selectedColor} hover:text-white`}
                >
                  Add To Cart
                </button>
              </div>
            </ProtectedRoutes>
          </div>
          <div className='w-full border-l-2 py-3 px-0 lg:px-2'>
            <Suspense fallback={<LazyLoading />}>
              <DeliveryDetails
                returnPolicy={product?.returnPolicy}
                warrantyInformation={product?.warrantyInformation}
                shippingInformation={product?.shippingInformation}
              />
            </Suspense>
          </div>
        </div>
      </div>
      <Suspense fallback={<LazyLoading />}>
        <CommentsInputField productId={product?._id} />
        <DescriptionAndRating
          description={product?.description}
          productId={product?._id}
          keyPoint={product?.keyPoint}
        />
        <RelatedProduct category={product?.category} />
      </Suspense>
    </section>
  );
};

export default React.memo(ProductDetail);
