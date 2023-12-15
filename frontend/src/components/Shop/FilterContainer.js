import { MdKeyboardArrowUp } from "react-icons/md";

const FilterContainer = ({ children, title }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">{title}</h1>
        <MdKeyboardArrowUp />
      </div>
      {children}
    </div>
  );
};
export default FilterContainer;
