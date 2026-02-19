import "./Topbar.css";
import Logo from "./components/Logo/Logo";
import Bell from "./components/Bell/Bell";
import Profile from "./components/Profile/Profile";
import SearchBox from "./components/SearchBox/SearchBox";
import Separator from "./components/Separator/Separator";

function Topbar() {
  return (
    <nav className="navbar  justify-between">
      <section className="right-section gap-x-8">
        <Logo />
        <SearchBox />
      </section>

      <section className="left-section gap-x-5">
        <Bell />
        <Separator />
        <Profile />
      </section>
    </nav>
  );
}

export default Topbar;
