import { Product } from "../../types";
import ProductItem from "./ProductItem";

interface ProductsProps {
  data: Product[];
}

const Products: React.FC<ProductsProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-4 sm:gap-8 md:gap-16">
      {data?.map((data) => (
        <ProductItem key={data._id} data={data} />
      ))}
    </div>
  );
};

export default Products;
