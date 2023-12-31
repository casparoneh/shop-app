"use client";

import AdminPanelContainer from "@/components/adminpanel/AdminPanelContainer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadgetUsers, deleteUserAndRefresh } from "@/redux/user/userSlice";
import CustomTable from "@/components/utils/CustomTable";

const UserAdminPanel = () => {
  const { userList } = useSelector((state) => state?.user);

  const dispatch = useDispatch();

  const getUsers = async () =>
    await axios
      .get(`${process.env.NEXT_PUBLIC_URL}/user/getUsers`)
      .then((res) => {
        console.log("12312312312312", res.data);
        dispatch(loadgetUsers(res.data));
      })
      .catch((err) => console.log(err));

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_URL}/user/delete/${id}`);

      dispatch(deleteUserAndRefresh(id));
    } catch (error) {
      console.log(error);
    }
  };

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
          deleteItem={deleteUser}
        />
      </AdminPanelContainer>
    </div>
  );
};
export default UserAdminPanel;
