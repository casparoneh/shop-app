"use client";

import MenuContainer from "@/components/utils/MenuContainer";
import SingleItem from "@/components/utils/SingleItem";

const WishList = () => {
  return (
    <div>
      <MenuContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-12 justify-items-end w-full ">
          <SingleItem img={"../../person.jpg"} fromFavorite />
          <SingleItem img={"../../person.jpg"} fromFavorite />
          <SingleItem img={"../../person.jpg"} fromFavorite />
          <SingleItem img={"../../person.jpg"} fromFavorite />
          <SingleItem img={"../../person.jpg"} fromFavorite />
          <SingleItem img={"../../person.jpg"} fromFavorite />
          <SingleItem img={"../../person.jpg"} fromFavorite />
          <SingleItem img={"../../person.jpg"} fromFavorite />
        </div>
      </MenuContainer>
    </div>
  );
};
export default WishList;
