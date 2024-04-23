import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../../../Features/Product/productsApiSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, isLoading, error } = useGetSingleProductQuery(id);
  console.log(id);
  console.log(product);
  return (
    <div>
      <h2>hi</h2>
    </div>
  );
};

export default ProductDetail;
