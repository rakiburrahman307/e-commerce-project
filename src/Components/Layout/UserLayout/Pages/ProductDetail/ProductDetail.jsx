import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../../../Features/Product/productsApiSlice";
import Breadcrumb from "../../Utilities/Breadcrumbs/Breadcrumb";
import useContextInfo from "../../Hooks/useContextInfo";
import Slider from "react-slick";
import LeftArrow from "../../../../../assets/svg/left-arrow.svg";
import RightArrow from "../../../../../assets/svg/right-arrow.svg";
import ImageMagnifier from "../../Utilities/ImageMagnifier/ImageMagnifier";
import ReactStars from "react-rating-stars-component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, isLoading, error } = useGetSingleProductQuery(id);
  const { borderColor } = useContextInfo();
  const [imgUrl, setImgUrl] = useState("");
  const [currentSlideIndex, setCurrentSlideIndex] = useState();
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
  // Slider arrow components
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt='prevArrow' {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt='nextArrow' {...props} />
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <img src={LeftArrow} alt='prevArrow' />,
    nextArrow: <img src={RightArrow} alt='nextArrow' />,
    beforeChange: (current, next) => {
      setCurrentSlideIndex(next);
    },
  };

  return (
    <section className='w-11/12 mx-auto'>
      <Breadcrumb />
      <div className='w-full bg-white shadow-xl rounded-lg'>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <div className='flex flex-col md:flex-row p-2 md:p-5 lg:p-10 lg:flex-row my-4'>
            <div className={`flex flex-col items-center`}>
              <div className={`w-[500px] p-2 rounded-lg h-[300px] shadow-sm`}>
                <ImageMagnifier src={imgUrl}></ImageMagnifier>
              </div>
              <div className='w-96 mt-8'>
                <Slider {...settings} className='rounded-lg'>
                  {product.images.map((item, index) => (
                    <div
                      key={index}
                      className='flex justify-evenly items-center gap-5'
                    >
                      <img
                        src={item}
                        alt={product.title}
                        onMouseEnter={() => setImgUrl(item)}
                        className={`w-32 h-20 mx-auto rounded-lg object-contain cursor-pointer`}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div>
              <h2 className='text-4xl font-semibold'>{product.title}</h2>
              <div>
                <ReactStars
                  value={rating}
                  count={5}
                  edit={false}
                  isHalf={true}
                  size={24}
                  activeColor='#ffd700'
                />
                <span>Rating{product?.rating}</span>
              </div>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetail;
