import { BsArrowDown } from "react-icons/bs";
import { IoGrid } from "react-icons/io5";
import { FaFilter, FaList } from "react-icons/fa6";
import { useState } from "react";
import FilterSection from "./FilterSection";
import { MdClose } from "react-icons/md";
import { useFilterProductsQuery } from "../../../../Features/productsApiSlice";

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
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedRating, setSelectedRating] = useState([]);
  const [openSideBar, setOpenSideBar] = useState(false);

  const toggleSection = (sectionKey) => {
    setSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const handlePriceChange = (e) => {
    const { value } = e.target;
    setPriceRange([0, value]);
  };

  const handleSelectPrice = (e) => {
    setSelectedPrice(e.target.value);
  };

  const handleSelectCategory = (e) => {
    const { value } = e.target;
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleSelectColor = (e) => {
    const { value } = e.target;
    setSelectedColor((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleSelectSize = (e) => {
    const { value } = e.target;
    setSelectedSize((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleSelectBrand = (e) => {
    const { value } = e.target;
    setSelectedBrand((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleSelectRating = (e) => {
    const { value } = e.target;
    setSelectedRating((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const {
    data: filteredProducts,
    isLoading: isFilterLoading,
    error: FilterError,
  } = useFilterProductsQuery({
    categories: selectedCategories.length ? selectedCategories : null,
    color: selectedColor.length ? selectedColor : null,
    size: selectedSize.length ? selectedSize : null,
    brand: selectedBrand.length ? selectedBrand : null,
    price: selectedPrice,
    priceRange: priceRange,
    rating: selectedRating.length ? selectedRating : null,
  });

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
      <div
        className={`fixed inset-0 z-40 ${
          openSideBar ? "opacity-100 visible" : "opacity-0 invisible"
        } duration-300`}
      >
        <div className='fixed inset-0 bg-black bg-opacity-30'></div>
        <div
          className={`relative ml-auto dark:bg-semi-dark flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 shadow-xl ${
            openSideBar
              ? "translate-x-0 opacity-100 duration-700"
              : "translate-x-full opacity-0 duration-300"
          }`}
        >
          <div className='flex items-center justify-between px-4 border-b-2 dark:bg-semi-dark'>
            <h2 className='text-xl font-medium text-secondary-text dark:text-secondary-text-dark'>
              Filters
            </h2>
            <button
              type='button'
              className='-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white dark:bg-semi-dark p-2 text-gray-400'
              onClick={() => setOpenSideBar(!openSideBar)}
            >
              <span className='sr-only'>Close menu</span>
              <MdClose size={30} />
            </button>
          </div>
          <form className='max-h-[90vh] overflow-y-auto bg-white p-5 rounded-xl dark:bg-semi-dark'>
            <div className='max-h-screen'>
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
                  selectedCategories={selectedCategories}
                  handleSelectCategory={handleSelectCategory}
                  selectedColor={selectedColor}
                  handleSelectColor={handleSelectColor}
                  selectedSize={selectedSize}
                  handleSelectSize={handleSelectSize}
                  selectedBrand={selectedBrand}
                  handleSelectBrand={handleSelectBrand}
                  selectedRating={selectedRating}
                  handleSelectRating={handleSelectRating}
                />
              ))}
            </div>
          </form>
        </div>
      </div>
      <main className='mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 dark:bg-semi-dark p-2 mt-10'>
        <div className='flex flex-col md:flex-row items-baseline justify-between border-b border-gray-200 pb-4 pt-4'>
          <h1 className='text-4xl font-bold tracking-tight text-secondary-text pb-5 md:pb-0'>
            Products
          </h1>
          <div className='flex flex-wrap items-center gap-5'>
            <button className='group inline-flex items-center gap-2 justify-center text-sm font-medium text-gray-700 dark:text-secondary-text-dark hover:text-gray-900'>
              Sort
              <BsArrowDown />
            </button>
            <div className='flex items-center gap-3'>
              <span className='text-secondary-text dark:text-secondary-text-dark text-sm'>
                View:
              </span>
              <button className='text-gray-400 flex items-center hover:text-gray-500 ml-3 sm:ml-7'>
                <IoGrid size={20} />
              </button>
              <button className='text-gray-400 flex items-center hover:text-gray-500 ml-3 sm:ml-7'>
                <FaList size={20} />
              </button>
            </div>
            <button
              onClick={() => setOpenSideBar(!openSideBar)}
              className='-m-2 ml-2 p-2 text-gray-400 hover:text-gray-500 sm:ml-3 lg:hidden'
            >
              <span className='sr-only'>Filters</span>
              <FaFilter size={30} />
            </button>
          </div>
        </div>

        <section className='pb-10 pt-6'>
          <h2 className='sr-only'>Products</h2>
          <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
            <form className='hidden lg:block max-h-[90vh] overflow-y-auto bg-white p-5 rounded-xl dark:bg-primary-dark'>
              <div className='max-h-screen'>
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
                    selectedCategories={selectedCategories}
                    handleSelectCategory={handleSelectCategory}
                    selectedColor={selectedColor}
                    handleSelectColor={handleSelectColor}
                    selectedSize={selectedSize}
                    handleSelectSize={handleSelectSize}
                    selectedBrand={selectedBrand}
                    handleSelectBrand={handleSelectBrand}
                    selectedRating={selectedRating}
                    handleSelectRating={handleSelectRating}
                  />
                ))}
              </div>
            </form>
            <div className='lg:col-span-3 max-h-[95vh] overflow-y-auto bg-white dark:bg-primary-dark rounded-xl'>
              {/* Render filtered products here */}
              {isFilterLoading ? (
                <div>Loading...</div>
              ) : FilterError ? (
                <div>Error: {FilterError.message}</div>
              ) : (
                <div>
                  {filteredProducts?.map((product) => (
                    <div key={product.id}>{product.name}</div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Products;
