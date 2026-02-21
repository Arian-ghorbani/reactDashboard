import { RxDashboard } from "react-icons/rx";
import { RiShoppingCartLine } from "react-icons/ri";
import { HiOutlineUsers } from "react-icons/hi";
import { LuTicket } from "react-icons/lu";
import { FaRegComments } from "react-icons/fa";

const sidebarData = [
  { id: 1, title: "داشبورد", icon: RxDashboard, link: "/" },
  { id: 2, title: "محصولات", icon: RiShoppingCartLine, link: "products" },
  { id: 3, title: "کاربران", icon: HiOutlineUsers, link: "users" },
  { id: 4, title: "پشتیبانی", icon: LuTicket, link: "tickets" },
  { id: 5, title: "نظرات", icon: FaRegComments, link: "comments" },
];

export default sidebarData;
