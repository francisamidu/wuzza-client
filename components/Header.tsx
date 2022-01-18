import React from "react";
import Link from "next/link";
import Image from "next/image";
import router from "next/router";
import Button from "./Button";
import { AiOutlineArrowRight, AiFillYoutube } from "react-icons/ai";

const Header = () => {
  const handleClick = (event) => {
    router.push("/login");
  };

  return (
    <section className="flex relative pt-2 sm:max-w-screen-xl w-full m-auto flex-col">
      <nav className="flex flex-row items-center justify-between p-4">
        <Link href="/">
          <a className="text-3xl color-dark-blue hover:text-blue-700 font-bold">
            Wuzza
          </a>
        </Link>
        <div className="flex flex-row justify-between h-10 items-center">
          <Link href="/login">
            <a className="font-bold color-blue-var hover:color-blue transition-all duration-300 mr-4">
              Login
            </a>
          </Link>
          <Link href="/login">
            <a className="h-full">
              <Button
                text="Create an account"
                className="mt-0 font-bold btn-blue-var transition-all duration-300 py-2 h-full rounded-m"
                icon={<AiOutlineArrowRight className="colo-blue" />}
              />
            </a>
          </Link>
        </div>
      </nav>
      <div className="mt-20 md:mt-0 flex md:flex-row flex-col justify-between items-center">
        <div className="flex flex-col md:block text-gray-900 md:w-2/4 w-full md:text-left text-center items-center">
          <h1 className="text-4xl font-bold mb-8 leading-11">
            Productivity for productive people
          </h1>
          <p className="leading-7 mb-8 max-w-sm sm:max-w-full mx-auto">
            Wuzza is the industry-leading dashboard for managing all your
            productivity apps in one place. We manage your tasks, projects,
            notes and more. Wuzza is a must-have for productive people!
          </p>
          <div className="flex flex-row max-w-max items-center justify-between">
            <Button text="Get Started" icon={null} className="btn-blue mr-4" />
            <Button
              left={true}
              text="Watch Video"
              className="bg-transparent color-blue hover:bg-blue-100"
              icon={<AiFillYoutube className="color-blue text-2xl" />}
            />
          </div>
        </div>
        <div className="w-1/2 relative">
          <Image
            src="/awards-concept-illustration_114360-2441.jpg"
            alt="Work from anywhere"
            width="1000"
            height="960"
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
