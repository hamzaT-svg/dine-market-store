import Container from "@/components/layout/Container";
import ImageGallery from "@/components/ImageGallery";
import { getProduct, getSlugs } from "../../../../../sanity/sanity-utils";

import { PortableText } from "@portabletext/react";
import AddToCart from "@/components/AddToCart";

export async function generateStaticParams() {
  const slugs = await getSlugs("product");

  return slugs?.map(({ slug }) => ({
    slug,
  }));
}

const ProductDetailsProps = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const { slug } = params;

  const product = await getProduct(slug);

  const { name, type, images, price, care, details } = product[0];

  return (
    <div className="bg-[#fcfcfc] py-16">
      <Container>
        <div className="space-y-10">
          <div className="flex items-start flex-col lg:flex-row lg:space-x-6">
            <div className="w-full lg:flex-1">
              <ImageGallery images={images} />
            </div>
            <div className="space-y-8  w-full lg:w-2/6 mt-16">
              <div>
                <h1 className="text-[#212121] font-normal text-2xl">{name}</h1>
                <h3 className="text-black/30 text-lg font-semibold">{type}</h3>
              </div>
              <div>
                <h4 className="text-[#212121] font-bold text-sm">
                  SELECT SIZE
                </h4>
                <div className="space-y-4">
                  <ul className="text-[#666666] font-bold text-base flex items-center gap-4">
                    <li className="text-center w-10 h-10 rounded-full hover:shadow-2xl cursor-pointer flex items-center justify-center ">
                      <h4>XS</h4>
                    </li>
                    <li className="text-center w-10 h-10 rounded-full hover:shadow-2xl cursor-pointer flex items-center justify-center ">
                      <h4>S</h4>
                    </li>
                    <li className="text-center w-10 h-10 rounded-full hover:shadow-2xl cursor-pointer flex items-center justify-center ">
                      <h4>M</h4>
                    </li>
                    <li className="text-center w-10 h-10 rounded-full hover:shadow-2xl cursor-pointer flex items-center justify-center ">
                      <h4>L</h4>
                    </li>
                    <li className="text-center w-10 h-10 rounded-full hover:shadow-2xl cursor-pointer flex items-center justify-center ">
                      <h4>XL</h4>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <h2 className="text-black font-bold text-base">Quantity:</h2>
                <div className="flex items-center space-x-2">
                  <button className="bg-[#f1f1f1] w-10 h-10 rounded-full text-center font-semibold text-2xl">
                    -
                  </button>
                  <h4>1</h4>

                  <button className="border border-[#000000] w-10 h-10 rounded-full text-center font-semibold text-2xl">
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center w-full space-x-3">
                <AddToCart
                // name={name}
                // type={type}
                // price={price}
                // imgSrc={images[0]}
                />
                <h2 className="font-bold text-2xl text-[#212121]">
                  ${price.toLocaleString()}
                </h2>
              </div>
            </div>
          </div>

          <div className="bg-white py-8 px-16">
            <div className="relative py-[74px]">
              <h1 className="absolute z-0 top-0 left-0 text-[#F2F3F7] font-extrabold text-5xl md:text-[6.2rem]">
                Overview
              </h1>

              <h1 className="text-[#212121] absolute top-8 left-0 z-10 font-bold text-3xl">
                Product Information
              </h1>
            </div>

            <div className="border-t border-[#C4C4C4] pt-8 pb-32 space-y-8">
              <div className="flex item-start ">
                <h2 className="w-3/12 text-[#666666] font-bold text-base">
                  PRODUCT DETAILS
                </h2>

                <div className="flex-1 font-light text-[#212121] text-base">
                  <PortableText value={details} />
                </div>

                {/* <p className="flex-1 font-light text-[#212121] text-base"></p> */}
              </div>
              <div className="flex item-start ">
                <h2 className="w-3/12 text-[#666666] font-bold text-base">
                  PRODUCT CARE
                </h2>

                <div className="flex-1 list-disc text-[#212121] font-semibold text-base">
                  <PortableText value={care} />
                </div>
                {/* <ul className="flex-1 font-semibold list-disc	 text-[#212121] text-base">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>consectetur adipiscing elit</li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetailsProps;
