"use client";
import CartItem from "@/components/CartItem";
import Container from "@/components/layout/Container";
import { Order } from "@/lib/drizzle";
import { AiOutlineShopping as Bag } from "react-icons/ai";

import Checkout from "@/components/Checkout";

import { RootState } from "@/store";

import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const Page = async () => {
  const { items } = useAppSelector((state) => state.cart);

  console.log(items);

  // const { orders } = result;
  const totalProducts = items.length;
  const subTotal: number = items.reduce(function (acc, obj) {
    return acc + obj.price;
  }, 0);

  // const subTotal = 5000;

  return (
    <Container>
      <div className="xl:p-12 my-10">
        {totalProducts === 0 ? (
          <div className="space-y-8">
            <h2 className="text-[#000000] font-bold text-2xl">Shopping Cart</h2>
            <div className="flex flex-col items-center justify-center">
              <Bag
                style={{
                  fontSize: "10rem",
                  color: "#000000",
                }}
              />
              <h1 className="text-[#000000] font-bold text-[2rem]">
                Your shopping bag is empty
              </h1>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-[#000000] font-bold text-2xl">Shopping Cart</h2>
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-16">
              <div className="flex-1 mt-8 flex flex-col gap-8 xl:gap-16">
                {items?.map(({ _id, name, type, price, imgSrc }, index) => (
                  <CartItem
                    key={_id}
                    id={index}
                    name={name}
                    type={type}
                    price={price}
                    imgSrc={imgSrc}
                  />
                ))}
              </div>
              <div className="lg:max-w-xs w-full bg-[#fbfcff] flex flex-col gap-8 p-8">
                <h1 className="text-[#000000] text-lg font-bold">
                  Order Summary
                </h1>
                <div className="flex items-center justify-between text-[#000000] text-base">
                  <p>Quantity</p>
                  <p>
                    {totalProducts} Product{totalProducts > 1 && "s"}
                  </p>
                </div>
                <div className="flex items-center justify-between text-[#000000] text-base">
                  <p>Sub Total</p>
                  <p>${subTotal.toLocaleString()}</p>
                </div>
                <Checkout />
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Page;
