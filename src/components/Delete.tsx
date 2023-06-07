"use client";
import { Order } from "@/lib/drizzle";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { MdDeleteOutline as DeleteButton } from "react-icons/md";

interface DeleteProps {
  id: number;
}

const Delete: React.FC<DeleteProps> = ({ id }) => {
  const router = useRouter();
  const deleteOrder = async () => {
    try {
      const res = await fetch(
        `${process.env.BASE_URL}/api/cart/${id.toString()}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch the data");
      }
      toast.success("Item Deleted from Cart");
      router.refresh();
    } catch (err) {
      toast.error("Some thing Wrong");
      throw err;
    }
  };

  return (
    <DeleteButton
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
