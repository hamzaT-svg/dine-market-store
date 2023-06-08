import Container from "@/components/layout/Container";
import {
  getCategories,
  getSlugs,
  getProducts,
} from "../../../../sanity/sanity-utils";
import Products from "@/components/Products";

export async function generateStaticParams() {
  const slugs = await getSlugs("category");

  return slugs?.map(({ slug }) => ({
    slug,
  }));
}

const Category = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const { slug } = params;
  const products = await getProducts(slug);

  return (
    <section>
      <Container>
        <Products data={products} />
      </Container>
    </section>
  );
};

export default Category;
