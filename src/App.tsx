import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="h-screen w-screen bg-[#a7bcff] flex items-center justify-center">
      <Outlet />
    </main>
  );
}

export default App;
