import React from "react";
import Nav from "./Nav";
import SectionOne from "./SectionOne";

export default function Welcome() {
  return (
    <>
      <div className="bg-zinc-200 ">
        <Nav />
        <SectionOne />
      </div>
    </>
  );
}
