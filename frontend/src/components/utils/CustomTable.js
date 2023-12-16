const CustomTable = ({ headings, itemsData }) => {
  return (
    <div className=" w-full">
      <table class=" w-full border-collapse border border-slate-400">
        <thead className="bg-black text-white font-bold">
          <tr className="text-left">
            {headings.map((item, index) => {
              return (
                <th key={index} class="  py-4 pl-4">
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="">
          <>
            {itemsData.map((item, index) => {
              return (
                <tr>
                  <td className="py-6 pl-4">{item.order}</td>
                  <td className="py-6 pl-4">{item.date}</td>
                  <td className="py-6 pl-4">{item.status}</td>
                  <td className="py-6 pl-4">{item.total}</td>
                  <td className="px-8 rounded-lg py-4 text-center bg-black text-white w-1/2 flex items-center justify-center m-4">
                    VIEW
                  </td>
                </tr>
              );
            })}
          </>
        </tbody>
      </table>
    </div>
  );
};
export default CustomTable;
