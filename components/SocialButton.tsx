import React from "react";
import { SiGoogle, SiFacebook } from "react-icons/si";
import { SocialButtonProps } from "../types";

const SocialButton = ({ className, text, icon }: SocialButtonProps) => {
  return (
    <div
      className={
        className
          ? `rounded-md flex flex-row items-center justify-center ${icon} py-3 px-4 text-white ${className} font-normal`
          : `rounded-md flex flex-row items-center justify-center ${icon} py-3 px-4 text-white font-normal`
      }
    >
      {icon === "google" ? <SiGoogle /> : <SiFacebook />}
      <span className="ml-6">{text}</span>
    </div>
  );
};

export default SocialButton;
