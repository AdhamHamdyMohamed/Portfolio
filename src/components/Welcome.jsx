import React from "react";
import Nav from "./Nav";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

export default function Welcome() {
  return (
    <>
      <div className="bg-zinc-200 ">
        <Nav />
        <SectionOne />
        <SectionTwo />
      </div>
    </>
  );
}
