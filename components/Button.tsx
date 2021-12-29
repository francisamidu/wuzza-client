import React, { MouseEventHandler, ReactElement } from "react";

type ButtonProps = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  left?: boolean;
  icon?: Partial<ReactElement>;
  className?: string;
};

const Button = ({ text, onClick, icon, className, left }: ButtonProps) => {
  const handleClick = typeof onClick === "function" ? onClick : () => {};
  const getClasses = () => {
    if (className) {
      return `cursor-pointer w-max h-12 px-6 mt-4 rounded-lg text-inter flex flex-row items-center justify-center transition duration-500 outline-none ${className}`;
    }
    return "cursor-pointer w-max h-12 px-6 mt-4 rounded-lg text-inter flex flex-row items-center justify-center transition duration-500 outline-none";
  };
  const renderButton = () => {
    if (left) {
      return (
        <button className={getClasses()} onClick={handleClick}>
          {icon}
          <span className={icon ? "ml-4" : ""}>{text}</span>
        </button>
      );
    }
    return (
      <button className={getClasses()} onClick={handleClick}>
        <span className={icon ? "mr-4" : ""}>{text}</span>
        {icon}
      </button>
    );
  };
  return renderButton();
};

export default Button;
