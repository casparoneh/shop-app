"use client";

import Button from "@/components/utils/Button";
import MenuContainer from "@/components/utils/MenuContainer";
import TextInput from "@/components/utils/TextInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const ChangePassword = () => {
  const globalValues = {
    oldPassword: "",
    newPassword: "",
  };

  const MessageValidation = Yup.object({
    oldPassword: Yup.string()
      .required("Old Password is required")
      .min(
        8,
        "Passwords must contain at least 8 characters, 1 uppercase letter, 1 digit and 1 special character"
      ),
    newPassword: Yup.string()
      .required("New Password is required")
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
    <div>
      <MenuContainer>
        <Formik
          initialValues={globalValues}
          validationSchema={MessageValidation}
          onSubmit={onSubmit}
          enableReinitialize
        >
          <Form className="w-full">
            <TextInput
              name="oldPassword"
              placeholder="Old password"
              type="password"
            />
            <TextInput
              name="newPassword"
              placeholder="New password"
              type="password"
            />

            <Button title="Send" type="submit" />
          </Form>
        </Formik>
      </MenuContainer>
    </div>
  );
};
export default ChangePassword;
