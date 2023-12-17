"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";

const MenuContainer = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState("orders");

  const router = usePathname();

  useEffect(() => {
    const currentPath = router;

    setActiveMenu(currentPath.replace(/^\/myaccount\//, ""));
  }, [router.pathname]);

  return (
    <div className="container px-4 md:px-0 mx-auto flex flex-col md:flex-row justify-between w-full py-20">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        {/* activeMenu.toUpperCase() */}
        <h1 className="text-3xl font-black">
          {activeMenu == "changepassword"
            ? "CHANGE PASSWORD"
            : activeMenu == "accountdetails"
            ? "ACCOUNT DETAILS"
            : activeMenu?.toUpperCase()}
        </h1>
        <div className="flex flex-col gap-6 font-bold text-sm my-8">
          <Link href="/myaccount/orders">ORDERS</Link>
          <Link href="/myaccount/accountdetails">ACCOUNT DETAILS</Link>
          <Link href="/myaccount/wishlist">WISHLIST</Link>
          <Link href="/myaccount/changepassword">CHANGE PASSWORD</Link>
          <Link href="/myaccount/logout">LOGOUT</Link>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-2/3">{children}</div>
    </div>
  );
};

export default MenuContainer;
