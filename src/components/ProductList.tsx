import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className="w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full  lg:w-64 h-64">
          <Image
            src="https://images.pexels.com/photos/17499404/pexels-photo-17499404/free-photo-of-close-up-of-a-bunch-of-blue-carnations-in-a-vase.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-xl z-10 hover:opacity-0 transition-opacity easy duration-500"
          />

          <Image
            src="https://images.pexels.com/photos/30599027/pexels-photo-30599027/free-photo-of-vibrant-yellow-tulip-bouquet-in-glass-vase.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="rounded-xl"
          />
        </div>

        <div className="flex justify-between">
            <span className="font-medium my-2">Product Name</span>
        </div>
        <div className="text-sm text-gray-500 mb-2">My description</div>
        <div className="flex justify-between items-center">
            <button className="rounded-2xl ring-0 bg-green-600 text-white w-max py-2 px-2 text-sm hover:bg-green-300 ">Add to Cart</button>
            <div className="my-2 flex gap-2 bg-gray-300 rounded-2xl p-1">
              <p className="">Price:</p>
              <span className="font-semibold text-green-500">$79</span>
              <span className="font-semibold text-gray-500 line-through"> $99</span>
            </div>
        </div>
      </Link>

      <Link href="/test" className="w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full  lg:w-64 h-64">
          <Image
            src="https://images.pexels.com/photos/17499404/pexels-photo-17499404/free-photo-of-close-up-of-a-bunch-of-blue-carnations-in-a-vase.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-xl z-10 hover:opacity-0 transition-opacity easy duration-500"
          />

          <Image
            src="https://images.pexels.com/photos/30599027/pexels-photo-30599027/free-photo-of-vibrant-yellow-tulip-bouquet-in-glass-vase.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="rounded-xl"
          />
        </div>

        <div className="flex justify-between">
            <span className="font-medium my-2">Product Name</span>
        </div>
        <div className="text-sm text-gray-500 mb-2">My description</div>
        <div className="flex justify-between items-center">
            <button className="rounded-2xl ring-0 bg-green-600 text-white w-max py-2 px-2 text-sm hover:bg-green-300 ">Add to Cart</button>
            <div className="my-2 flex gap-2 bg-gray-300 rounded-2xl p-1">
              <p className="">Price:</p>
              <span className="font-semibold text-green-500">$79</span>
              <span className="font-semibold text-gray-500 line-through"> $99</span>
            </div>
        </div>
      </Link>

      <Link href="/test" className="w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full  lg:w-64 h-64">
          <Image
            src="https://images.pexels.com/photos/17499404/pexels-photo-17499404/free-photo-of-close-up-of-a-bunch-of-blue-carnations-in-a-vase.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-xl z-10 hover:opacity-0 transition-opacity easy duration-500"
          />

          <Image
            src="https://images.pexels.com/photos/30599027/pexels-photo-30599027/free-photo-of-vibrant-yellow-tulip-bouquet-in-glass-vase.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="rounded-xl"
          />
        </div>

        <div className="flex justify-between">
            <span className="font-medium my-2">Product Name</span>
        </div>
        <div className="text-sm text-gray-500 mb-2">My description</div>
        <div className="flex justify-between items-center">
            <button className="rounded-2xl ring-0 bg-green-600 text-white w-max py-2 px-2 text-sm hover:bg-green-300 ">Add to Cart</button>
            <div className="my-2 flex gap-2 bg-gray-300 rounded-2xl p-1">
              <p className="">Price:</p>
              <span className="font-semibold text-green-500">$79</span>
              <span className="font-semibold text-gray-500 line-through"> $99</span>
            </div>
        </div>
      </Link>

      <Link href="/test" className="w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full  lg:w-64 h-64">
          <Image
            src="https://images.pexels.com/photos/17499404/pexels-photo-17499404/free-photo-of-close-up-of-a-bunch-of-blue-carnations-in-a-vase.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-xl z-10 hover:opacity-0 transition-opacity easy duration-500"
          />

          <Image
            src="https://images.pexels.com/photos/30599027/pexels-photo-30599027/free-photo-of-vibrant-yellow-tulip-bouquet-in-glass-vase.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="rounded-xl"
          />
        </div>

        <div className="flex justify-between">
            <span className="font-medium my-2">Product Name</span>
        </div>
        <div className="text-sm text-gray-500 mb-2">My description</div>
        <div className="flex justify-between items-center">
            <button className="rounded-2xl ring-0 bg-green-600 text-white w-max py-2 px-2 text-sm hover:bg-green-300 ">Add to Cart</button>
            <div className="my-2 flex gap-2 bg-gray-300 rounded-2xl p-1">
              <p className="">Price:</p>
              <span className="font-semibold text-green-500">$79</span>
              <span className="font-semibold text-gray-500 line-through"> $99</span>
            </div>
        </div>
      </Link>

    </div>
  );
};

export default ProductList;
