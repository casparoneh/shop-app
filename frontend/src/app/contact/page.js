"use client";

import Button from "@/components/utils/Button";
import TextInput from "@/components/utils/TextInput";
import Title from "@/components/utils/Title";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const globalValues = {
    name: "",
    email: "",
    message: "",
  };

  const MessageValidation = Yup.object({
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
  return (
    <div className="container mx-auto py-14">
      <div className="my-8">
        <Title title="CONTACT US" />
      </div>

      <div className="flex justify-between my-12">
        <div>
          <h1 className="font-bold text-xl">STORE IN EUROPE</h1>

          <p className="text-sm my-4 max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            repellendus dignissimos laboriosam.
          </p>

          <div>
            <p className="font-bold">saleapp@hotmail.com</p>
            <p className="font-bold">+123 1234 1233</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-xl">STORE IN USA</h1>

          <p className="text-sm my-4 max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            repellendus dignissimos laboriosam.
          </p>

          <div>
            <p className="font-bold">saleapp@hotmail.com</p>
            <p className="font-bold">+123 1234 1233</p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-2xl">GET IN TOUCH</h1>

        <Formik
          initialValues={globalValues}
          validationSchema={MessageValidation}
          onSubmit={onSubmit}
          enableReinitialize
        >
          <Form className="w-full">
            <TextInput name="email" placeholder="Email" />
            <TextInput name="name" placeholder="Name" />
            <TextInput name="message" placeholder="Message" textareaInput />

            <Button title="Send" type="submit" />
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default Contact;
