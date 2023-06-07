import Image from "next/image";
import { Product } from "../../types";
import Link from "next/link";

interface ProductItemProps {
  data: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ data }) => {
  const { name, image, type, price, slug } = data;
  return (
    <Link href={`/products/${slug}`} className="space-y-1.5">
      <div className="w-full h-96 sm:w-[250px] sm:h-[266px] relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain"
          priority={true}
        />
      </div>
      <div className="space-y-3">
        <div className="space-y-1.5">
          <h1 className="text-[#212121] font-semibold text-base">{name}</h1>
          <h3 className="text-[#888888] font-semibold text-sm">{type}</h3>
        </div>
        <h2 className="text-[#212121] font-semibold text-lg">{price}</h2>
      </div>
    </Link>
  );
};

export default ProductItem;
