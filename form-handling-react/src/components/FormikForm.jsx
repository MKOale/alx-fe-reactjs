import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be 6 chars minimum").required("Password is required"),
});

export default function FormikForm() {
  const handleSubmit = (values) => {
    console.log("Formik form submitted:", values);
    alert("User registered successfully (Formik)!");
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">User Registration (Formik + Yup)</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Field name="username" placeholder="Username" className="block w-full p-2 mb-2 border rounded" />
            <ErrorMessage name="username" component="div" className="text-red-500 text-sm mb-2" />

            <Field name="email" type="email" placeholder="Email" className="block w-full p-2 mb-2 border rounded" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mb-2" />

            <Field name="password" type="password" placeholder="Password" className="block w-full p-2 mb-2 border rounded" />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm mb-2" />

            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
