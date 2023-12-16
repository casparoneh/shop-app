import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const SingleItem = ({ img, fromFavorite }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="max-w-xs rounded-md cursor-pointer relative" // Set relative positioning
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {fromFavorite && isHovered && (
          <div className="absolute top-4 right-4 p-4 bg-white rounded-lg">
            <IoCloseSharp size={20} />
          </div>
        )}

        <img src={img} alt="person" className="h-96 w-full" />
        {isHovered && (
          <button
            className={`absolute bg-white text-black py-2 transition ease-in-out delay-5000 ${
              isHovered
                ? "bottom-6 left-1/2 transform -translate-x-1/2 w-4/5"
                : "-translate-y-full"
            }`}
          >
            Add to Cart
          </button>
        )}
      </div>

      <div className="flex justify-between p-4">
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
