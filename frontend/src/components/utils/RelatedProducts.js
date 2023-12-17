import SingleItem from "./SingleItem";

const RelatedProducts = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">RELATED PRODUCTS</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  w-full my-8">
        <SingleItem img={"./person.jpg"} />
        <SingleItem img={"./person.jpg"} />
        <SingleItem img={"./person.jpg"} />
        <SingleItem img={"./person.jpg"} />
      </div>
    </div>
  );
};
export default RelatedProducts;
