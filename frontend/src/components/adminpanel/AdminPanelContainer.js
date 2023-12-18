import Link from "next/link";

const AdminPanelContainer = ({ children }) => {
  return (
    <div className="md:px-0 flex flex-col md:flex-row justify-between w-full h-full">
      <div className="flex-none md:flex-auto md:w-1/5 mb-4 md:mb-0 h-full">
        <div className="flex flex-col gap-6 font-bold text-lg bg-gray-700  text-white p-8 h-full">
          <Link href="/adminpanel/users">Users</Link>
          <Link href="/adminpanel/products">Products</Link>
        </div>
      </div>

      <div className="flex-auto md:w-4/5 h-full p-8">{children}</div>
    </div>
  );
};

export default AdminPanelContainer;
