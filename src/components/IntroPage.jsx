import React from "react";
import TextType from "../animations/AnimationTxt";

export default function IntroPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-gray-800 text-5xl font-bold mb-4">Adham Hamdy</h1>

        <TextType
          className="text-2xl text-gray-600"
          text={["Front-End Developer", "Turning Prototypes Into MVPs"]}
          typingSpeed={100}
          pauseDuration={2000}
          showCursor={true}
          cursorCharacter="|"
        />
      </div>
    </>
  );
}
