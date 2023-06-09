"use client";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { MdDeleteOutline as DeleteButton } from "react-icons/md";
import { useState } from "react";

interface DeleteProps {
  id: number;
}

const Delete: React.FC<DeleteProps> = ({ id }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const deleteOrder = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dine-market-rose.vercel.app/api/cart/${id.toString()}`,
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <DeleteButton
      className={`${loading && "opacity-50"} cursor-pointer`}
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
