import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form data:", values);
    alert("Form submitted successfully!");
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-gray-100 rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-center">Formik Registration Form</h2>
      <Formik
        initialValues={{ name: "", email: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium">Name:</label>
              <Field
                type="text"
                name="name"
                id="name"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium">Email:</label>
              <Field
                type="email"
                name="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
