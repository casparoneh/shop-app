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
import TextInput from "@/components/utils/TextInput";
import Button from "@/components/utils/Button";

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
    title: "",
    price: "",
    description: "",
    sizes: "",
    colors: "",
    numberOfOrders: "",
    whyChoose: "",
    weight: "",
    dimensions: "",
    size: "",
    color: "",
    storage: "",
  };

  const createProductValidation = Yup.object({
    title: Yup.string().required("Title is required"),
    price: Yup.number().required("Price is required"),
    description: Yup.string().required("Description is required"),
    sizes: Yup.string().required("Sizes is required"),
    colors: Yup.string().required("Colors is required"),
    whyChoose: Yup.string().required("Why Choose is required"),
    weight: Yup.string().required("Weight is required"),
    dimensions: Yup.string().required("Dimensions is required"),
    size: Yup.string().required("Size is required"),
    color: Yup.string().required("Color is required"),
    storage: Yup.string().required("Storage is required"),
  });

  const onSubmit = async (values, onSubmitProps) => {
    try {
      const productData = {
        title: values.title,
        price: values.price,
        description: values.description,
        colors: values.colors,
        whyChoose: values.whyChoose,
        weight: values.weight,
        dimensions: values.dimensions,
        size: values.size,
        color: values.color,
        storage: values.storage,
      };

      await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/product/create`,
        productData
      );

      getProducts();

      onSubmitProps.resetForm();
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="h-full">


      <AdminPanelContainer>
      <h1 className="text-3xl font-bold">CREATE PRODUCT</h1>

        <div className="my-8">
          <Formik
            initialValues={globalValues}
            validationSchema={createProductValidation}
            onSubmit={onSubmit}
            enableReinitialize
          >
            <Form className="w-full">

              
            <div className="flex gap-4 w-full">
              <div className="w-1/2">
              <TextInput name="title" placeholder="Title" />
              </div>

              <div className="w-1/2">
              <TextInput name="price" placeholder="Price" />
              </div>
            </div>

            <div className="flex gap-4 w-full">
              <div className="w-1/2">
              <TextInput name="description" placeholder="Description" />
              </div>

              <div className="w-1/2">
              <TextInput name="sizes" placeholder="Sizes" />
              </div>
            </div>

            <div className="flex gap-4 w-full">
              <div className="w-1/2">
              <TextInput name="colors" placeholder="Colors" />
              </div>

              <div className="w-1/2">
              <TextInput name="numberOfOrders" placeholder="Number of Orders" />
              </div>
            </div>

            <div className="flex gap-4 w-full">
              <div className="w-1/2">
              <TextInput name="whyChoose" placeholder="Why Choose" />
              </div>

              <div className="w-1/2">
              <TextInput name="weight" placeholder="Weight" />
              </div>
            </div>
          
            <div className="flex gap-4 w-full">
              <div className="w-1/2">
              <TextInput name="dimensions" placeholder="Dimensions" />
              </div>

              <div className="w-1/2">
              <TextInput name="size" placeholder="Size" />
              </div>
            </div>

            <div className="flex gap-4 w-full">
              <div className="w-1/2">
              <TextInput name="color" placeholder="Color" />
              </div>

              <div className="w-1/2">
              <TextInput name="storage" placeholder="Storage" />
              </div>
            </div>
          

              <Button title="Create" type="submit" />
            </Form>
          </Formik>
        </div>

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
