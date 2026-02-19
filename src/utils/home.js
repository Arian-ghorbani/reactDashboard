import { BsFillTicketFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { RiShoppingCartFill } from "react-icons/ri";

const generateSummaries = ({
  productsLength = 0,
  usersLength = 0,
  ticketsLength = 0,
  adminsLength = 0,
}) => {
  return [
    {
      id: 1,
      title: "تعداد محصولات",
      value: productsLength,
      Icon: RiShoppingCartFill,
    },
    { id: 2, title: "تعداد کاربران", value: usersLength, Icon: HiUsers },
    {
      id: 3,
      title: "تعداد تیکت‌ها",
      value: ticketsLength,
      Icon: BsFillTicketFill,
    },
    { id: 4, title: "تعداد مدیران", value: adminsLength, Icon: FaUserTie },
  ];
};

const generateChart = ({
  productsLength = 0,
  usersLength = 0,
  ticketsLength = 0,
  adminsLength = 0,
}) => {
  return [
    { name: "تعداد محصولات", value: productsLength },
    { name: "تعداد کاربران", value: usersLength },
    { name: "تعداد تیکت‌ها", value: ticketsLength },
    { name: "تعداد مدیران", value: adminsLength },
  ];
};

export { generateSummaries, generateChart };
