import { useEffect, useState } from "react";
import "./App.css";
import IntroPage from "./components/IntroPage";
import Welcome from "./components/Welcome";

function App() {
  const [PortofolioPage, SetPortofolioPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      SetPortofolioPage(true);
    }, 9000);

    return () => clearTimeout(timer);
  }, []);
  return <> <Welcome /> </>;
}

export default App;
