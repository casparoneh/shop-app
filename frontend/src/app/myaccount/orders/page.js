import CustomTable from "@/components/utils/CustomTable";
import MenuContainer from "@/components/utils/MenuContainer";

const Orders = () => {
  const headings = ["ORDER", "DATE", "STATUS", "TOTAL", "ACTIONS"];

  const itemsData = [
    {
      id: 1,
      order: "#2416",
      date: "October 1, 2023",
      status: "On Hold",
      total: "$1234,65 for 3 items",
    },
    {
      id: 2,
      result: "October 1, 2023",
      order: "#2416",
      date: "October 1, 2023",
      status: "On Hold",
      total: "$1234,65 for 3 items",
    },
    {
      id: 3,
      result: "On hold",
      order: "#2416",
      date: "October 1, 2023",
      status: "On Hold",
      total: "$1234,65 for 3 items",
    },
    {
      id: 4,
      result: "$1,200.65 for 3 items",
      order: "#2416",
      date: "October 1, 2023",
      status: "On Hold",
      total: "$1234,65 for 3 items",
    },
  ];

  return (
    <div>
      <MenuContainer>
        <CustomTable headings={headings} itemsData={itemsData} from="orders" />
      </MenuContainer>
    </div>
  );
};
export default Orders;
