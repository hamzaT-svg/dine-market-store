"use client";
import Link from "next/link";
import { Order } from "@/lib/drizzle";
import { use } from "react";
import { CgShoppingCart as Cart } from "react-icons/cg";

type OrdersResult = {
  message: string;
  orders: Order[];
};
type Count = number;

const getTotalOrders = async (): Promise<Count> => {
  try {
    const res: any = await fetch(
      `https://dine-market-seven.vercel.app/api/cart`,
      {
        method: "GET",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch the data");
    }
    const result: OrdersResult = await res.json();
    const { orders } = result;
    return orders.length;
  } catch (err) {
    throw err;
  }
};
const CartIcon = () => {
  const totalOrders = use(getTotalOrders());

  return (
    <Link href={"/cart"}>
      <div className="bg-[#F1F1F1] relative w-11 h-11 rounded-full flex items-center justify-center cursor-pointer duration-300 hover:scale-105">
        <Cart style={{ fontSize: "1.3rem" }} />
        <h1 className="bg-[#f02d34] text-[#EEEEEE] rounded-full w-3 h-3 text-center text-[10px] absolute top-1.5 right-1.5">
          {totalOrders}
        </h1>
      </div>
    </Link>
  );
};

export default CartIcon;
