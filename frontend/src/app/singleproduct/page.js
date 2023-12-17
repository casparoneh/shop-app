"use client";

import Button from "@/components/utils/Button";
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import Reviews from "@/components/utils/Reviews";

const SingleProduct = () => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [activeData, setActiveData] = useState("description");

  const toggleColor = (colorId) => {
    if (selectedColors.includes(colorId)) {
      setSelectedColors(selectedColors.filter((id) => id !== colorId));
    } else {
      setSelectedColors([...selectedColors, colorId]);
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

  return (
    <div className="container mx-auto my-4">
      {/* TOP PART */}

      <div className="flex">
        {/* LEFT */}
        <div className="flex w-1/2">
          {/* images */}
          <div className="flex flex-col justify-between">
            <img src="./person.jpg" alt="" className="w-24 h-24" />
            <img src="./person.jpg" alt="" className="w-24 h-24" />
            <img src="./person.jpg" alt="" className="w-24 h-24" />
            <img src="./person.jpg" alt="" className="w-24 h-24" />
          </div>
          {/* single image */}
          <div className="w-full ml-2">
            <img src="./person1.jpg" alt="" className="w-full h-full" />
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-1/2 ml-4">
          <h1 className="font-bold text-2xl">
            Lightweight Puffer Jacket With a Hood
          </h1>
          <div className="flex my-4">
            <div className="flex gap-3">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </div>
            <span className="text-sm text-gray-600 ml-8">8k+ reviews</span>
          </div>
          <h1 className="text-2xl font-semibold my-4">$449</h1>

          <p className="text-sm text-gray-600">
            Phasellus sed volutpat orci. Fusce eget lore mauris vehicula
            elementum gravida nec dui. Aenean aliquam varius ipsum, non
            ultricies tellus sodales eu. Donec dignissim viverra nunc, ut
            aliquet magna posuere eget.
          </p>

          {/* SIZES */}
          <div className="my-4 flex items-center">
            <span className="text-xl font-semibold">SIZES</span>
            <div className="ml-4 flex gap-4">
              <div className="px-3 py-0.5 border border-gray-300 inline-block">
                XS
              </div>
              <div className="px-3 py-0.5 border border-gray-300 inline-block">
                S
              </div>
              <div className="px-3 py-0.5 border border-gray-300 inline-block">
                L
              </div>
              <div className="px-3 py-0.5 border border-gray-300 inline-block">
                L
              </div>
              <div className="px-3 py-0.5 border border-gray-300 inline-block">
                XL
              </div>
            </div>
          </div>

          {/* COLORS */}

          <div className="flex items-center my-8">
            <span className="text-xl font-semibold">COLOR</span>

            <div className="flex gap-4 items-center ml-4">
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
          </div>

          {/* NUMER OF PRODUCTS*/}

          <div className="flex items-center gap-4 ">
            <div class="relative flex items-center">
              <span class="absolute left-2 text-gray-500">-</span>
              <input
                type="number"
                class="border border-gray-300 p-2  pr-6 text-center custom-input w-28 focus:outline-none"
              />
              <span class="absolute right-2 text-gray-500">+</span>
            </div>
            <div className="w-1/4">
              <Button title="ADD TO CART" />
            </div>
          </div>

          {/* ADD TO WISH LIST */}

          <div className="flex items-center mt-8">
            <div className="flex gap-4 items-center hover:border-b hover:border-black">
              <FaRegHeart size={24} />
              <span className="font-semibold">ADD TO WISHLIST</span>
            </div>

            <div className="flex gap-4 items-center ml-8">
              <CiShare2 size={24} />
              <span className="font-semibold">SHARE</span>
            </div>
          </div>
        </div>
      </div>

      {/* DESCRIPTION DATA */}

      <div className="my-20 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-6">
          <span
            onClick={() => setActiveData("description")}
            className="text-xl font-semibold cursor-pointer"
          >
            DESCRIPTION
          </span>
          <span
            onClick={() => setActiveData("additionalinformation")}
            className="text-xl font-semibold cursor-pointer"
          >
            ADDITIONAL INFORMATION
          </span>
          <span
            onClick={() => setActiveData("reviews")}
            className="text-xl font-semibold cursor-pointer"
          >
            REVIEWS
          </span>
        </div>

        <div className="mt-8">
          {/*DESCRIPTION  */}
          {activeData == "description" && (
            <>
              <h1 className="text-lg font-semibold">
                Sed do eiusmod tempor incididunt ut labore
              </h1>
              <p className="text-sm text-gray-600 my-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>

              <h1 className="text-lg font-semibold my-4">
                Sed do eiusmod tempor incididunt ut labore
              </h1>

              <ul className="list-disc pl-4 my-4">
                <li>Creat by cotton fibric with soft and smooth</li>
                <li>Simple, Configurable (e.g. size, color, etc.), bundled</li>
                <li>Downloadable/Digital Products, Virtual Products</li>
              </ul>
            </>
          )}

          {activeData == "additionalinformation" && (
            <div className="flex flex-col gap-6">
              <div className="w-full  flex">
                <span className="text-sm font-semibold w-1/6">Weight</span>
                <span className="text-gray-600 text-sm w-5/6">1.25 kg</span>
              </div>
              <div className="w-full  flex">
                <span className="text-sm font-semibold w-1/6">Dimensions</span>
                <span className="text-gray-600 text-sm w-5/6">
                  90 x 60 x 90 cm
                </span>
              </div>
              <div className="w-full  flex">
                <span className="text-sm font-semibold w-1/6">Size</span>
                <span className="text-gray-600 text-sm w-5/6">
                  XS, S, M, L, XL
                </span>
              </div>
              <div className="w-full  flex">
                <span className="text-sm font-semibold w-1/6">Color</span>
                <span className="text-gray-600 text-sm w-5/6">
                  {" "}
                  Black, Orange, White
                </span>
              </div>
              <div className="w-full  flex">
                <span className="text-sm font-semibold w-1/6">Storage</span>
                <span className="text-gray-600 text-sm w-5/6">
                  Relaxed fit shirt-style dress with a rugged
                </span>
              </div>
            </div>
          )}

          {activeData == "reviews" && <><Reviews /> </>}
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
