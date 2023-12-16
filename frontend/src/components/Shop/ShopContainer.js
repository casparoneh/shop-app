import SingleItem from "../utils/SingleItem";
import Filter from "./Filter";

const ShopContainer = () => {
  return (
    <div className="flex container mx-auto py-20">
      {/* left side */}
      <div className=" hidden lg:flex max-w-xs ">
        <Filter />
      </div>
      {/* right side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-12 justify-items-end w-full ">
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
      </div>
    </div>
  );
};
export default ShopContainer;
