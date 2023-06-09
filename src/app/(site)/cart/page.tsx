import CartItem from "@/components/CartItem";
import Container from "@/components/layout/Container";
import { Order } from "@/lib/drizzle";
import { AiOutlineShopping as Bag } from "react-icons/ai";

import Checkout from "@/components/Checkout";

type OrdersResult = {
  message: string;
  orders: Order[];
};

const getOrders = async (): Promise<OrdersResult> => {
  try {
    const res: any = await fetch(`http://localhost:3000/api/cart`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch the data");
    }
    const result: OrdersResult = await res.json();
    return result;
  } catch (err) {
    throw err;
  }
};

const page = async () => {
  const result = await getOrders();
  const { orders } = result;
  const totalProducts = orders.length;
  const subTotal: number = orders.reduce(function (acc, obj) {
    return acc + obj.price;
  }, 0);

  return (
    <Container>
      <div className="xl:p-12 my-10">
        {totalProducts === 0 ? (
          <div className="space-y-8">
            <h2 className="text-[#000000] font-bold text-2xl">Shopping Cart</h2>
            <div className="flex flex-col items-center justify-center">
              <Bag
                style={{
                  fontSize: "10rem",
                  color: "#000000",
                }}
              />
              <h1 className="text-[#000000] font-bold text-[2rem]">
                Your shopping bag is empty
              </h1>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-[#000000] font-bold text-2xl">Shopping Cart</h2>
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-16">
              <div className="flex-1 mt-8 flex flex-col gap-8 xl:gap-16">
                {orders?.map(({ id, name, type, price, imgSrc }) => (
                  <CartItem
                    key={id}
                    id={id}
                    name={name}
                    type={type}
                    price={price}
                    imgSrc={imgSrc}
                  />
                ))}
              </div>
              <div className="lg:max-w-xs w-full bg-[#fbfcff] flex flex-col gap-8 p-8">
                <h1 className="text-[#000000] text-lg font-bold">
                  Order Summary
                </h1>
                <div className="flex items-center justify-between text-[#000000] text-base">
                  <p>Quantity</p>
                  <p>
                    {totalProducts} Product{totalProducts > 1 && "s"}
                  </p>
                </div>
                <div className="flex items-center justify-between text-[#000000] text-base">
                  <p>Sub Total</p>
                  <p>${subTotal.toLocaleString()}</p>
                </div>
                <Checkout cart={orders} />
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default page;
