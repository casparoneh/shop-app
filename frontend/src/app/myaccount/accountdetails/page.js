"use client";

import Button from "@/components/utils/Button";
import MenuContainer from "@/components/utils/MenuContainer";
import TextInput from "@/components/utils/TextInput";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const AccountDetails = () => {
  const globalValues = {
    name: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    postalCode: "",
    number: "",
    city: "",
  };

  const MessageValidation = Yup.object({
    name: Yup.string().required("Name is required"),
    lastname: Yup.string().required("Lastname is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    postalCode: Yup.number().required("Postal Code is required"),
    number: Yup.number().required("Number is required"),
    city: Yup.string().required("City is required"),
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
    <div>
      <MenuContainer>
        <Formik
          initialValues={globalValues}
          validationSchema={MessageValidation}
          onSubmit={onSubmit}
          enableReinitialize
        >
          <Form className="w-full">
            <div className="flex gap-4 w-full">
              <div className="w-1/2">
                <TextInput name="name" placeholder="Name" className="w-1/2" />
              </div>

              <div className="w-1/2">
                <TextInput name="lastname" placeholder="Last Name" className="w-1/2" />
              </div>
            </div>

            <div className="flex gap-4 w-full">
              <div className="w-1/2">
              <TextInput name="email" placeholder="Email" />
              </div>

              <div className="w-1/2">
                <TextInput name="phoneNumber" placeholder="Phone Number" className="w-1/2" />
              </div>
            </div>

            <div className="flex gap-4 w-full">
              <div className="w-1/2">
              <TextInput name="postalCode" placeholder="Postal Code" />
              </div>

              <div className="w-1/2">
                <TextInput name="number" placeholder="Number" className="w-1/2" />
              </div>
            </div>

            <TextInput name="city" placeholder="City" className="w-1/2" />

            <Button title="Send" type="submit" />
          </Form>
        </Formik>
      </MenuContainer>
    </div>
  );
};
export default AccountDetails;
