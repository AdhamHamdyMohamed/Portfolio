import "./App.css";
import PortofolioPage from "./components/PortofolioPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      {" "}
      <PortofolioPage />
      <ToastContainer />
    </>
  );
}

export default App;
