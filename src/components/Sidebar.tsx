import Navbar from "./Navbar";
import Search from "./Search";
import UserChats from "./UserChats";

const Sidebar = () => {
  return (
    <div className="w-[320px] bg-[#3e3c61]">
      <Navbar />
      <Search />
      <UserChats />
    </div>
  );
};

export default Sidebar;
