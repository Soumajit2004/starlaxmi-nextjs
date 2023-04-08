import { FunctionComponent } from "react";

const HeroText: FunctionComponent = () => {
  return (
    <div className="hidden prose lg:flex min-w-full select-none flex-col justify-center font-sans">
      <h1
        className="mb-0 font-display text-4xl lg:text-4xl xl:text-6xl text-white decoration-primary duration-500 hover:underline ">
        {"Bengal's NO 1"}
      </h1>
      <h2 className="mt-5 lg:text-xl xl:text-3xl text-white ">matka platform.</h2>
      <p>Starlaxmi is the best matka platform in Bengal. We provide the best</p>
      <button className=" lg:btn-md btn-primary btn mt-10 h-16 w-40">
        Join Now
      </button>
    </div>
  );
};

export default HeroText;