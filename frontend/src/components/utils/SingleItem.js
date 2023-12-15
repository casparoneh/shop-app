import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";

const SingleItem = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className=" w-80 bg-gray-100 px-4 rounded-md cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img src="./person.jpg" alt="person" className="h-96 w-full " />
        {isHovered && (
          <button
            className={`absolute bg-white w-full text-black py-2 transition ease-in-out delay-5000  ${
              isHovered
                ? "translate-y-0 bottom-6 "
                : "-translate-y-full"
            }`}
          >
            Add to Cart
          </button>
        )}
      </div>

      <div className="flex justify-between py-4">
        <div>
          <h1 className="text-grey-600 text-sm">Dresses</h1>
          <p className="text-lg">Calvin Klein shorts</p>
          <p className="text-xl font-bold">$29</p>
        </div>
        <div>
          <FaRegHeart size={24} />
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
