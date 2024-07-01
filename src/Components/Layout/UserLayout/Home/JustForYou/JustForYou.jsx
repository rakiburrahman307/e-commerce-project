import { useGetProductsQuery } from "../../../../Features/productsApiSlice";
import Card from "../../Utilities/Card/Card";
import Title from "../../Utilities/Title/Title";
import CardLoadingSkeleton from "../../Utilities/CardLoadingSkeleton/CardLoadingSkeleton";
import ShowErrorMessage from "../../Utilities/ErrorMessage/ShowErrorMessage";
import { useState, useEffect } from "react";

const JustForYou = () => {
  const [page, setPage] = useState(1);
  const [allProducts, setAllProducts] = useState([]);
  const [totalFetched, setTotalFetched] = useState(0);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const limit = 12;
  const skip = (page - 1) * limit;

  const { data, isLoading, error } = useGetProductsQuery({ skip, limit });

  useEffect(() => {
    if (data?.products) {
      setAllProducts((prevProducts) => [...prevProducts, ...data.products]);
      setTotalFetched((prevTotal) => prevTotal + data.products.length);
      setIsFetchingMore(false);
    }
  }, [data]);

  const handleLoadData = () => {
    setIsFetchingMore(true);
    setPage((prev) => prev + 1);
  };

  const allProductsFetched = totalFetched >= (data?.totalProducts || 0);

  return (
    <section className='mx-auto bg-root-bg mt-5 rounded-lg dark:bg-semi-dark py-5'>
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
          disabled={isFetchingMore || allProductsFetched}
          className={`bg-gradient-to-r from-blue-500 to-red-500 text-white px-4 py-2 text-xl rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate w-72`}
        >
          {isFetchingMore
            ? "Loading..."
            : allProductsFetched
            ? "All Loaded"
            : "Load More"}
        </button>
      </div>
    </section>
  );
};

export default JustForYou;
