"use client";

import Button from "@/components/utils/Button";
import MenuContainer from "@/components/utils/MenuContainer";
import TextInput from "@/components/utils/TextInput";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { updateUserSuccess } from "../../../redux/user/userSlice.js";
import { useState } from "react";
import axios from "axios";

const AccountDetails = () => {
  const { currentUser,token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log("TOKEN",token);

  console.log("currentUser", currentUser);

  const globalValues = {
    name: currentUser?.name || "",
    lastname: currentUser?.lastname || "",
    email: currentUser?.email || "",
    phoneNumber: currentUser?.phoneNumber || "",
    postalCode: currentUser?.postalCode || "",
    number: currentUser?.number || "",
    city: currentUser?.city || "",
  };
  const [formValues, setFormValues] = useState(globalValues);

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

  console.log("currentUser", currentUser);

  const onSubmit = async (values, onSubmitProps) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/user/update/${currentUser._id}`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      // Handle success, if needed
      console.log("RES", response);
      dispatch(updateUserSuccess(response.data));
    } catch (error) {
      console.error("Error:", error);
      // Handle error, if needed
    }
  };
  

  console.log("formValues", formValues);

  return (
    <div>
      <MenuContainer>
        <Formik
          initialValues={globalValues}
          validationSchema={MessageValidation}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {(formik) => (
            <Form className="w-full">
              <div className="flex gap-4 w-full">
                <div className="w-1/2">
                  <TextInput name="name" placeholder="Name" className="w-1/2" />
                </div>

                <div className="w-1/2">
                  <TextInput
                    name="lastname"
                    placeholder="Last Name"
                    className="w-1/2"
                  />
                </div>
              </div>

              <div className="flex gap-4 w-full">
                <div className="w-1/2">
                  <TextInput name="email" placeholder="Email" />
                </div>

                <div className="w-1/2">
                  <TextInput
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="w-1/2"
                  />
                </div>
              </div>

              <div className="flex gap-4 w-full">
                <div className="w-1/2">
                  <TextInput name="postalCode" placeholder="Postal Code" />
                </div>

                <div className="w-1/2">
                  <TextInput
                    name="number"
                    placeholder="Number"
                    className="w-1/2"
                  />
                </div>
              </div>

              <TextInput name="city" placeholder="City" className="w-1/2" />

              <Button title="Send" type="submit" />
            </Form>
          )}
        </Formik>
      </MenuContainer>
    </div>
  );
};
export default AccountDetails;
