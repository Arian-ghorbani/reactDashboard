import LastTable from "../../components/QuickViewr/LastTable";
import UserCard from "./components/UserCard";
import users from "../../data/users";

function LastUsers() {
  const lastUsers = users.slice(-5);
  return (
    <LastTable title="آخرین کاربران" itemCount={users.length} linkTo="/users">
      {lastUsers.map((user) => (
        <UserCard user={user} />
      ))}
    </LastTable>
  );
}

export default LastUsers;
