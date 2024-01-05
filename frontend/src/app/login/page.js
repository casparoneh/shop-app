"use client";

import Button from "@/components/utils/Button";
import TextInput from "@/components/utils/TextInput";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { signInSuccess,addToken } from "@/redux/user/userSlice";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const router = useRouter();

  const globalValues = {
    email: "lorik@hotmail.com",
    password: "Qwerty1244!",
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
      await axios
        .post(`${process.env.NEXT_PUBLIC_URL}/auth/signin`, {
          email: values.email,
          password: values.password,
        })
        .then((res) => {
          onSubmitProps.resetForm();
          dispatch(signInSuccess(res.data.userInfo));
          router.push("/contact");
          setError("");
          const { token } = res.data;

          localStorage.setItem('token', token);
          dispatch(addToken(token));

        });
    } catch (error) {
      console.log("Error:", error);
      setError(error?.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="px-4 max-w-lg mx-auto flex flex-col items-center   justify-center h-full py-20">
      <h1 className="font-black text-2xl">LOGIN</h1>
      <div className="w-full">
        <Formik
          initialValues={globalValues}
          validationSchema={LoginSchema}
          onSubmit={onSubmit}
          enableReinitialize
        >
          <Form className="w-full">
            <TextInput name="email" placeholder="Email" />
            <TextInput name="password" placeholder="Password" type="password" />
            <Button title="Login" type="submit" />
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default Login;
