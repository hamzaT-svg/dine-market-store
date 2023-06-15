"use client";
import { useRouter } from "next/navigation";
import { CgShoppingCart as Cart } from "react-icons/cg";

const AddToCart = () => {
  const router = useRouter();
  return (
    <button
      // onClick={handleAddToCart}
      disabled={false}
      className={`bg-[#212121] text-[#FFFFFF] flex items-center space-x-2 py-2 px-4 font-semibold text-sm ${
        false && "opacity-50"
      }`}
    >
      <Cart style={{ fontSize: "1rem", color: "#FFFFFF" }} />
      <span>Add to Cart</span>
    </button>
  );
};

export default AddToCart;
