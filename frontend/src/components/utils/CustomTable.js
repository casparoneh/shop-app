const CustomTable = ({ headings, itemsData, from,deleteItem }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse border border-slate-400">
        <thead className="bg-black text-white font-bold">
          <tr className="text-left">
            {headings?.map((item, index) => (
              <th key={index} className="py-4 pl-4">
                {item}
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {from == "user" &&
            itemsData?.map((item, index) => (
              <tr key={index}>
                <td className="py-6 pl-4">{item.name}</td>
                <td className="py-6 pl-4">{item.lastname}</td>
                <td className="py-6 pl-4">{item.email}</td>
                <td className="py-6 pl-4">{item.phoneNumber}</td>
                <td className="py-6 pl-4">{item.address}</td>

                <td colSpan="2" style={{ textAlign: "end" }}>
                  <div>
                    <span className="cursor-pointer px-8 rounded-lg py-4 text-center bg-black text-white m-4 inline-block">
                      Edit
                    </span>
                    <span onClick={() => deleteItem(item._id)} className="cursor-pointer px-8 rounded-lg py-4 text-center bg-black text-white m-4 inline-block">
                      Delete
                    </span>
                  </div>
                </td>
              </tr>
            ))}

{from == "products" &&
            itemsData?.map((item, index) => (
              <tr key={index}>
                <td className="py-6 pl-4">{item.title}</td>
                <td className="py-6 pl-4">{item.price}</td>
                <td className="py-6 pl-4">{item.color}</td>
                <td className="py-6 pl-4">{item.size}</td>
                <td className="py-6 pl-4">{item.storage}</td>

                <td colSpan="2" style={{ textAlign: "end" }}>
                  <div>
                    <span className="cursor-pointer px-8 rounded-lg py-4 text-center bg-black text-white m-4 inline-block">
                      Edit
                    </span>
                    <span onClick={() => deleteItem(item._id)} className="cursor-pointer px-8 rounded-lg py-4 text-center bg-black text-white m-4 inline-block">
                      Delete
                    </span>
                  </div>
                </td>
              </tr>
            ))}

          {from == "orders" &&
            itemsData?.map((item, index) => (
              <tr key={index}>
                <td className="py-6 pl-4">{item.order}</td>
                <td className="py-6 pl-4">{item.date}</td>
                <td className="py-6 pl-4">{item.status}</td>
                <td className="py-6 pl-4">{item.total}</td>
                <td className="px-8 rounded-lg py-4 text-center bg-black text-white w-1/2 flex items-center justify-center m-4">
                  VIEW
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
