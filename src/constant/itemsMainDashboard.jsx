import { BsTicket } from "react-icons/bs";
import { IoIosList } from "react-icons/io";
import { FaRegComments } from "react-icons/fa";

const itemsMainDashboard = [
  {
    id: 1,
    name: "تیکت های منتظر پاسخ",
    icon: <BsTicket className="bg-ticket1 size-[50px] rounded-[10px] p-3" />,
  },
  {
    id: 2,
    name: "تیکت های پاسخ داده شده",
    icon: <BsTicket className="bg-ticket2 size-[50px] rounded-[10px] p-3" />,
  },
  {
    id: 3,
    name: "لیست تماشا",
    icon: <IoIosList className="bg-list size-[50px] rounded-[10px] p-3" />,
  },
  {
    id: 4,
    name: "دیدگاه های شما",
    icon: (
      <FaRegComments className="bg-ticket1 size-[50px] rounded-[10px] p-3" />
    ),
  },
];

export default itemsMainDashboard;
