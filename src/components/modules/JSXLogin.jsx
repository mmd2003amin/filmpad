import React from "react";
import borderInputsAuth from "../../helper/borderInputsAuth";
import { Field } from "formik";

const JSXLogin = ({ errors, touched, values }) => {
  return (
    <>
      <Field
        type="email"
        placeholder="ایمیل"
        value={values.email}
        name="email"
        className={`${borderInputsAuth(errors, touched, "email")}`}
      />
      {errors.email && <span>{errors.email}</span>}

      <Field
        value={values.password}
        name="password"
        type="password"
        placeholder="رمز عبور"
        className={`${borderInputsAuth(errors, touched, "password")}`}
      />
      {errors.password && touched.password && <span>{errors.password}</span>}
    </>
  );
};

export default JSXLogin;
