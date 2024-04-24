import React from "react";
import { Form, Formik } from "formik";
import { signUpSchema } from "../utils/validation";
import { Link, useNavigate } from "react-router-dom";
import { GET_USERS } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { notify } from "../utils/Notify";
import JSXLogin from "../components/modules/JSXLogin";

const Login = () => {
  const { data } = useQuery(GET_USERS);
  const navigate = useNavigate();

  const loginHandler = (values) => {
    if (values.email && values.password) {
      const findUser =
        data &&
        data.clients.find(
          (user) =>
            user.email === values.email && user.password === values.password
        );

      if (findUser) {
        setTimeout(() => navigate("/dashboard"), 1000);
        notify("success", "با موفقیت وارد شدید!");
      } else {
        notify("error", "آدرس ایمیل ناشناس!");
      }
    }
  };

  return (
    <div className="bg-box centering flex-col mt-16 text-text font-regular">
      <div className="mx-auto centering mb-8">
        <img className="size-10" src="/icon.png" alt="icon" />
        <h1 className="font-black mr-0.5">فیلم پد</h1>
      </div>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={signUpSchema}
      >
        {({ errors, touched, values }) => (
          <Form className="p-2.5 xs:p-[22px] mx-2 w-full xs:w-[28rem] bg-box shadow-form rounded-xl form-inputs">
            <JSXLogin errors={errors} touched={touched} values={values} />

            <button
              onClick={() => loginHandler(values)}
              className="w-full h-16 rounded-[10px] bg-primary text-black text-[16px] font-semibold mt-4 shadow-buttonForm"
            >
              ورود
            </button>

            <Link
              to="/register"
              className="h-16 rounded-[10px] centering w-full text-[16px] font-semibold mt-7 bg-[#eec93221] text-primary"
            >
              عضویت در سایت
            </Link>

            <p className="centering text-sm font-medium mt-7">
              ورود یا عضویت شما به معنای پذیرش قوانین می باشد.
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
