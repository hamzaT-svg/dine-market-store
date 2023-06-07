import { createClient, groq } from "next-sanity";
import { Category, Slug, Product, ProductDetail } from "../types";
import config from "./config/client-config";


export async function getCategories(): Promise<Category[]> {
    return createClient(config).fetch(
        groq`*[_type == "category"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
        }`
    );
}


export async function getSlugs(type: string): Promise<Slug[]> {
    return createClient(config).fetch(
        groq`*[_type == "${type}"]{
            "slug": slug.current,
        }`
    );
}


export async function getProducts(category: string): Promise<Product[]> {
    return createClient(config).fetch(
        groq`*[_type == "product" && category->slug.current == "${category}"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image":   images[0].asset->url ,
            type,
            price
        }`
    );
}




export async function getAllProducts(): Promise<Product[]> {
    return createClient(config).fetch(
        groq`*[_type == "product"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image":   images[0].asset->url ,
            type,
            price
        }`
    );
}


export async function getProduct(slug: string): Promise<ProductDetail[]> {
    return createClient(config).fetch(
        groq`*[_type == "product" && slug.current == "${slug}"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "images": images[].asset -> url,
            price,
            details,
            care,
            "category-slug": category -> slug.current,
            "category-name": category -> name,
            type
        }`
    );
}





