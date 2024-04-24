const authorization = () => {
  const user = localStorage.getItem("user");
  const path = location.pathname;

  if (
    (user && path.includes("register")) ||
    (user && path.includes("login")) ||
    (!user && path.includes("dashboard"))
  ) {
    location.assign("/");
  }
};

export default authorization;
