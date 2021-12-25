import React from "react";
import Link from "next/link";
import Image from "next/image";
import router from "next/router";
import Button from "./Button";
import { AiOutlineArrowRight } from "react-icons/ai";

const Header = () => {
  const handleClick = (event) => {
    router.push("/login");
  };

  return (
    <section className="flex md:pt-12 pt-4 relative flex-col">
      <nav className="flex flex-row items-center  justify-between md:px-8 py-2 px-4">
        <Link href="/">
          <a className="text-3xl font-bold">Wuzza</a>
        </Link>
        <div className="flex flex-row justify-between item-center">
          <Link href="/login">
            <a className="text-1xl text-gray-600 mr-4 hover:text-gray-400">
              Login
            </a>
          </Link>
          <Link href="/signup">
            <a className="text-1xl text-gray-600 hover:text-gray-400">Signup</a>
          </Link>
        </div>
      </nav>
      <div className="px-8 mt-20 md:mt-0 flex md:flex-row flex-col justify-between items-center">
        <div className="flex flex-col md:block text-gray-500 md:w-2/4 w-full md:text-left text-center px-4 md:px-8 items-center">
          <h1 className="text-4xl font-bold mb-4 leading-11">
            Productivity for productive people
          </h1>
          <p className="leading-7 m4-8">
            Wuzza is the industry-leading dashboard for managing all your
            productivity apps in one place. We manage your tasks, projects,
            notes and more. Wuzza is a must-have for productive people!
          </p>
          <Button
            text="Get Started"
            icon={<AiOutlineArrowRight className="text-white" />}
          />
        </div>
        <div className="w-1/2 relative">
          <Image
            src="/man with laptop.jpg"
            alt="Man with laptop"
            width="1000"
            height="960"
            layout="fill"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
