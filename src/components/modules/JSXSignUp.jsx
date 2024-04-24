import React from "react";
import borderInputsAuth from "../../helper/borderInputsAuth";
import { Field } from "formik";

const JSXSignUp = ({ errors, touched, values }) => {
  return (
    <>
      <Field
        type="text"
        placeholder="نام کاربری"
        value={values.userName}
        name="userName"
        className={`${borderInputsAuth(errors, touched, "userName")}`}
      />
      {errors.userName && <span>{errors.userName}</span>}

      <Field
        type="email"
        placeholder="ایمیل شما"
        value={values.email}
        name="email"
        className={`${borderInputsAuth(errors, touched, "email")}`}
      />
      {errors.email && touched.email && <span>{errors.email}</span>}

      <Field
        type="number"
        placeholder="شماره موبایل بدون صفر"
        value={values.number}
        name="number"
        className={`${borderInputsAuth(errors, touched, "number")}`}
      />
      {errors.number && touched.number && <span>{errors.number}</span>}

      <Field
        value={values.password}
        name="password"
        type="password"
        placeholder="رمز عبور"
        className={`${borderInputsAuth(errors, touched, "password")}`}
      />
      {errors.password && touched.password && <span>{errors.password}</span>}

      <Field
        value={values.confirmPassword}
        name="confirmPassword"
        type="password"
        placeholder="تایید رمز عبور"
        className={`${borderInputsAuth(errors, touched, "confirmPassword")}`}
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <span>{errors.confirmPassword}</span>
      )}
    </>
  );
};

export default JSXSignUp;
