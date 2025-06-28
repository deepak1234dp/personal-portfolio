import React from "react";
// Form handling and validation
import { useFormik } from "formik";
import * as Yup from "yup";

// Reusable button component
import { Button } from "../Components/Button";
import { InputField } from "../Components/InputField";

// Contact form section
export const ContactForm = () => {
  /*
  Initialize Formik with:
    - initialValues: default form values
    - validationSchema: Yup schema for validation rules
    - onSubmit: function called on successful form submission
*/
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      /*
    Handle form submission:
      - Show alert with form data
      - Reset the form fields
  */
      alert(`Message sent!\n Name: ${values.name}\n Email:${values.email}\n Message:${values.message}`);
      resetForm();
    },
  });
  return (
    <section className="py-20 px-4 bg-white" id="contact">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-4xl font-bold mb-8 text-center my-21">Contact Me</h3>
        {/* Form element: onSubmit calls formik.handleSubmit */}
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            {/*
              Name input field:
                - bound to formik state
                - triggers validation on change and blur
            */}
            <InputField
              className="w-full p-3 border rounded"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.name}
              error={formik.errors.name}
            />
            {/*
              Display validation error if:
                - the field has been touched
                - and there is an error message
            */}
          </div>
          <div>
            {/* Email input field */}
            <InputField
              className="w-full p-3 border rounded"
              type="email"
              name="email"
              placeholder="Your Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.email}
              error={formik.errors.email}
            />
          </div>
          <div>
            {/* Message textarea field */}
            <InputField
              textarea
              className="w-full p-3 border rounded"
              rows="5"
              name="message"
              placeholder="Your Message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.message}
              error={formik.errors.message}
            />

          </div>

          {/* Submit button using reusable Button component */}
          <Button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 cursor-pointer"
          >
            Send
          </Button>
        </form>
      </div>
    </section>
  );
};
