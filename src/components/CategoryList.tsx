import Link from "next/link";

const CategoryList = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-2 md:gap-4">
        <Link href="/list?cat=test" className="flex items-center justify-between">
          <h1 className="">House Plants</h1>
          <span>(33)</span>
        </Link>

        <Link href="/list?cat=test" className="flex items-center justify-between ">
          <h1 className="">Potter Plants</h1>
          <span>(12)</span>
        </Link>

        <Link href="/list?cat=test" className="flex items-center justify-between">
          <h1 className="">Seeds</h1>
          <span>(65)</span>
        </Link>

        <Link href="/list?cat=test" className="flex items-center justify-between ">
          <h1 className="">Small Plants</h1>
          <span>(39)</span>
        </Link>

        <Link href="/list?cat=test" className="flex items-center justify-between ">
          <h1 className="">Big Plants</h1>
          <span>(23)</span>
        </Link>

        <Link href="/list?cat=test" className="flex items-center justify-between ">
          <h1 className="">Succulents</h1>
          <span>(17)</span>
        </Link>

        <Link href="/list?cat=test" className="flex items-center justify-between ">
          <h1 className="">Trerrariums</h1>
          <span>(19)</span>
        </Link>

        <Link href="/list?cat=test" className="flex items-center justify-between ">
          <h1 className="">Gardening</h1>
          <span>(13)</span>
        </Link>

        <Link href="/list?cat=test" className="flex items-center justify-between ">
          <h1 className="">Accessories</h1>
          <span>(18)</span>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
