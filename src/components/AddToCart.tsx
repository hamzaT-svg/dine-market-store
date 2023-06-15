"use client";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { CgShoppingCart as Cart } from "react-icons/cg";
import { CartItem, addToCart } from "@/store/slices/cartSlice";
import { toast } from "react-hot-toast";

export const useAppDispatch: () => AppDispatch = useDispatch;

const AddToCart: React.FC<CartItem> = ({ _id, name, type, price, imgSrc }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ _id, name, type, price, imgSrc }));
    toast.success("Item Added to Cart");
  };

  return (
    <button
      onClick={handleAddToCart}
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
