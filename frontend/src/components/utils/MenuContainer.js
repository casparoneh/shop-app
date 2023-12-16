import Link from "next/link";

const MenuContainer = ({children}) => {

return (
    <div className="container mx-auto flex justify-between">
      {/* LEFT SIDE */}
      <div class>
        <h1 className="text-3xl font-black">MENU CONTAINER</h1>
        <div className="flex flex-col gap-6 font-bold text-sm my-8">
            <Link href="/myaccount/orders">ORDERS</Link>
            <Link href="/myaccount/address">ADDRESS</Link>
            <Link href="/myaccount/accountdetails">ACCOUNT DETAILS</Link>
            <Link href="/myaccount/wishlist">WISHLIST</Link>
            <Link href="/myaccount/changepassword">CHANGE PASSWORD</Link>
            <Link href="/myaccount/logout">LOGOUT</Link>
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div>{children}</div>
    </div>
  );
};
export default MenuContainer;
