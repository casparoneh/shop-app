import { Form, Formik } from "formik";
import SingleComment from "./SingleComment";
import TextInput from "./TextInput";
import Button from "./Button";
import * as Yup from "yup";
import { useState } from "react";

const Reviews = () => {
  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedStar, setSelectedStar] = useState(0);

  const handleStarHover = (star) => {
    setHoveredStar(star);
  };

  const handleStarClick = (star) => {
    setSelectedStar(star);
  };

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
    <div>
      <SingleComment />
      <SingleComment />
      <SingleComment />

      <div>
        <h1 className="font-semibold text-xl">Leave a message</h1>

        <div className="my-4">
          <span>Your rating: </span>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`cursor-pointer text-3xl ${
                  star <= (hoveredStar || selectedStar)
                    ? "text-yellow-500"
                    : "text-gray-300"
                }`}
                onMouseEnter={() => handleStarHover(star)}
                onMouseLeave={() => handleStarHover(0)}
                onClick={() => handleStarClick(star)}
              >
                &#9733;
              </span>
            ))}
            <p>Your review is : {selectedStar} of 5</p>
          </div>
        </div>

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
export default Reviews;
