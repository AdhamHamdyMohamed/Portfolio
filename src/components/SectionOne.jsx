import React from "react";
// 1. Import the image file directly
import personalImg from "../assets/personalImg.png";

export default function SectionOne() {
  return (
    <>
      <div className="bg-zinc-200 flex flex-col items-end mx-3  p-3">
        <img
          className="w-50 my-3 outline outline-zinc-400 rounded-lg"
          src={personalImg}
          alt="Profile portrait of Adham Hamdy"
        />
      </div>
    </>
  );
}
