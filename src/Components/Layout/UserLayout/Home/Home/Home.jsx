// import About from "../../../../Pages/Tust about Us/About";
// import Breadcrumb from "../../Utilitys/Breadcrumbs/Breadcrumb";
// import Navigation from "../Side Navigation/Navigation";
// import Carousel from "../Swiper/Carousel";
import HelmetTitle from "../../Hooks/HelmetTitle";
// import RightButton from "../../Utilitys/Right Floting Button/RightButton";
// import FlashSale from "../FlashSale/FlashSale";
import JustForYou from "../JustForYou/JustForYou";
// import Services from "../SomeCategory/Services";
// import Category from "../Category/Category";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className='px-2 bg-root-bg md:px-10 lg:px-20 dark:bg-primary-dark dark:text-secondary-text-dark mx-auto w-full'>
      <HelmetTitle title='Home | Daraz'></HelmetTitle>
      <div className='flex justify-evenly items-center mt-5'>
        {/* <div className='hidden md:flex md:w-1/4'>
          <Navigation></Navigation>
        </div> */}
        {/* <div className='w-full px-1 md:w-3/4 dark:bg-primary-dark'>
          <Carousel></Carousel>
        </div> */}
      </div>
      {/* <About></About>
      <Services></Services>
      <Breadcrumb></Breadcrumb>
      <RightButton></RightButton>
      <FlashSale></FlashSale>
      <Category></Category> */}
      <JustForYou></JustForYou>
      <Footer></Footer>
    </div>
  );
};

export default Home;
