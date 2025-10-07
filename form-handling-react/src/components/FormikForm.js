import { useFormik } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Formik form submitted:", values);
      alert("User registered successfully (Formik)!");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">User Registration (Formik)</h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="block w-full p-2 mb-2 border rounded"
      />
      {formik.touched.username && formik.errors.username && (
        <p className="text-red-500 text-sm mb-2">{formik.errors.username}</p>
      )}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="block w-full p-2 mb-2 border rounded"
      />
      {formik.touched.email && formik.errors.email && (
        <p className="text-red-500 text-sm mb-2">{formik.errors.email}</p>
      )}

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="block w-full p-2 mb-2 border rounded"
      />
      {formik.touched.password && formik.errors.password && (
        <p className="text-red-500 text-sm mb-2">{formik.errors.password}</p>
      )}

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Register
      </button>
    </form>
  );
}
