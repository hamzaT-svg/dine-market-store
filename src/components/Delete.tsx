"use client";
import { MdDeleteOutline as DeleteButton } from "react-icons/md";

interface DeleteProps {
  id: number;
}

const Delete: React.FC<DeleteProps> = ({ id }) => {
  return (
    <DeleteButton
      className={`${false && "opacity-50"} cursor-pointer`}
      onClick={() => {
        // deleteOrder();
      }}
      style={{
        fontSize: "2rem",
        color: "#000000",
      }}
    />
  );
};

export default Delete;
