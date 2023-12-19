"use client";

import Button from "@/components/utils/Button";
import TextInput from "@/components/utils/TextInput";
import axios from "axios";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const Register = () => {

  const [error, setError] = useState(false);


  const globalValues = {
    // name: "",
    // lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const RegisterSchema = Yup.object({
    // name: Yup.string().required("Name is required"),
    // lastname: Yup.string().required("Lastname is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(
        8,
        "Passwords must contain at least 8 characters, 1 uppercase letter, 1 digit and 1 special character"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const onSubmit = async (values, onSubmitProps) => {
    try {

      await axios.post(`${process.env.NEXT_PUBLIC_URL}/auth/signup`, {
        email: values.email,
        password: values.password,
      });

    
        onSubmitProps.resetForm();
    
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-lg mx-auto flex flex-col items-center  h-screen  justify-center px-4">
      <h1 className="font-black text-2xl">REGISTER</h1>
      <div className="w-full">
        <Formik
          initialValues={globalValues}
          validationSchema={RegisterSchema}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {(formik) => {
            return (
              <Form className="w-full">
                <TextInput name="email" placeholder="Email" />
                {/* <TextInput name="name" placeholder="Name" />
                <TextInput name="lastname" placeholder="Lastname" /> */}
                <TextInput
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                <TextInput
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  type="password"
                />
                <Button title="Register" type="submit" />
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
export default Register;
