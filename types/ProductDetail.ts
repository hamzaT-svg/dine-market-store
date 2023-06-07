import { PortableTextBlock } from "sanity";

type ProductDetail = {
    _id: string,
    _createdAt: Date,
    name: string,
    slug: string;
    images: string[];
    price: number,
    details: PortableTextBlock[];
    care: PortableTextBlock[];
    type: string;
    "category-name": string,
    "category-slug": string;
};

export default ProductDetail;