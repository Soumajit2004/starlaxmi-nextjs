import type { FunctionComponent } from "react";
import JoinGameDialog from "./joinGameDialog";

const HeroText: FunctionComponent = () => {
  return (
    <div className="hidden prose lg:flex min-w-full select-none flex-col justify-center font-sans">
      <h1
        className="mb-0 font-display text-4xl lg:text-4xl xl:text-6xl text-white decoration-primary duration-500 hover:underline ">
        {"Bengal's NO 1"}
      </h1>
      <h2 className="mt-5 lg:text-xl xl:text-3xl text-white ">matka platform.</h2>
      <p>Starlaxmi is the best matka platform in Bengal. We provide the best</p>
      <JoinGameDialog />
    </div>
  );
};

export default HeroText;