import { LuLayoutDashboard, LuBookmark, LuPencil } from "react-icons/lu";
import { FaRegBell, FaRegComments } from "react-icons/fa";
import { FiFilm, FiLogOut } from "react-icons/fi";

const pagesDashboard = [
  { id: 1, name: "داشبورد", icon: <LuLayoutDashboard /> },
  { id: 2, name: "لیست تماشا", icon: <LuBookmark /> },
  { id: 3, name: "درخواست فیلم و سریال", icon: <FiFilm /> },
  { id: 4, name: "اعلانات", icon: <FaRegBell /> },
  { id: 6, name: "دیدگاه های شما", icon: <FaRegComments /> },
  { id: 7, name: "خروج از حساب کاربری", icon: <FiLogOut /> },
];

export default pagesDashboard;
