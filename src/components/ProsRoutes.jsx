import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Footer from "./Footer";

export default function Welcome() {
  return (
    <>
      <div className="bg-zinc-300 min-h-screen p-2">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
