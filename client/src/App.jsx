import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router";
function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
