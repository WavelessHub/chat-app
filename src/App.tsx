import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <main className="h-screen w-screen bg-[#a7bcff] flex items-center justify-center">
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/app">App</Link>

      <Outlet />
    </main>
  );
}

export default App;
