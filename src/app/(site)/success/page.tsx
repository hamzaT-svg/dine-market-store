"use client";
import Container from "@/components/layout/Container";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    const deleteItems = async () => {
      try {
        await fetch(`https://dine-market-rose.vercel.app/api/cart`, {
          method: "DELETE",
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (err) {
        throw err;
      }
    };

    deleteItems();
  }, []);
  return (
    <Container>
      <div className="flex items-end justify-center">
        <h1 className="text-4xl font-bold text-[#212121] py-20">
          Thank You For Shopping
        </h1>
      </div>
    </Container>
  );
};

export default Page;
