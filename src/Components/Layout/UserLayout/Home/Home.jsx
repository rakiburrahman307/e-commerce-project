import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import Navigation from "../Side Navigation/Navigation";
import Carousel from "../Swiper/Carousel";

const Home = () => {
    return (
    <div className="px-2 md:px-10 lg:px-20">
          <div className="flex justify-between items-center mt-5">
        <div className="w-1/4">
        <Navigation></Navigation>
        </div>
          <div className="w-3/4">
           <Carousel></Carousel>
        </div>
      </div>
      <Breadcrumb></Breadcrumb>
    </div>
    );
};

export default Home;