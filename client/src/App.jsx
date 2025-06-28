import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import { Outlet, useLocation } from "react-router";
import "./styles/app.css";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="app">
        <Navbar />
        <Outlet />
      </div>
      {location.pathname === "/contact" ? null : <GetInTouch />}
      <Footer />
    </>
  );
}

export default App;
