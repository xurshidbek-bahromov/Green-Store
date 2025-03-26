const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Type</option>
          <option value="flower">Flower</option>
          <option value="plant">Plant</option>
        </select>

        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Size</option>
          <option value="">Small</option>
          <option value="">Normal</option>
          <option value="">Big</option>
        </select>

        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Category</option>
          <option value="">New Arrival</option>
          <option value="">Popular</option>
        </select>

        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-gray-400"
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-gray-400"
        />

        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>All Filters</option>
        </select>
      </div>
      <div className="">
        <select name="" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400">
            <option>Sort By</option>
            <option value="">Price: Low to High</option>
            <option value="">Price: High to Low</option>
            <option value="">Newest</option>
            <option value="">Popular</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
