import Slider from "react-slick";
import LeftArrow from "../../../../../assets/svg/left-arrow.svg";
import RightArrow from "../../../../../assets/svg/right-arrow.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import LazyImage from "../../Utilities/LazyImgLoading/LazyImage";

const SlickSlider = ({ product, setState }) => {
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
          beforeChange: (current, next) =>
            setState((prev) => ({ ...prev, currentSlideIndex: next })),
        };

  const handleImgChange = (item) => {
    setState((prev) => ({ ...prev, imgUrl: item }));
  };
  return (
    <Slider {...settings} className='rounded-lg'>
      {product?.images?.map((item, index) => (
        <div key={index} className='flex justify-evenly items-center gap-5'>
          <LazyImage
            src={item}
            alt={product.title}
            handleImgChange={() => handleImgChange(item)}
            customStyles='w-32 h-20 mx-auto rounded-lg object-contain cursor-pointer'
          />
        </div>
      ))}
    </Slider>
  );
};
SlickSlider.propTypes = {
  product: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
};
export default SlickSlider;
