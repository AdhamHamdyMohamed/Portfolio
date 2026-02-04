import TextType from "../animations/AnimationTxt";
import { Quantum } from "ldrs/react";
import "ldrs/react/Quantum.css";

export default function IntroPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden bg-zinc-200">
        <Quantum size="45" speed="1.75" color="black" />

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
