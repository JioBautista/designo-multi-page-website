import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import NavMain from "./components/NavMain";
import { Outlet, useLocation } from "react-router";
function App() {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <Outlet />
      {location.pathname === "/contact" ? null : <GetInTouch />}
      <Footer />
    </div>
  );
}

export default App;
