import React, { useEffect, useState, useCallback, lazy, Suspense } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../../Utilities/Breadcrumbs/Breadcrumb";
import ImageMagnifier from "../../Utilities/ImageMagnifier/ImageMagnifier";
import SkeletonLoader from "./SkeletonLoader";
import { useGetSingleProductQuery } from "../../../../Features/productsApiSlice";
import ShowErrorMessage from "../../Utilities/ErrorMessage/ShowErrorMessage";
import { useAddToCartProductMutation } from "../../../../Features/cartApiSlice";
import ShowSuccessMessage from "../../Utilities/SuccessMessage/ShowSuccessMessage";
import { useGetUserQuery } from "../../../../Features/authApiSlice";
import LazyLoading from "../../../BigSpinner/LazyLoading";
import ItemInformation from "./ItemInformation";
const DeliveryDetails = lazy(() => import("./DeliveryDetails"));
const CommentsInputField = lazy(() => import("./CommentsInputField"));
const DescriptionAndRating = lazy(() => import("./DescriptionAndRating"));
const RelatedProduct = lazy(() => import("./RelatedProduct"));
const SlickSlider = lazy(() => import("./SlickSlider"));

const ProductDetail = () => {
  const { id } = useParams();
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
      const img =
        product?.images?.[state.currentSlideIndex] || product?.thumbnail;
      setState((prevState) => ({ ...prevState, imgUrl: img }));
    }
  }, [state.currentSlideIndex, product]);

  const handleDecrease = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      quantity: Math.max(prevState?.quantity - 1, 1),
    }));
  }, []);

  const handleIncrease = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      quantity: Math.min(prevState?.quantity + 1, 10),
    }));
  }, []);

  const handleAddToCarts = useCallback(async () => {
    const cart = { ...product, quantity: state?.quantity, userId };
    try {
      const res = await addToCartProduct(cart).unwrap();
      if (res.success) {
        ShowSuccessMessage(res.success.message || "Product added successfully");
      }
    } catch (error) {
      ShowErrorMessage(
        error.data?.error?.message ||
          error?.message ||
          "An unexpected error occurred"
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
          <Suspense fallback={<LazyLoading />}>
            <ItemInformation
              product={product}
              state={state}
              setState={setState}
              handleDecrease={handleDecrease}
              handleIncrease={handleIncrease}
              handleAddToCarts={handleAddToCarts}
            />
          </Suspense>
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
