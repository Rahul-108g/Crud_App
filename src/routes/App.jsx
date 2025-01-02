import { Outlet, useFetcher } from "react-router-dom";
import "./App.css";
import Navbar from "../Component/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
