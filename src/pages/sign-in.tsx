import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import AdminLayout from "../components/adminRoutes/adminLayout";
import Head from "next/head";


const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(1, "Too Short!")
    .max(16, "Too Long!")
    .required("Required")
});

const LoginForm = () => {

  return (
    <Formik
      initialValues={{ password: "" }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { setSubmitting }) => {
         await signIn("credentials", {
          password: values.password,
          redirect: true,
          callbackUrl: "/admin"
        });

        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={"flex flex-col gap-5 container max-w-lg rounded-lg font-sans "}>

          <div className={"form-control w-full min-w-md max-w-md"}>
            <label className="label">
              <span className="label-text">Password</span>
              <ErrorMessage name="password" component="span" className="label-text-alt" />
            </label>
            <Field type="password" name="password" className={"input input-bordered w-full xl:input-lg"} />
          </div>

          <button className={"btn btn-primary xl:btn-lg max-w-md mt-5"} type="submit" disabled={isSubmitting}>
            Login
          </button>

        </Form>
      )}
    </Formik>
  );
};

const LoginPage = () => {
  return (
    <AdminLayout>
      <Head>
        <title>Admin Login</title>
      </Head>
      <main className={"min-h-[90vh] container mx-auto flex flex-col"}>
        <div className={"my-10"}>
          <h1 className={"font-display text-3xl lg:text-5xl font-bold text-white"}>Login</h1>
        </div>
        <LoginForm />
      </main>
    </AdminLayout>
  );
};

export default LoginPage;