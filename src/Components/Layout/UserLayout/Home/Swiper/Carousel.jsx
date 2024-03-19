// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
const Carousel = () => {
  const caroselData = [
    {
      imgUrl: "https://source.unsplash.com/300x200",
      clickLink: "",
    },
    {
      imgUrl: "https://source.unsplash.com/300x200",
      clickLink: "",
    },
    {
      imgUrl: "https://source.unsplash.com/300x200",
      clickLink: "",
    },
    {
      imgUrl: "https://source.unsplash.com/300x200",
      clickLink: "",
    },
  ];
  return (
    <div className="dark:bg-bg-primary-dark dark:text-secondary-text-dark">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {caroselData?.map((cover, idx) => (
          <SwiperSlide key={idx} className="rounded-lg">
            <div className="h-[350px] w-[940px] lg:w-full rounded-lg">
              <Link to={cover?.clickLink}>
                <img
                  src={cover?.imgUrl}
                  className="w-full object-cover rounded-lg mx-auto"
                  alt="Images"
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
