import React from "react";
import { AiOutlineCaretRight, AiOutlineCheck } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { PricingItem } from "../types";
import Button from "./Button";

type PricingCardProps = {
  priceItem: PricingItem;
};
const PricingCard = (props: PricingCardProps) => {
  const {
    priceItem: { cost, features, plan },
  } = props;
  return (
    <section className="flex flex-col flex-1 items-center rounded-lg bg-white mx-2 w-full mb-2 md:mb-0 md:w1/2">
      <div className="text-center w-full p-12 rounded-md bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-800">{plan}</h1>
        <div className="flex flex-row justify-center mt-4">
          <p className="text-md ml-2 mt-2">$</p>
          <h2 className="font-bold text-6xl my-2">{cost}</h2>
        </div>
      </div>
      <div className="py-2 px-8 w-full mt-4 flex flex-col justify-between flex-1">
        {features?.map((feature, index) => (
          <div className="flex flex-row items-center mb-4" key={index}>
            <AiOutlineCheck className="text-blue-700 text-1xl" />
            <span className="ml-4">{feature}</span>
          </div>
        ))}
        <Button
          text="Start free trial"
          className="my-2 font-bold bg-white text-blue-700 border-2 border-blue-700 hover:text-white hover:bg-blue-700 transition-all duration-300 rounded-sm w-full "
          icon={
            <BsArrowRight className="text-blue-300 font-weight-bold text-2xl" />
          }
        />
        <p className="italic text-blue-300 mt-4 text-center">
          No credit card required!
        </p>
      </div>
    </section>
  );
};

export default PricingCard;
