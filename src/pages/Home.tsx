import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-[#a7bcff] flex items-center justify-center">
      <div className="overflow-hidden rounded-2xl h-[80%] w-[65%] flex">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
