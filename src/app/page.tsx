import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className="px-4 md:px-6 lg:px-16 xl:32 2xl:px-30 relative flex flex-col lg:flex-row gap-10 justify-between">
        <div className="mt-24 lg:sticky top-20 h-max">
          <h1 className="text-xl px-2 md:px-4 lg:px-8 xl:16 2xl:px-12 mb-12">
            Categories
          </h1>
          <CategoryList />
        </div>

        <div className="">
          <div className="mt-24 px-4 md:px-6 lg:px-2 xl:2 2xl:px-2">
            <h1 className="text-2xl">Feature Products</h1>
            <ProductList />
            <ProductList />
          </div>

          <div className="mt-24 px-4 md:px-6 lg:px-2 xl:2 2xl:px-2">
            <h1 className="text-2xl">New Products</h1>
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
