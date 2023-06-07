import Products from "@/components/Products";
import Container from "@/components/layout/Container";
import { getAllProducts } from "../../../../sanity/sanity-utils";

const page = async () => {
  const products = await getAllProducts();
  return (
    <Container>
      <Products data={products} />
    </Container>
  );
};

export default page;
