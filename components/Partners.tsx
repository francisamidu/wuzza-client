import React from "react";
import Image from "next/image";

const images = [
  "/arch-logo.png",
  "/creative-market.jpg",
  "/designmodo.jpg",
  "/envato.jpg",
  "/sawmill.png",
  "/themeforest.jpg",
];

const Partners = () => {
  return (
    <section className="bg-gray-100 py-4">
      <h1 className="text-center text-gray-700 my-4 uppercase text-md flex flex-row item-center justify-center">
        They trust <div className="font-bold ml-2">Wuzza</div>
      </h1>
      <div className="py-4 px-6 flex flex-row items-center justify-center">
        {images.map((image: string, index: number) => (
          <div className="mr-4" key={index}>
            <Image src={image} height="50" width="130" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
