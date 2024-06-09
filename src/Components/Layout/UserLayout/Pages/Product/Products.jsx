import { IoGrid } from "react-icons/io5";
import { FaFilter, FaList } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";
import FilterSection from "./FilterSection";
import { MdClose } from "react-icons/md";
import { useFilterProductsQuery } from "../../../../Features/productsApiSlice";
import useContextInfo from "../../Hooks/useContextInfo";
import emptyBox from "../../../../../assets/svg/empty-box.svg";
import SortDropDown from "./SortDropDown";
import Card from "../../Utilities/Card/Card";
import ListCard from "../../Utilities/Card/ListCard";
import CardLoadingSkeleton from "../../Utilities/CardLoadingSkeleton/CardLoadingSkeleton";
import ListCardLoadingSkeleton from "../../Utilities/CardLoadingSkeleton/ListCardLoadingSkeleton";
import sectionsData from "../../../../../../public/data.json";
import useIntersectionObserver from "../../Hooks/useIntersectionObserver";
import BigSpinner from "../../../BigSpinner/BigSpinner";
import LoadingSpinner from "../../../BigSpinner/LoadingSpinner";

const Products = () => {
  const { textColor, borderColor } = useContextInfo();
  const [page, setPage] = useState(1);
  const [listOption, setListOption] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [sections, setSections] = useState({
    categories: true,
    color: false,
    size: false,
    brand: false,
    priceRange: false,
    rating: false,
  });

  const [filters, setFilters] = useState({
    categories: "",
    color: "",
    size: "",
    brand: "",
    rating: "",
    minPrice: 0,
    maxPrice: 0,
    sorting: "",
  });

  const toggleSection = (sectionKey) => {
    setSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      minPrice: value,
    }));
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      maxPrice: value,
    }));
  };

  const handleSelectCategory = (e) => {
    const value = e.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      categories: value,
    }));
  };

  const handleSelectColor = (e) => {
    const value = e.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      color: value,
    }));
  };

  const handleSelectSize = (e) => {
    const value = e.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      size: value,
    }));
  };

  const handleSelectBrand = (e) => {
    const value = e.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      brand: value,
    }));
  };

  const handleSelectRating = (e) => {
    const value = e.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      rating: value,
    }));
  };

  const handleSelectedSorting = (e) => {
    const value = e.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      sorting: value,
    }));
  };

  const {
    data: filteredProducts,
    isLoading: isFilterLoading,
    error: FilterError,
  } = useFilterProductsQuery({
    categories:
      filters?.categories === "all_category"
        ? null
        : filters?.categories || null,
    color: filters?.color === "All Color" ? null : filters?.color || null,
    size: filters?.size === "All Size" ? null : filters?.size || null,
    brand: filters?.brand === "All Brand" ? null : filters?.brand || null,
    rating: filters?.rating === "All Rating" ? null : filters?.rating || null,
    minPrice: filters?.minPrice || null,
    maxPrice: filters?.maxPrice || null,
    sort: filters?.sorting === "all_products" ? null : filters?.sorting || null,
    page,
  });

  useEffect(() => {
    if (filteredProducts && filteredProducts.length > 0 && !isFilterLoading) {
      setProducts((prevProducts) => [...prevProducts, ...filteredProducts]);
      setIsLoadingMore(false);
    }
  }, [filteredProducts, isFilterLoading]);

  const observerRef = useIntersectionObserver(
    () => {
      if (!isLoadingMore) {
        setIsLoadingMore(true);
        setPage((prevPage) => prevPage + 1);
      }
    },
    { threshold: 1 }
  );

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
                  minPrice={filters?.minPrice}
                  maxPrice={filters?.maxPrice}
                  handleMinPriceChange={handleMinPriceChange}
                  handleMaxPriceChange={handleMaxPriceChange}
                  selectedCategories={filters?.categories}
                  handleSelectCategory={handleSelectCategory}
                  selectedColor={filters?.color}
                  handleSelectColor={handleSelectColor}
                  selectedSize={filters?.size}
                  handleSelectSize={handleSelectSize}
                  selectedBrand={filters?.brand}
                  handleSelectBrand={handleSelectBrand}
                  selectedRating={filters?.rating}
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
            Products <span className={`${textColor}`}>{products.length}</span>
          </h1>
          <div className='flex flex-wrap items-center gap-5'>
            <SortDropDown
              sectionsData={sectionsData}
              handleSelectedSorting={handleSelectedSorting}
              selectedSorting={filters?.sorting}
            />
            <div className='flex items-center gap-3'>
              <span className='text-secondary-text dark:text-secondary-text-dark text-sm'>
                View:
              </span>
              <button
                onClick={() => setListOption(false)}
                className={`${
                  listOption ? "text-gray-400" : textColor
                } flex items-center hover:${textColor}`}
              >
                <IoGrid size={20} />
              </button>
              <button
                onClick={() => setListOption(true)}
                className={`${
                  listOption ? textColor : "text-gray-400"
                } flex items-center hover:${textColor}`}
              >
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
                    minPrice={filters?.minPrice}
                    maxPrice={filters?.maxPrice}
                    handleMinPriceChange={handleMinPriceChange}
                    handleMaxPriceChange={handleMaxPriceChange}
                    selectedCategories={filters?.categories}
                    handleSelectCategory={handleSelectCategory}
                    selectedColor={filters?.color}
                    handleSelectColor={handleSelectColor}
                    selectedSize={filters?.size}
                    handleSelectSize={handleSelectSize}
                    selectedBrand={filters?.brand}
                    handleSelectBrand={handleSelectBrand}
                    selectedRating={filters?.rating}
                    handleSelectRating={handleSelectRating}
                  />
                ))}
              </div>
            </form>
            <div className='lg:col-span-3 max-h-[95vh] overflow-y-auto bg-white dark:bg-primary-dark rounded-xl lg:p-5'>
              {isFilterLoading && page === 1 ? (
                <div
                  className={`${
                    listOption
                      ? "grid grid-cols-1"
                      : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-5 gap-6"
                  }`}
                >
                  {listOption
                    ? Array(12)
                        .fill(null)
                        .map((_, index) => (
                          <ListCardLoadingSkeleton key={index} />
                        ))
                    : Array(9)
                        .fill(null)
                        .map((_, index) => <CardLoadingSkeleton key={index} />)}
                </div>
              ) : FilterError ? (
                <div className='text-red-500'>Error: {FilterError?.error}</div>
              ) : products.length > 0 ? (
                <div
                  className={`${
                    listOption
                      ? "grid grid-cols-1"
                      : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-5 gap-6"
                  }`}
                >
                  {products?.map((product) =>
                    listOption ? (
                      <ListCard key={product._id} {...product} />
                    ) : (
                      <Card key={product._id} {...product} />
                    )
                  )}
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
              {isLoadingMore && (
                <div className='flex justify-center items-center mt-16 mb-5'>
                  <LoadingSpinner />
                </div>
              )}
              <div ref={observerRef} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Products;
