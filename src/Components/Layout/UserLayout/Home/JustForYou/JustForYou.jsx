import { useGetProductsQuery } from "../../../../Features/productsApiSlice";
import Card from "../../Utilities/Card/Card";
import Title from "../../Hooks/Title";
import CardLoadingSkeleton from "../../Utilities/CardLoadingSkeleton/cardLoadingSkeleton";
import ShowErrorMessage from "../../Utilities/ErrorMessage/ShowErrorMessage";
import { useState, useEffect } from "react";
import BigSpinner from "../../../BigSpinner/BigSpinner";

const JustForYou = () => {
  const [page, setPage] = useState(1);
  const [allProducts, setAllProducts] = useState([]);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const limit = 10;
  const skip = (page - 1) * limit;

  const { data, isLoading, error } = useGetProductsQuery({ skip, limit });

  useEffect(() => {
    if (data?.products) {
      setAllProducts((prevProducts) => [...prevProducts, ...data.products]);
      setIsFetchingMore(false);
    }
  }, [data]);

  const handleLoadData = () => {
    setIsFetchingMore(true);
    setPage((prev) => prev + 1);
  };

  return (
    <section className='mx-auto px-5 bg-root-bg mt-5 rounded-lg dark:bg-semi-dark py-5'>
      <div className='mb-5'>
        <Title title='Just For You'></Title>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-5 mb-10'>
        {error && ShowErrorMessage(error?.error)}
        {isLoading && allProducts.length === 0
          ? Array(12)
              .fill(null)
              .map((_, index) => (
                <CardLoadingSkeleton
                  key={index}
                  index={index}
                ></CardLoadingSkeleton>
              ))
          : allProducts.map((product) => (
              <Card key={product._id} {...product} />
            ))}
      </div>
      <div className='flex justify-center items-center'>
        <button
          onClick={handleLoadData}
          className={`bg-gradient-to-r from-blue-500 to-red-500 text-white px-4 py-2 text-xl rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate w-72`}
        >
          {isFetchingMore ? "Loading..." : "Load More"}
        </button>
      </div>
    </section>
  );
};

export default JustForYou;
