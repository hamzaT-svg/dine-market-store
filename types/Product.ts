import ProductDetail from "./ProductDetail";

type Product = Omit<
    ProductDetail
    , "details" | "care" | "_createdAt" | "category-name" | "category-slug" | "images"> & {
        image: string;
    };



export default Product;