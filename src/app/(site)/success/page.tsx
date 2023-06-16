"use client";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { useEffect } from "react";

import { toast } from "react-hot-toast";

const Page = () => {
  useEffect(() => {
    toast.success("Your Order Has Been Placed");
  }, []);

  return (
    <Container>
      <div className="flex items-end justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-[#212121] py-20">
            Thank You For Shopping
          </h1>
          <Link
            href={"/"}
            className={`bg-[#212121] text-[#FFFFFF] flex items-center space-x-2 py-2 px-4 font-semibold text-sm`}
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Page;
