import { IoGrid } from "react-icons/io5";
import { FaFilter, FaList } from "react-icons/fa6";
import { useState } from "react";
import FilterSection from "./FilterSection";
import { MdClose } from "react-icons/md";
import { useFilterProductsQuery } from "../../../../Features/productsApiSlice";
import useContextInfo from "../../Hooks/useContextInfo";
import BigSpinner from "../../../BigSpinner/BigSpinner";
import emptyBox from "../../../../../assets/svg/empty-box.svg";
import SortDropDown from "./SortDropDown";
import Card from "../../Utilities/Card/Card";

const Products = () => {
  const { textColor } = useContextInfo();
  const [sections, setSections] = useState({
    categories: true,
    color: false,
    size: false,
    brand: false,
    priceRange: false,
    rating: false,
  });

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedSorting, setSelectedSorting] = useState("");
  const [openSideBar, setOpenSideBar] = useState(false);
  const toggleSection = (sectionKey) => {
    setSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };
  const handleMinPriceChange = (e) => setMinPrice(e?.target?.value);
  const handleMaxPriceChange = (e) => setMaxPrice(e?.target?.value);
  const handleSelectCategory = (e) => setSelectedCategories(e?.target?.value);
  const handleSelectColor = (e) => setSelectedColor(e?.target?.value);
  const handleSelectSize = (e) => setSelectedSize(e?.target?.value);
  const handleSelectBrand = (e) => setSelectedBrand(e?.target?.value);
  const handleSelectRating = (e) => setSelectedRating(e?.target?.value);
  const handleSelectedSorting = (e) => setSelectedSorting(e?.target?.value);

  const {
    data: filteredProducts,
    isLoading: isFilterLoading,
    error: FilterError,
  } = useFilterProductsQuery({
    categories:
      selectedCategories === "all_category" ? null : selectedCategories || null,
    color: selectedColor === "All Color" ? null : selectedColor || null,
    size: selectedSize === "All Size" ? null : selectedSize || null,
    brand: selectedBrand === "All Brand" ? null : selectedBrand || null,
    rating: selectedRating === "All Rating" ? null : selectedRating || null,
    minPrice: minPrice || null,
    maxPrice: maxPrice || null,
    sort: selectedSorting === "all_products" ? null : selectedSorting || null,
  });

  const sectionsData = [
    {
      key: "categories",
      title: "Categories",
      options: [
        { value: "all_category", name: "All Category" },
        { value: "smartphones", name: "Smart phones" },
        { value: "womens-shoes", name: "Womens Shoes" },
        { value: "beauty", name: "Beauty" },
        { value: "fragrances", name: "Fragrances" },
        { value: "furniture", name: "Furniture" },
        { value: "groceries", name: "Groceries" },
        { value: "laptops", name: "Laptops" },
        { value: "mens-shirts", name: "Mens Shirts" },
        { value: "mens-shoes", name: "Mens Shoes" },
        { value: "mobile-accessories", name: "Mobile Accessories" },
        { value: "tablets", name: "Tablets" },
        { value: "womens-bags", name: "Womens Bags" },
        { value: "womens-dresses", name: "Womens Dresses" },
        { value: "sunglasses", name: "Sunglasses" },
        { value: "home-decoration", name: "Home Decoration" },
        { value: "tops", name: "Tops" },
        { value: "womens-watches", name: "Womens Watches" },
        { value: "mens-watches", name: "Mens Watches" },
        { value: "skin-care", name: "Skin Care" },
      ],
    },
    { key: "price", title: "Price", options: [] },
    {
      key: "color",
      title: "Color",
      options: ["All Color", "White", "Black", "Red"],
    },
    { key: "size", title: "Size", options: ["All Size", "S", "M", "L", "XL"] },
    {
      key: "brand",
      title: "Brand",
      options: ["All Brand", "Nike", "Adidas", "Puma"],
    },
    {
      key: "rating",
      title: "Rating",
      options: [
        "All Rating",
        "1 Star",
        "2 Stars",
        "3 Stars",
        "4 Stars",
        "5 Stars",
      ],
    },
    {
      key: "sort",
      title: "Sort",
      options: [
        { name: "All Product", value: "all_products" },
        { name: "New Arrivals", value: "newest" },
        { name: "Ascending A To Z", value: "a_to_z" },
        { name: "Descending Z To A", value: "z_to_a" },
        { name: "Best Rating", value: "best_rating" },
        { name: "Price High To Low", value: "price_high_to_low" },
        { name: "Price Low To High", value: "price_low_to_high" },
      ],
    },
  ];

  return (
    <div className='bg-root-bg mx-auto dark:bg-primary-dark'>
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
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  handleMinPriceChange={handleMinPriceChange}
                  handleMaxPriceChange={handleMaxPriceChange}
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
      <main className='mx-auto w-full lg:max-w-7xl px-4 sm:px-6 lg:px-8 dark:bg-semi-dark p-2 mt-10'>
        <div className='flex flex-col md:flex-row items-baseline justify-between border-b border-gray-200 pb-4 pt-4'>
          <h1 className='text-4xl font-bold tracking-tight text-secondary-text pb-5 md:pb-0'>
            Products{" "}
            <span className={`${textColor}`}>{filteredProducts?.length}</span>
          </h1>
          <div className='flex flex-wrap items-center gap-5'>
            {/* pass the all sectionsData array  */}
            <SortDropDown
              sectionsData={sectionsData}
              handleSelectedSorting={handleSelectedSorting}
              selectedSorting={selectedSorting}
            />
            <div className='flex items-center gap-3'>
              <span className='text-secondary-text dark:text-secondary-text-dark text-sm'>
                View:
              </span>
              <button className='text-gray-400 flex items-center hover:text-gray-500'>
                <IoGrid size={20} />
              </button>
              <button className='text-gray-400 flex items-center hover:text-gray-500'>
                <FaList size={20} />
              </button>
            </div>
            <button
              onClick={() => setOpenSideBar(!openSideBar)}
              className='text-gray-400 hover:text-gray-500 sm:ml-3 lg:hidden'
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
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    handleMinPriceChange={handleMinPriceChange}
                    handleMaxPriceChange={handleMaxPriceChange}
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
            <div className='lg:col-span-3 max-h-[95vh] overflow-y-auto bg-white dark:bg-primary-dark rounded-xl lg:p-5'>
              {/* Render filtered products here */}
              {isFilterLoading ? (
                <div className='flex justify-center items-center h-full'>
                  <div className='text-gray-500 dark:text-gray-400'>
                    <BigSpinner />
                  </div>
                </div>
              ) : FilterError ? (
                <div className='text-red-500'>Error: {FilterError?.error}</div>
              ) : filteredProducts?.length > 0 ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-5 gap-6'>
                  {filteredProducts?.map((product) => (
                    <Card {...product}></Card>
                  ))}
                </div>
              ) : (
                <div className='flex justify-center items-center h-full my-20'>
                  <img
                    src={emptyBox}
                    alt='No Product Found'
                    className='w-1/2'
                  />
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
