import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "./Button";

const Try = () => {
  return (
    <section className="py-12 px-8 bg-white text-center flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">Get Started Today!</h1>
      <p className="mt-8 sm:mt-8 text-gray-700 sm:w-1/2 w-9/12 mx-auto">
        Getting started with Wuzza is unbelievably easy. We believe once you
        exprience truly stree-free and simple productivity you won't go back
      </p>
      <Button
        text="Try it for free"
        className="my-4 font-bold btn-blue-var transition-all duration-300 py-3 h-full rounded-m"
        icon={<AiOutlineArrowRight className="colo-blue-custom" />}
      />
    </section>
  );
};

export default Try;
