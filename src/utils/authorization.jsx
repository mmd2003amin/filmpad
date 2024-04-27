import { useNavigate } from "react-router-dom";

const authorization = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const path = location.pathname;

  if (
    (user && path.includes("register")) ||
    (user && path.includes("login")) ||
    (!user && path.includes("dashboard"))
  ) {
    navigate("/")
  }
};

export default authorization;
