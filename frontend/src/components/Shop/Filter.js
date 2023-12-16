import Link from "next/link";
import FilterContainer from "./FilterContainer";
import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const Filter = () => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const toggleColor = (colorId) => {
    if (selectedColors.includes(colorId)) {
      setSelectedColors(selectedColors.filter((id) => id !== colorId));
    } else {
      setSelectedColors([...selectedColors, colorId]);
    }
  };

  const handleSizeClick = (id) => {
    // Check if the size is already selected
    const isSelected = selectedSizes.includes(id);

    // Toggle the selection
    if (isSelected) {
      setSelectedSizes(selectedSizes.filter((sizeId) => sizeId !== id));
    } else {
      setSelectedSizes([...selectedSizes, id]);
    }
  };

  const colors = [
    {
      id: 1,
      color: "bg-red-900",
    },
    {
      id: 2,
      color: "bg-blue-900",
    },
    {
      id: 3,
      color: "bg-green-900",
    },
    {
      id: 4,
      color: "bg-slate-900",
    },
    {
      id: 5,
      color: "bg-yellow-900",
    },
    {
      id: 6,
      color: "bg-orange-900",
    },
  ];

  const sizes = [
    {
      id: 1,
      name: "XS",
    },
    {
      id: 2,
      name: "S",
    },
    {
      id: 3,
      name: "M",
    },
    {
      id: 4,
      name: "L",
    },
    {
      id: 5,
      name: "XL",
    },
    {
      id: 6,
      name: "XXL",
    },
  ];

  return (
    <div className="">
      <FilterContainer title="PRODUCT CATEGORIES">
        <div className="flex flex-col gap-2 text-sm mt-4">
          <Link href="">Dresses</Link>
          <Link href="">Shorts</Link>
          <Link href="">Sweatshirts</Link>
          <Link href="">Jeans</Link>
          <Link href="">Trousers</Link>
          <Link href="">Men</Link>
          <Link href="">Women</Link>
        </div>
      </FilterContainer>
      <FilterContainer title="COLORS">
        <div className="flex gap-4 items-center mt-4">
          {colors.map((item, index) => {
            return (
              <div
              key={item.id}

                className={`${
                  selectedColors.includes(item.id) &&
                  "border-2 rounded-full border-black"
                }`}
              >
                <div
                  key={item.id}
                  className={`relative w-6 h-6 ${item.color} rounded-full ${
                    selectedColors.includes(item.id)
                      ? "border-4 border-white"
                      : ""
                  }`}
                  onClick={() => toggleColor(item.id)}
                ></div>
              </div>
            );
          })}
        </div>
      </FilterContainer>

      <FilterContainer title="SIZES">
        <div className="flex gap-4 mt-4 flex-wrap">
          {sizes.map((item, index) => (
            <div
              key={item.id}
              className={`px-6 py-3 ${
                selectedSizes.includes(item.id) ? "bg-gray-400" : "bg-gray-100"
              } border border-grey-100 inline-block cursor-pointer`}
              onClick={() => handleSizeClick(item.id)}
            >
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </FilterContainer>

      <FilterContainer title="BRANDS">
        <div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="border-2 boder-red-600 p-4 bg-red-900 w-4 h-4 text-red-600"
              />
              <label className="ml-2">Adidas</label>
            </div>
            <div>
              <p>29</p>
            </div>
          </div>
        </div>
      </FilterContainer>

      <FilterContainer title="PRICE">
        <div className="flex items-center space-x-2 mt-20">
          <RangeSlider  />
          {/* https://www.npmjs.com/package/react-range */}
        </div>
      </FilterContainer>
    </div>
  );
};
export default Filter;
