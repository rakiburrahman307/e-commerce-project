// import About from "../../../../Pages/Tust about Us/About";
// import Breadcrumb from "../../Utilities/Breadcrumbs/Breadcrumb";
import Carousel from "../Swiper/Carousel";
import HelmetTitle from "../../Utilities/Helmet/HelmetTitle";
// import FlashSale from "../FlashSale/FlashSale";
import JustForYou from "../JustForYou/JustForYou";
// import Services from "../ServiceCategory/Services";
// import Category from "../Category/Category";
import Footer from "../Footer/Footer";
import CategoryMenu from "../CategoryMenu/CategoryMenu";

const Home = () => {
  return (
    <div className='bg-root-bg max-w-7xl mx-auto dark:bg-primary-dark dark:text-secondary-text-dark'>
      <HelmetTitle title='Home | Daraz'></HelmetTitle>
      <div className='flex justify-evenly max-w-7xl mx-auto items-center mt-5'>
        <div className='hidden md:flex md:w-1/4'>
          <CategoryMenu/>
        </div>
        <div className='w-full px-1 md:w-3/4 dark:bg-primary-dark'>
          <Carousel></Carousel>
        </div>
      </div>
      {/* <About></About>
      <Services></Services>
      <Breadcrumb></Breadcrumb>
    
      <FlashSale></FlashSale>
      <Category></Category> */}
      <JustForYou></JustForYou>
      <Footer></Footer>
    </div>
  );
};

export default Home;
