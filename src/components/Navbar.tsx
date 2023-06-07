import Link from "next/link";
import { use } from "react";
import { getCategories } from "../../sanity/sanity-utils";

const Navbar = () => {
  const categories = use(getCategories());
  return (
    <ul className="flex items-center justify-between gap-4 xl:gap-12">
      {categories?.map((category) => (
        <Link href={category.slug} key={category._id} className="text-lg">
          {category.name}
        </Link>
      ))}
      <Link href="/products" className="text-lg">
        All Products
      </Link>
    </ul>
  );
};

export default Navbar;
