import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  lazy,
  Suspense,
} from "react";
import { IoGrid } from "react-icons/io5";
import { FaFilter, FaList } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { useFilterProductsQuery } from "../../../../Features/productsApiSlice";
import useContextInfo from "../../Hooks/useContextInfo";
import emptyBox from "../../../../../assets/svg/empty-box.svg";
import sectionsData from "../../../../../../public/data.json";
import useIntersectionObserver from "../../Hooks/useIntersectionObserver";
import LoadingSpinner from "../../../BigSpinner/LoadingSpinner";
import { useParams } from "react-router-dom";
import debounce from "lodash.debounce";
import BigSpinner from "../../../BigSpinner/BigSpinner";

const FilterSection = lazy(() => import("./FilterSection"));
const SortDropDown = lazy(() => import("./SortDropDown"));
const Card = lazy(() => import("../../Utilities/Card/Card"));
const ListCard = lazy(() => import("../../Utilities/Card/ListCard"));
const CardLoadingSkeleton = lazy(() =>
  import("../../Utilities/CardLoadingSkeleton/CardLoadingSkeleton")
);
const ListCardLoadingSkeleton = lazy(() =>
  import("../../Utilities/CardLoadingSkeleton/ListCardLoadingSkeleton")
);

const Products = () => {
  const { textColor } = useContextInfo();
  const { category } = useParams();
  const [page, setPage] = useState(1);
  const [listOption, setListOption] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [sections, setSections] = useState({
    categories: true,
    color: false,
    size: false,
    brand: false,
    priceRange: false,
    rating: false,
  });

  const [filters, setFilters] = useState({
    categories: category || "",
    color: "",
    size: "",
    brand: "",
    rating: "",
    minPrice: 0,
    maxPrice: 0,
    sorting: "",
  });

  const toggleSection = useCallback((sectionKey) => {
    setSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  }, []);

  const handleFilterChange = useCallback(
    (key, value) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [key]: value,
      }));
    },
    [setFilters]
  );

  const debouncedHandleFilterChange = useMemo(
    () =>
      debounce((key, value) => {
        handleFilterChange(key, value);
      }, 300),
    [handleFilterChange]
  );

  const handleMinPriceChange = (e) => {
    debouncedHandleFilterChange("minPrice", e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    debouncedHandleFilterChange("maxPrice", e.target.value);
  };

  const handleSelectCategory = (e) => {
    debouncedHandleFilterChange("categories", e.target.value);
  };

  const handleSelectColor = (e) => {
    debouncedHandleFilterChange("color", e.target.value);
  };

  const handleSelectSize = (e) => {
    debouncedHandleFilterChange("size", e.target.value);
  };

  const handleSelectBrand = (e) => {
    debouncedHandleFilterChange("brand", e.target.value);
  };

  const handleSelectRating = (e) => {
    debouncedHandleFilterChange("rating", e.target.value);
  };

  const handleSelectedSorting = (e) => {
    debouncedHandleFilterChange("sorting", e.target.value);
  };

  const {
    data: filteredProducts,
    isLoading: isFilterLoading,
    error: filterError,
  } = useFilterProductsQuery({
    categories:
      filters?.categories === "all_category"
        ? null
        : filters?.categories || category || null,
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
    if (category) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        categories: category,
      }));
    }
  }, [category]);

  useEffect(() => {
    setProducts([]);
    setPage(1);
    setIsInitialLoading(true);
  }, [filters]);

  useEffect(() => {
    if (filteredProducts && filteredProducts.length > 0 && !isFilterLoading) {
      setProducts((prevProducts) => [...prevProducts, ...filteredProducts]);
      setIsLoadingMore(false);
      setIsInitialLoading(false);
    }
  }, [filteredProducts, isFilterLoading]);

  useEffect(() => {
    setHasMore(filteredProducts?.length > 0);
  }, [filteredProducts]);

  const observerRef = useIntersectionObserver(
    () => {
      if (!isLoadingMore && hasMore) {
        setIsLoadingMore(true);
        setPage((prevPage) => prevPage + 1);
      }
    },
    { threshold: 1 }
  );

  return (
    <Suspense fallback={<BigSpinner />}>
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
            <h1 className='text-4xl flex items-center gap-2 font-bold tracking-tight text-secondary-text pb-5 md:pb-0'>
              Products <span className={`${textColor}`}>{products.length}</span>
            </h1>
            <div className='flex flex-wrap items-center gap-5'>
              <SortDropDown
                sectionsData={sectionsData}
                handleSelectedSorting={handleSelectedSorting}
                selectedSorting={filters?.sorting}
              />
              <div className='flex gap-4 border-l-2 border-r-2 dark:border-gray-500 px-4'>
                <button
                  onClick={() => setListOption(false)}
                  className={`${
                    !listOption ? textColor : "text-gray-400"
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
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10'>
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
                {isFilterLoading || isInitialLoading ? (
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
                          .map((_, index) => (
                            <CardLoadingSkeleton key={index} />
                          ))}
                  </div>
                ) : filterError ? (
                  <div className='text-red-500'>
                    Error: {filterError?.error}
                  </div>
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
                {!hasMore && (
                  <div className='flex justify-center items-center my-5 text-gray-400'>
                    No More Products
                  </div>
                )}
                {isLoadingMore && hasMore && (
                  <div className='flex justify-center items-center mt-16 mb-5'>
                    <LoadingSpinner />
                  </div>
                )}
                <div className='mb-10 md:mb-0' ref={observerRef} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </Suspense>
  );
};

export default React.memo(Products);
