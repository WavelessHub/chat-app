import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <div className="overflow-hidden rounded-2xl h-[80%] w-[65%] flex">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Home;
