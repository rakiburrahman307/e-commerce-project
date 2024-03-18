import About from "../../../Pages/Tust about Us/About";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import Navigation from "./Side Navigation/Navigation";
import Carousel from "./Swiper/Carousel";
import Category from "./SomeCategory/Category";
import HelmetTitle from "../Hooks/HelmetTitle";
import RightButton from "../Utilitys/Right Floting Button/RightButton";
import FlashSale from "./FlashSale/FlashSale";






const Home = () => {
    return (
    <div className="px-2 md:px-10 lg:px-20 dark:bg-gray-800 dark:text-secondary-text-dark">
      <HelmetTitle title='Home | Daraz'></HelmetTitle>
          <div className="flex justify-evenly items-center mt-5">
        <div className="hidden md:flex md:w-1/4 ">
        <Navigation></Navigation>
        </div>
          <div className="w-full px-1 md:w-3/4 dark:bg-gray-800">
           <Carousel></Carousel>
        </div>
      </div>
      <About></About>
      <Category></Category>
      <Breadcrumb></Breadcrumb>
     <RightButton></RightButton>
      <FlashSale></FlashSale>


     
    </div>
    );
};

export default Home;