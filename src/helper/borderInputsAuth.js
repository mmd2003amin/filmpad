const borderInputsAuth = (errors, touched, field) => {
  return errors[field] && touched[field]
    ? "border-red-600"
    : !errors[field] && touched[field]
    ? "border-green-600"
    : "border-box2";
};

export default borderInputsAuth;
