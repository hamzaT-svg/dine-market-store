"use client";
import { toast } from "react-hot-toast";
import { NewOrder } from "@/lib/drizzle";
import { useRouter } from "next/navigation";
import { CgShoppingCart as Cart } from "react-icons/cg";
import { useState } from "react";

const AddToCart: React.FC<NewOrder> = ({ name, type, price, imgSrc }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const handleAddToCart = async () => {
    try {
      setLoading(true);
      await fetch(`https://dine-market-rose.vercel.app/api/cart`, {
        method: "POST",
        body: JSON.stringify({
          name,
          type,
          price,
          imgSrc,
        }),
      });

      toast.success("1 Item Added To Cart");
      router.refresh();
    } catch (error) {
      toast.error("Something Went Wrong.");
      console.log("error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <button
      onClick={handleAddToCart}
      disabled={loading}
      className={`bg-[#212121] text-[#FFFFFF] flex items-center space-x-2 py-2 px-4 font-semibold text-sm ${
        loading && "opacity-50"
      }`}
    >
      <Cart style={{ fontSize: "1rem", color: "#FFFFFF" }} />
      <span>Add to Cart</span>
    </button>
  );
};

export default AddToCart;
