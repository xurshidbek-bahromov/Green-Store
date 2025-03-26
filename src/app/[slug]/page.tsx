import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/Productimages";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-6 lg:px-16 xl:32 2xl:px-30 relative flex flex-col lg:flex-row gap-16">
      {/* img */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* text */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
          soluta sequi qui itaque voluptatum! Non sequi optio eveniet sed cum
          in, molestiae quis ducimus id ipsam excepturi at, repudiandae vitae?
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl text-green-500">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4 ">Title</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            unde perspiciatis, quod molestiae itaque quos atque doloremque sit.
            Hic laboriosam quibusdam, debitis mollitia voluptatum quos quisquam
            sunt neque est architecto?
          </p>
        </div>

        <div className="text-sm">
          <h4 className="font-medium mb-4 ">Title</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            unde perspiciatis, quod molestiae itaque quos atque doloremque sit.
            Hic laboriosam quibusdam, debitis mollitia voluptatum quos quisquam
            sunt neque est architecto?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
