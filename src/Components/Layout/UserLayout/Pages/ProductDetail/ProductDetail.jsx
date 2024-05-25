import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../../Utilities/Breadcrumbs/Breadcrumb";
import Slider from "react-slick";
import LeftArrow from "../../../../../assets/svg/left-arrow.svg";
import RightArrow from "../../../../../assets/svg/right-arrow.svg";
import ImageMagnifier from "../../Utilities/ImageMagnifier/ImageMagnifier";
import ReactStars from "react-rating-stars-component";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DeliveryDetails from "./DeliveryDetails";
import useContextInfo from "../../Hooks/useContextInfo";
import SkeletonLoader from "./SkeletonLoader";
import DescriptionAndRating from "./DescriptionAndRating";
import CommentsInputField from "./CommentsInputField";
import RelatedProduct from "./RelatedProduct";
import { useGetSingleProductQuery } from "../../../../Features/productsApiSlice";
import ShowErrorMessage from "../../Utilities/ErrorMessage/ShowErrorMessage";
import { useAddToCartProductMutation } from "../../../../Features/cartApiSlice";
import ShowSuccessMessage from "../../Utilities/SuccessMessage/ShowSuccessMessage";

const ProductDetail = () => {
  const { id } = useParams();
  const { textColor, selectedColor, borderColor } = useContextInfo();
  const { data: product, isLoading, error } = useGetSingleProductQuery(id);
  const [imgUrl, setImgUrl] = useState("");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [heartFill, setHeartFill] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const [addToCartProduct] = useAddToCartProductMutation();
  useEffect(() => {
    if (product) {
      if (
        product?.images &&
        currentSlideIndex >= 0 &&
        currentSlideIndex < product?.images?.length
      ) {
        setImgUrl(product?.images[currentSlideIndex]);
      } else if (product?.thumbnail) {
        setImgUrl(product.thumbnail);
      }
    }
  }, [currentSlideIndex, product]);

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 10));
  };
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt='prevArrow' {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt='nextArrow' {...props} />
  );

  const settings =
    product?.images?.length === 1
      ? {
          dots: true,
          fade: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          waitForAnimate: false,
        }
      : {
          dots: false,
          infinite: true,
          speed: 500,
          centerMode: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
          prevArrow: <SlickArrowLeft />,
          nextArrow: <SlickArrowRight />,
          beforeChange: (current, next) => {
            setCurrentSlideIndex(next);
          },
        };
  // handle add to carts functionality
  const handleAddToCarts = async (product) => {
    const cart = {
      ...product,
      quantity,
    };
    const res = await addToCartProduct(cart);
    if (res?.error?.status === 400 && res?.error) {
      ShowErrorMessage(res?.error?.data?.message);
    }else{
      ShowSuccessMessage(res?.data?.message);
    }
    
  };
  return (
    <section className='w-full md:w-11/12 lg:w-11/12 mx-auto min-h-screen pb-5'>
      <Breadcrumb />
      <div className='w-full bg-white shadow-lg rounded-lg dark:bg-semi-dark'>
        {isLoading ? (
          <SkeletonLoader />
        ) : error ? (
          <>
            {ShowErrorMessage(error?.data?.error)}
            {navigate("/login")}
          </>
        ) : (
          <div className='flex flex-col px-1 md:px-3 lg:px-5 lg:flex-row my-4 gap-10 h-auto md:min-h-[500px]'>
            <div className={`flex flex-col items-center mt-5`}>
              <div
                className={`p-2 rounded-lg h-[300px] shadow-sm md:shadow-md`}
              >
                <ImageMagnifier src={imgUrl}></ImageMagnifier>
              </div>
              <div className='w-[320px] md:w-[300px] mx-auto mt-3 md:mt-5 lg:mt-8 px-1 md:px-2 lg:px-3'>
                <Slider {...settings} className='rounded-lg'>
                  {product?.images?.map((item, index) => (
                    <div
                      key={index}
                      className='flex justify-evenly items-center gap-5'
                    >
                      <img
                        src={item}
                        alt={product.title}
                        onMouseEnter={() => setImgUrl(item)}
                        className='w-32 h-20 mx-auto rounded-lg object-contain cursor-pointer'
                      />
                    </div>
                  ))}
                </Slider>
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
                    Brand:{" "}
                    <span className='text-blue-500'>{product?.brand}</span>
                  </p>
                </div>
                <div>
                  {heartFill ? (
                    <IoHeartSharp
                      onClick={() => setHeartFill(!heartFill)}
                      size={25}
                      className={`${textColor}`}
                    />
                  ) : (
                    <IoHeartOutline
                      onClick={() => setHeartFill(!heartFill)}
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
                      quantity > 1
                        ? `hover:text-white hover:scale-95 duration-500 ${textColor} hover:${selectedColor}`
                        : "border-gray-500 text-gray-500"
                    } font-bold rounded-full text-sm px-2.5 py-1 text-center inline-flex items-center cursor-pointer dark:${textColor} dark:hover:${selectedColor}`}
                    onClick={handleDecrease}
                    disabled={quantity === 1}
                  >
                    -
                  </button>
                  <p className='text-lg w-4 mx-auto dark:text-secondary-text-dark'>
                    {quantity}
                  </p>
                  <button
                    className={`border ${
                      quantity < 10
                        ? `hover:text-white hover:scale-95 duration-500 ${textColor} hover:${selectedColor}`
                        : "border-gray-500 text-gray-500"
                    } font-bold rounded-full text-sm px-2.5 py-1 text-center inline-flex items-center cursor-pointer dark:${textColor} dark:hover:${selectedColor}`}
                    onClick={handleIncrease}
                    disabled={quantity === 10}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className='flex justify-between md:justify-start gap-2 md:gap-5 mt-14 mx-auto'>
                <button
                  className={`rounded-sm hover:scale-95 w-42 md:w-full border border-blue-500 px-8 py-3 text-base md:text-xl text-blue-500 duration-300 hover:bg-blue-500 hover:text-white`}
                >
                  Buy Now
                </button>
                <button
                  onClick={() => handleAddToCarts(product)}
                  className={`rounded-sm hover:scale-95 w-42 md:w-full border ${borderColor} px-6 py-3 text-base md:text-xl ${textColor} duration-300 hover:${selectedColor} hover:text-white`}
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div className='w-full border-l-2 py-3 px-0 lg:px-2'>
              <DeliveryDetails />
            </div>
          </div>
        )}
      </div>
      <CommentsInputField productId={product?._id} />
      <DescriptionAndRating
        description={product?.description}
        productId={product?._id}
      />
      <RelatedProduct category={product?.category} />
    </section>
  );
};

export default ProductDetail;
