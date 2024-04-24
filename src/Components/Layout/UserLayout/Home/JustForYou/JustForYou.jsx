import { useGetProductsQuery } from "../../../../Features/Product/productsApiSlice";
import Card from "../../Utilities/Card/Card";
import Title from "../../Hooks/Title";
import CardLoadingSkeleton from "../CardLoadingSkeleton/cardLoadingSkeleton";
import showErrorMessage from "../../Utilities/showErrorMessage/showErrorMessage";

const JustForYou = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <section className="mx-auto bg-root-bg mt-5 p-5 rounded-lg dark:bg-semi-dark">
      <div className="mb-5">
        <Title title="Just For You"></Title>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {error && showErrorMessage(error)}
        {isLoading
          ? Array(6)
              .fill(null)
              .map((_, index) => (
                <CardLoadingSkeleton
                  key={index}
                  index={index}
                ></CardLoadingSkeleton>
              ))
          : products.map((product) => <Card key={product._id} {...product} />)}
      </div>
    </section>
  );
};

export default JustForYou;
