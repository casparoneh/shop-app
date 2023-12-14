"use client";

import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const globalValues = {
    email: "",
    password: "",
  };

  const LoginSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(
        8,
        "Passwords must contain at least 8 characters, 1 uppercase letter, 1 digit and 1 special character"
      ),
  });

  const onSubmit = async (values, onSubmitProps) => {
    try {
      console.log("asd");
      onSubmitProps.resetForm();
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto h-screen  flex justify-center  items-center ">
      <Formik
        initialValues={globalValues}
        validationSchema={LoginSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => {
          return (
            <Form className="w-full">
              <TextInput name="email" placeholder="Email" />
              <TextInput name="password" placeholder="Password" />
              <Button title="Login" type="submit" />
             
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default Login;
