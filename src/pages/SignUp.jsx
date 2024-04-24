import { Form, Formik } from "formik";
import React, { useState } from "react";
import { signUpSchema } from "../utils/validation";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";
import { GET_USERS } from "../graphql/queries";
import { Link } from "react-router-dom";
import { notify } from "../utils/Notify";
import JSXSignUp from "../components/modules/JSXSignUp";
import authorization from "../utils/authorization";

const SignUp = () => {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const { data } = useQuery(GET_USERS);

  const [createUser] = useMutation(CREATE_USER, {
    variables: {
      userName: form.userName,
      email: form.email,
      number: form.number.toString(),
      password: form.password,
    },
  });

  authorization();

  const signUpHandler = async (values) => {
    const { userName, email, number, password, confirmPassword } = values;

    if (userName && email && number && password && confirmPassword) {
      await setForm(values);

      const findUser = await data.clients.find((user) => user.email === email);
      if (!findUser) {
        createUser();
        localStorage.setItem("user", JSON.stringify(values));
        notify("success", "ثبت نام با موفقیت انجام شد!");
      } else {
        notify("error", "ایمیل وارد شده از قبل موجود میباشد!");
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
          userName: "",
          email: "",
          number: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={signUpSchema}
      >
        {({ errors, touched, values }) => (
          <Form className="p-2.5 xs:p-[22px] mx-2 w-full xs:w-[28rem] bg-box shadow-form rounded-xl form-inputs">
            <JSXSignUp errors={errors} touched={touched} values={values} />

            <button
              onClick={() => signUpHandler(values)}
              className="w-full h-16 rounded-[10px] bg-primary text-black text-[16px] font-semibold mt-4 shadow-buttonForm"
            >
              عضویت
            </button>

            <div className="centering justify-between mt-5 text-sm font-medium">
              <p>حساب کاربری دارید؟</p>
              <Link to="/login" className="text-primary">
                وارد شوید
              </Link>
            </div>

            <p className="centering text-sm font-medium mt-7">
              ورود یا عضویت شما به معنای پذیرش قوانین می باشد.
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
