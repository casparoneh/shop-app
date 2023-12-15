import SingleItem from "../utils/SingleItem";
import Filter from "./Filter";

const ShopContainer = () => {
  return (
    <div className="flex">
      {/* left side */}
      <div className="w-1/4 px-8">
        <Filter />
      </div>
      {/* right side */}
      <div className="py-40  ml-20">
        <SingleItem />
      </div>
    </div>
  );
};
export default ShopContainer;
