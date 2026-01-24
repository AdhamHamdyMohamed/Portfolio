import React from "react";
import Nav from "./Nav";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import Footer from "./Footer";

export default function Welcome() {
  return (
    <>
      <div className="bg-zinc-100 min-h-screen">
        <Nav />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <Footer/>
      </div>
    </>
  );
}
