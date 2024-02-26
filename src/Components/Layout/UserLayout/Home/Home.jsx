import About from "../../../Pages/Tust about Us/About";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import Navigation from "../Side Navigation/Navigation";
import Carousel from "../Swiper/Carousel";

const Home = () => {
    return (
    <div className="px-2 md:px-10 lg:px-20">
          <div className="flex justify-evenly items-center mt-5">
        <div className="hidden md:flex md:w-1/4">
        <Navigation></Navigation>
        </div>
          <div className="w-full px-1 md:w-3/4">
           <Carousel></Carousel>
        </div>
      </div>
      <About></About>
      <Breadcrumb></Breadcrumb>
    </div>
    );
};

export default Home;