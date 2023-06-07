import { CgShoppingCart as Cart } from "react-icons/cg";
import Carousel from "@/components/Carousel";
import Container from "@/components/layout/Container";
import Image from "next/image";

export default async function Home() {
  return (
    <section>
      {/* Promotions */}
      <div>
        <Container>
          <div className="space-y-20">
            {/* Banner */}
            <div className="flex justify-between xl:space-x-10">
              <div className="flex-1 mt-10 xl:mt-16 mb-8 flex flex-col justify-between items-start space-y-24 xl:space-y-32">
                <div className="flex flex-col items-start  flex-1 space-y-8 xl:space-y-10">
                  <div className="bg-[#e1edff] text-[#0000ff] py-2 w-32 rounded-md text-center font-semibold">
                    Sale 70%
                  </div>

                  <h1 className="font-bold text-[#212121] text-5xl sm:text-6xl">
                    An Industrial Take on Streetwear
                  </h1>

                  <h4 className="text-[#666666] font-normal text-base max-w-sm">
                    Anyone can beat you but no one can beat your outfit as long
                    as you wear Dine outfits.
                  </h4>
                  <button className="bg-[#212121] text-[#FFFFFF] flex items-center space-x-2 py-4 px-8 font-semibold text-base">
                    <Cart style={{ fontSize: "1.3rem", color: "#FFFFFF" }} />
                    <span>Start Shopping</span>
                  </button>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-10  w-full">
                  <div>
                    <Image
                      src="/assets/images/bazaar.png"
                      alt="bazaar"
                      height={35}
                      width={100}
                    />
                  </div>
                  <div>
                    <Image
                      src="/assets/images/bustle.png"
                      alt="bustle"
                      height={35}
                      width={100}
                    />
                  </div>
                  <div>
                    <Image
                      src="/assets/images/versace.png"
                      alt="versace"
                      height={35}
                      width={100}
                    />
                  </div>
                  <div>
                    <Image
                      src="/assets/images/instyle.png"
                      alt="instyle"
                      height={35}
                      width={100}
                    />
                  </div>
                </ul>
              </div>
              <div className="hidden xl:block w-[650px] h-[650px] relative ">
                <div className="h-[600px] w-[600px] z-0 absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#ffece3] rounded-full "></div>
                <Image
                  src="/assets/images/girl.png"
                  alt="girl"
                  fill
                  className="z-10"
                />
              </div>
            </div>

            {/* Promotions */}

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-[#0062f5] text-center font-bold text-sm">
                  PROMOTIONS
                </h3>
                <h1 className="text-[#212121] text-3xl font-bold text-center">
                  Our Promotions Events
                </h1>
              </div>

              <div className="flex items-stretch flex-col lg:flex-row gap-4 sm:gap-8">
                <div className="gap-4 flex-1 flex flex-col">
                  <div className="bg-[#D6D6D8] px-8 pt-8 h-auto sm:h-52 sm:flex-row flex-col flex items-center justify-between">
                    <div className="flex-1">
                      <h1 className="text-[#212121] font-bold text-3xl">
                        GET UP TO <span className="text-4xl"> 60%</span>
                      </h1>
                      <p className="font-normal text-xl">
                        For the summer season
                      </p>
                    </div>
                    <div className="w-full sm:flex-1 relative h-40 sm:h-full">
                      <Image
                        src={"/assets/images/girl-2.png"}
                        alt="girl-2"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="bg-[#212121] pt-12 pb-8 px-4 sm:px-8 space-y-4">
                    <h1 className="text-white text-center font-bold text-4xl">
                      GET 30% Off
                    </h1>
                    <div className="space-y-1 max-w-xs mx-auto">
                      <h4 className="text-sm font-normal text-white text-center">
                        USE PROMO CODE
                      </h4>
                      <button className="w-full p-2 rounded-lg bg-[#474747] text-white font-bold text-lg">
                        DINEWEEKENDSALE
                      </button>
                    </div>
                  </div>
                </div>
                <div className="gap-4 flex-1 flex flex-col sm:flex-row ">
                  <div className="flex-1 bg-[#EFE1C7]  flex flex-col">
                    <div className="p-6">
                      <h3 className="font-normal text-base">Flex Sweatshirt</h3>
                      <div>
                        <span className="line-through font-normal	">
                          $100.00
                        </span>
                        <span className="	font-semibold ml-2">$75.00</span>
                      </div>
                    </div>
                    <div className="lg:flex-1 w-full lg:h-auto h-60 relative">
                      <Image
                        src="/assets/images/male-1.png"
                        alt="Flex Sweatshirt"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1 bg-[#D7D7D9]  flex flex-col">
                    <div className="p-6">
                      <h3 className="font-normal text-base">
                        Flex Push Button Bomber
                      </h3>
                      <div>
                        <span className="line-through font-normal	">
                          $225.00
                        </span>
                        <span className="	font-semibold ml-2">$190.00</span>
                      </div>
                    </div>
                    <div className="lg:flex-1 w-full lg:h-auto h-60 relative">
                      <Image
                        src="/assets/images/male-2.png"
                        alt="Flex Push Button Bomber"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Carousel */}
            <div className="pb-20">
              <div className="space-y-2">
                <h3 className="text-[#0062f5] text-center font-bold text-sm">
                  PRODUCTS
                </h3>
                <h1 className="text-[#212121] text-3xl font-bold text-center">
                  Check What We Have
                </h1>
              </div>

              <div>
                <Carousel />
              </div>
            </div>
          </div>
        </Container>

        {/* All Products */}
        <div className="bg-[#FBFCFF] pb-24 flex justify-center">
          <Container>
            <div>
              <div className="flex items-center justify-end">
                <div className="xl:max-w-lg -mt-20 pb-10">
                  <h1 className="text-[#212121] font-bold text-3xl sm:text-[2.75rem]">
                    Unique and Authentic Vintage Designer Jewellery
                  </h1>
                </div>
              </div>
              <div className="flex flex-col xl:flex-row items-stretch">
                <div className="flex-1 py-4 relative">
                  {/* <h1 className="absolute z-0 top-0 left- xl:top-1/2 xl:left-1/2 xl:-translate-y-1/2 -translate-x-1/2 text-[#F2F3F7] font-extrabold text-5xl md:text-[6.2rem]">
                    Different from others
                  </h1> */}
                  <div className="z-10">
                    <div className="grid w-full grid-cols-2 gap-4 sm:gap-10 ">
                      <div>
                        <div className="space-y-4 text-[#212121] xl:max-w-[180px]">
                          <h3 className="font-semibold text-lg">
                            Using Good Quality Materials
                          </h3>
                          <p className="font-light text-base ">
                            Lorem ipsum dolor sit amt, consectetur adipiscing
                            elit.
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="space-y-4 text-[#212121] xl:max-w-[180px]">
                          <h3 className="font-semibold text-lg">
                            100% Handmade Products
                          </h3>
                          <p className="font-light text-base ">
                            Lorem ipsum dolor sit amt, consectetur adipiscing
                            elit.
                          </p>
                        </div>
                      </div>

                      <div>
                        <div className="space-y-4 text-[#212121] xl:max-w-[180px]">
                          <h3 className="font-semibold text-lg">
                            Modern Fashion Design
                          </h3>
                          <p className="font-light text-base ">
                            Lorem ipsum dolor sit amt, consectetur adipiscing
                            elit.
                          </p>
                        </div>
                      </div>

                      <div>
                        <div className="space-y-4 text-[#212121] xl:max-w-[180px]">
                          <h3 className="font-semibold text-lg">
                            Discount for Bulk Orders
                          </h3>
                          <p className="font-light text-base ">
                            Lorem ipsum dolor sit amt, consectetur adipiscing
                            elit.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex  flex-col md:flex-row items-stretch space-y-6 md:space-y-0 md:space-x-6">
                  <div className="relative md:flex-1 h-80 xl:h-full  max-w-xs">
                    <Image
                      src="/assets/images/girl-3.png"
                      alt="girl-3"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center items-start space-y-8">
                    <h3 className="text-[#212121] font-light text-sm">
                      This piece is ethically crafted in our small family-owned
                      workshop in Peru with unmatched attention to detail and
                      care. The Natural color is the actual natural color of the
                      fiber, undyed and 100% traceable.
                    </h3>
                    <button className="bg-[#212121] text-white py-2 px-4">
                      See All Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* News Letter */}
        <Container>
          <div className="relative py-24 flex justify-center">
            <h1 className="absolute z-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-[#F2F3F7] font-extrabold text-5xl md:text-[6.2rem]">
              Newsletter
            </h1>

            <div className="space-y-4 sm:space-y-8 z-10 text-center max-w-md w-full">
              <h1 className="text-[#212121] font-bold text-3xl">
                Subscribe Our Newsletter
              </h1>
              <h3 className="text-[#212121] text-base">
                Get the latest information and promo offers directly
              </h3>
              <div className="w-full flex items-center flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <input
                  placeholder="Input email address"
                  className="p-2 flex-1 w-full sm:w-auto border border-[#808080]"
                />
                <button className="bg-[#212121] text-white py-2 px-4">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
