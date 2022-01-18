import React from "react";
import Button from "./Button";
import Image from "next/image";

const Intro = () => {
  return (
    <section className="flex md:flex-row flex-col justify-between items-center py-4 md:max-w-screen-lg m-auto">
      <div className="w-3/5 relative">
        <Image
          src="/business-idea-concept-with-people_52683-28609.jpg"
          alt="Work from anywhere"
          width="1000"
          height="960"
          layout="responsive"
        />
      </div>
      <div className="flex flex-col md:block color-blue-dark md:w-1/2 w-full md:text-left text-center items-center ml-4">
        <h1 className="text-4xl font-bold mb-8 leading-11">
          Try it, It works like a charm
        </h1>
        <p className="leading-7 mb-8 max-w-sm sm:max-w-full mx-auto">
          Create a new account and go live. We'll quickly get you all setup so
          that you can get working and progressing fast
        </p>
        <Button
          text="Get Started"
          icon={null}
          className="btn-blue mr-4 rounded-xl"
        />
      </div>
    </section>
  );
};

export default Intro;
