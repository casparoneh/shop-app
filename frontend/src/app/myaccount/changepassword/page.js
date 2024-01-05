"use client";

import Button from "@/components/utils/Button";
import MenuContainer from "@/components/utils/MenuContainer";
import TextInput from "@/components/utils/TextInput";
import { Formik, Form } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";

const ChangePassword = () => {

  const { currentUser,token } = useSelector((state) => state.user);


  const globalValues = {
    oldPassword: "",
    newPassword: "",
  };

  const ChangePasswordValidation = Yup.object({
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

 const onSubmit = async (values, { resetForm , setFieldError  }) => {
    try {
      // Make a request to your backend to update the password
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/user/change-password/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          oldPassword: values.oldPassword,
          newPassword: values.newPassword,
        }),
      });

      if (response.ok) {
        // Password changed successfully
        console.log("Password changed successfully");
        resetForm(); // Reset the form
      } else {
        // Handle error, show error message, etc.
        console.error("Error changing password:", response.statusText);

        // Check if the error is due to incorrect old password
        const responseData = await response.json();
        if (responseData.error === "Old password is incorrect") {
          // Set an error for the oldPassword field
          setFieldError("oldPassword", responseData.error);
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <MenuContainer>
        <Formik
          initialValues={globalValues}
          validationSchema={ChangePasswordValidation}
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
