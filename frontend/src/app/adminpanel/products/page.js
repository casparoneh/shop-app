"use client";
import AdminPanelContainer from "@/components/adminpanel/AdminPanelContainer";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {
  loadgetProducts,
  deleteProductAndRefresh,
} from "@/redux/product/productSlice";
import CustomTable from "@/components/utils/CustomTable";
import { useEffect } from "react";
import axios from "axios";

const ProductsAdminPanel = () => {
  const { product } = useSelector((state) => state?.product);

  const dispatch = useDispatch();

  const getProducts = async () =>
    await axios
      .get(`${process.env.NEXT_PUBLIC_URL}/product/getProducts`)
      .then((res) => {
        console.log("12312312312312", res.data);
        dispatch(loadgetProducts(res.data));
      })
      .catch((err) => console.log(err));

  useEffect(() => {
    getProducts();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_URL}/product/delete/${id}`);

      dispatch(deleteProductAndRefresh(id));
    } catch (error) {
      console.log(error);
    }
  };

  const globalValues = {
    name: "",
    email: "",
    message: "",
  };

  const createProductValidation = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const onSubmit = async (values, onSubmitProps) => {
    try {
      console.log("asd");
      onSubmitProps.resetForm();
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // <Formik
  //   initialValues={globalValues}
  //   validationSchema={createProductValidation}
  //   onSubmit={onSubmit}
  //   enableReinitialize
  // >
  //   {/* <Form className="w-full">

  //   </Form> */}
  // </Formik>;

  return (
    <div className="h-full">
      <AdminPanelContainer>
        <CustomTable
          itemsData={product}
          headings={["Title", "Price", "Color", "Size", "Storage"]}
          from="products"
          deleteItem={deleteProduct}
        />
      </AdminPanelContainer>
    </div>
  );
};
export default ProductsAdminPanel;
