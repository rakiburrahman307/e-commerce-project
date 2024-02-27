import About from "../../../Pages/Tust about Us/About";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import Navigation from "./Side Navigation/Navigation";
import Carousel from "./Swiper/Carousel";
import Category from "./SomeCategory/Category";
import HelmetTitle from "../Hooks/HelmetTitle";
import ColorPalette from "../Utilitys/ColorPalette";
import RightButton from "../Utilitys/Right Floting Button/RightButton";



const Home = () => {
    return (
    <div className="px-2 md:px-10 lg:px-20">
      <HelmetTitle title='Home | Daraz'></HelmetTitle>
          <div className="flex justify-evenly items-center mt-5">
        <div className="hidden md:flex md:w-1/4">
        <Navigation></Navigation>
        </div>
          <div className="w-full px-1 md:w-3/4">
           <Carousel></Carousel>
        </div>
      </div>
      <About></About>
      <Category></Category>
      <Breadcrumb></Breadcrumb>
     <ColorPalette></ColorPalette>
     <RightButton></RightButton>

     
    </div>
    );
};

export default Home;