"use client";
import Link from "next/link";
import { Order } from "@/lib/drizzle";
import { CgShoppingCart as Cart } from "react-icons/cg";
// import { toast } from "react-hot-toast";

const CartIcon = () => {
  return (
    <Link href={"/cart"}>
      <div className="bg-[#3d3b3b] relative w-11 h-11 rounded-full flex items-center justify-center cursor-pointer duration-300 hover:scale-105">
        <Cart style={{ fontSize: "1.3rem" }} />
        <h1 className="bg-[#f02d34] text-[#EEEEEE] rounded-full w-3 h-3 text-center text-[10px] absolute top-1.5 right-1.5">
          {5}
        </h1>
      </div>
    </Link>
  );
};

export default CartIcon;
