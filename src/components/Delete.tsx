"use client";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { MdDeleteOutline as DeleteButton } from "react-icons/md";
import { deleteFromCart } from "@/store/slices/cartSlice";

interface DeleteProps {
  id: string;
}

export const useAppDispatch: () => AppDispatch = useDispatch;

const Delete: React.FC<DeleteProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  const deleteOrder = () => {
    dispatch(deleteFromCart({ id }));
  };
  return (
    <DeleteButton
      className={`${false && "opacity-50"} cursor-pointer`}
      onClick={() => {
        deleteOrder();
      }}
      style={{
        fontSize: "2rem",
        color: "#000000",
      }}
    />
  );
};

export default Delete;
