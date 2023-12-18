import AdminPanelContainer from "@/components/adminpanel/AdminPanelContainer";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const ProductsAdminPanel = () => {
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
      <AdminPanelContainer></AdminPanelContainer>
    </div>
  );
};
export default ProductsAdminPanel;
