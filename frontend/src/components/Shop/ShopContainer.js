import SingleItem from "../utils/SingleItem"
import Filter from "./Filter"

const ShopContainer = () => {
  return (
    <div className="flex">
        {/* left side */}
        <div className="">
            <Filter />
        </div>
        {/* right side */}
        <div className="py-40">
          <SingleItem />
        </div>
    </div>
  )
}
export default ShopContainer