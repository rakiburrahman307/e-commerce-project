import { BsArrowDown } from "react-icons/bs";
import MobileFilterProduct from "./MobileFilterProduct";
import { IoGrid } from "react-icons/io5";
import { FaFilter, FaList } from "react-icons/fa6";
import { useState } from "react";
import FilterSection from "./FilterSection";

const Products = () => {
  const [sections, setSections] = useState({
    categories: true,
    color: false,
    size: false,
    brand: false,
    price: false,
    priceRange: false,
    rating: false,
  });

  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedPrice, setSelectedPrice] = useState("");

  const toggleSection = (section) => {
    setSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handlePriceChange = (e) => {
    const { value } = e.target;
    setPriceRange([0, value]);
  };

  const handleSelectPrice = (e) => {
    setSelectedPrice(e.target.value);
  };

  const sectionsData = [
    {
      key: "categories",
      title: "Categories",
      options: [
        "Totes",
        "Backpacks",
        "Travel Bags",
        "Hip Bags",
        "Laptop Sleeves",
      ],
    },
    { key: "color", title: "Color", options: ["White", "Black", "Red"] },
    { key: "size", title: "Size", options: ["S", "M", "L", "XL"] },
    { key: "brand", title: "Brand", options: ["Nike", "Adidas", "Puma"] },
    {
      key: "price",
      title: "Price",
      options: ["$0-$50", "$50-$100", "$100-$150", "$150-$200"],
    },
    { key: "priceRange", title: "Price Range", options: [] },
    {
      key: "rating",
      title: "Rating",
      options: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
    },
  ];
  return (
    <div className='bg-root-bg dark:bg-primary-dark'>
      <div>
      {
    sectionsData?.map((section) => (
        <MobileFilterProduct
            key={section?.key}
            section={section}
            isOpen={sections[section?.key]}
            toggleSection={toggleSection}
            handlePriceChange={handlePriceChange}
            priceRange={priceRange}
            selectedPrice={selectedPrice}
            handleSelectPrice={handleSelectPrice}
        />
    ))
}

        <main className='mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 dark:bg-semi-dark p-2 mt-10'>
          <div className='flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10'>
            <h1 className='text-4xl font-bold tracking-tight text-secondary-text'>
              Products
            </h1>
            <div className='flex items-center gap-3'>
              <button className='group inline-flex items-center gap-2 justify-center text-sm font-medium text-gray-700 hover:text-gray-900'>
                Sort
                <BsArrowDown />
              </button>
              <div className='flex items-center'>
                <span className='text-secondary-text dark:text-secondary-text-dark text-sm'>
                  View:
                </span>
                <button className='text-gray-400 flex items-center hover:text-gray-500 sm:ml-7'>
                  <IoGrid size={20} />
                </button>
                <button className='text-gray-400 flex items-center hover:text-gray-500 sm:ml-7'>
                  <FaList size={20} />
                </button>
              </div>
              <button
                type='button'
                className='-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden'
              >
                <span className='sr-only'>Filters</span>
                <FaFilter size={30} />
              </button>
            </div>
          </div>

          <section className='pb-24 pt-6'>
            <h2 className='sr-only'>Products</h2>
            <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
              <form className='hidden lg:block max-h-[90vh] overflow-y-auto'>
                <div className='max-h-screen overflow-y-auto'>
                  {sectionsData?.map((section) => (
                    <FilterSection
                      key={section?.key}
                      section={section}
                      isOpen={sections[section?.key]}
                      toggleSection={toggleSection}
                      handlePriceChange={handlePriceChange}
                      priceRange={priceRange}
                      selectedPrice={selectedPrice}
                      handleSelectPrice={handleSelectPrice}
                    />
                  ))}
                </div>
              </form>
              <div className='lg:col-span-3 max-h-[95vh] overflow-y-auto dark:bg-primary-dark '>
                {/* Your content */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Products;
