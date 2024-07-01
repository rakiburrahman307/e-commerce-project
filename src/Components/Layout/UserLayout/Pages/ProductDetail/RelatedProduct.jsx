import PropTypes from "prop-types";
import CardLoadingSkeleton from "../../Utilities/CardLoadingSkeleton/CardLoadingSkeleton";
import Card from "../../Utilities/Card/Card";
import { useRelatedProductQuery } from "../../../../Features/productsApiSlice";
import Title from "../../Utilities/Title/Title";
const RelatedProduct = ({ category }) => {
  const {
    data: relatedProducts,
    isLoading,
    error,
  } = useRelatedProductQuery(category);

  return (
    <section className='mx-auto p-5 rounded-lg bg-white/80 dark:bg-semi-dark'>
      <div className='mb-5'>
        <Title>Related Product</Title>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-5'>
        {error && ShowErrorMessage(error?.error)}
        {isLoading
          ? Array(6)
              .fill(null)
              .map((_, index) => (
                <CardLoadingSkeleton
                  key={index}
                  index={index}
                ></CardLoadingSkeleton>
              ))
          : relatedProducts?.map((product) => (
              <Card key={product._id} {...product} />
            ))}
      </div>
    </section>
  );
};
RelatedProduct.propTypes = {
  category: PropTypes.string,
};
export default RelatedProduct;
