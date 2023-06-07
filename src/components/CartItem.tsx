import { Order } from "@/lib/drizzle";
import Image from "next/image";
import Delete from "./Delete";

const CartItem: React.FC<Order> = ({ id, name, type, price, imgSrc }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-stretch justify-between">
      <div className="flex flex-col sm:flex-row gap-8 items-stretch">
        <div className="w-full sm:w-[151px] h-72 sm:h-48 relative">
          <Image
            src={imgSrc}
            alt="image"
            fill
            className="object-cover rounded-lg"
            priority={true}
          />
        </div>
        <div className="flex flex-col justify-between">
          <h3 className="text-[22px] font-light text-[#212121]">{name}</h3>
          <p className="text-base font-semibold text-[#666666]">{type}</p>
          <p className="text-base font-semibold text-[#212121]">
            Delivery Estimation
          </p>
          <p className="text-base font-semibold text-[#ffc700]">
            5 Working Days
          </p>

          <p className="text-base font-bold text-[#212121]">$ {price}</p>
        </div>
      </div>
      <div className="flex flex-row-reverse sm:flex-col justify-between items-end">
        <div>
          <Delete id={id} />
        </div>
        {/* <div className="flex items-center space-x-2">
          <button className="bg-[#f1f1f1] w-10 h-10 rounded-full text-center font-semibold text-2xl">
            -
          </button>
          <h4>1</h4>
          <button className="border border-[#000000] w-10 h-10 rounded-full text-center font-semibold text-2xl">
            +
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default CartItem;
