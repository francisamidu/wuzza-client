import React from "react";

type ToastProps = {
  message: string;
  error: boolean;
};
const Toast = ({ message, error }: ToastProps) => {
  return (
    <div
      className={
        error
          ? "shadow toast absolute rounded bg-red-500 flex flex-col justify-center items-center py-2 px-6"
          : "shadow toast absolute rounded bg-green-500 flex flex-col justify-center items-center py-2 px-6"
      }
    >
      <h1 className="text-2xl text-white text-center col-start-2 col-end-3">
        {error ? "Error" : "Success"}
      </h1>
      <p className="text-white text-center text-1xl col-start-2 col-end-3">
        {message}
      </p>
    </div>
  );
};

export default Toast;
