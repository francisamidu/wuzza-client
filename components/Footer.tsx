import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="border-t-2 border-gray-200 flex flex-row justify-between items-center py-4 max-w-md md:max-w-screen-lg m-auto">
      <Link href="/">
        <a className="font-bold text-1xl uppercase">Wuzza</a>
      </Link>
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-row items-center justify-center mr-8">
          <Link href="/privacy-policy">
            <a className="font-bold text-xs uppercase transition-colors duration-150 hover:text-red-700 text-gray-700 mr-4">
              Privacy
            </a>
          </Link>
          <Link href="/help">
            <a className="font-bold text-xs uppercase transition-colors duration-150 hover:text-red-700 text-gray-700 mr-4">
              Help
            </a>
          </Link>
          <Link href="/login">
            <a className="font-bold text-xs uppercase transition-colors duration-150 hover:text-red-700 text-gray-700">
              Login
            </a>
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center">
          <a href="https://www.facebook.com/wuzza">
            <AiFillFacebook className="text-blue-700 text-3xl mr-4" />
          </a>
          <a href="https://www.twitter/wuzza-inc">
            <AiFillTwitterCircle className="text-blue-500 text-3xl mr-4" />
          </a>
          <a href="https://www.linkedln.com/in/wuzza-company">
            <AiFillLinkedin className="text-blue-900 text-3xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
