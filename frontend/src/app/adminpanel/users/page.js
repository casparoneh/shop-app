"use client";

import AdminPanelContainer from "@/components/adminpanel/AdminPanelContainer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadgetUsers } from "@/redux/user/userSlice";
import CustomTable from "@/components/utils/CustomTable";

const UserAdminPanel = () => {
  // const [users, setUsers] = useState([]);

  const { userList } = useSelector((state) => state?.user);

  const dispatch = useDispatch();

  console.log("A PO A", userList);

  const getUsers = async () =>
    await axios
      .get(`${process.env.NEXT_PUBLIC_URL}/user/getUsers`)
      .then((res) => {
        console.log("12312312312312", res.data);
        dispatch(loadgetUsers(res.data));
      })
      .catch((err) => console.log(err));

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="h-full">
      <AdminPanelContainer>
        <CustomTable
          itemsData={userList}
          headings={["Name", "Lastname", "Email", "Phone Number", "Adress"]}
          from="user"
        />
      </AdminPanelContainer>
    </div>
  );
};
export default UserAdminPanel;
