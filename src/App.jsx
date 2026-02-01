import { useEffect, useState } from "react";
import "./App.css";
import IntroPage from "./components/IntroPage";
import ProsRoutes from "./components/ProsRoutes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const [PortofolioPage, SetPortofolioPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      SetPortofolioPage(true);
    }, 9000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {" "}
      {/* {PortofolioPage ? <ProsRoutes /> : <IntroPage />} */}
      <ProsRoutes /> 
      <ToastContainer />
    </>
  );
}

export default App;
