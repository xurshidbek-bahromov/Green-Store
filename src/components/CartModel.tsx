"use client";

import Image from "next/image";

const CartModel = () => {
  const cartItems = true;

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
        <h2 className="text-xl">Shopping Cart</h2>
          {/* LIST */}
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/17499404/pexels-photo-17499404/free-photo-of-close-up-of-a-bunch-of-blue-carnations-in-a-vase.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                width={72}
                height={96}
                className="object-civer rounded-md"
              ></Image>
              <div className="flex flex-col justify-between w-full">
                {/* Top */}
                <div className="">
                  {/* Title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$79</div>
                  </div>
                  {/* Des */}
                  <div className="text-sm text-gray-500">
                    <p>Product Description</p>
                  </div>
                </div>
                {/* Bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty, 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/11522895/pexels-photo-11522895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                width={72}
                height={96}
                className="object-civer rounded-md"
              ></Image>
              <div className="flex flex-col justify-between w-full">
                {/* Top */}
                <div className="">
                  {/* Title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$79</div>
                  </div>
                  {/* Des */}
                  <div className="text-sm text-gray-500">
                    <p>Product Description</p>
                  </div>
                </div>
                {/* Bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty, 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* BOTTOM */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtitle</span>
              <span className="">$199</span>
            </div>

            <p className="text-sm text-gray-500 mt-2 mb-4">
                Lorem ipsum dolor sit amet 
            </p>
            <div className="flex justify-between text-sm">
                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
                <button className="rounded-md py-3 px-4 ring-1 bg-green-600 text-white">Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModel;
