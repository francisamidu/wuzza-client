import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import router from "next/router";

import { Button, SocialButton, Error } from "../components";
import { useApp } from "../contexts/AppContext";
import { useSignupMutation } from "../services";

const Signup = () => {
  const { name, year } = useApp();
  const [errorMessage, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    fullName: "",
    password: "",
    username: "",
  });

  const [signup, { error, data }] = useSignupMutation();

  const signupUser = async (event) => {
    event.preventDefault();
    try {
      await signup(user);
    } catch {}
  };

  useEffect(() => {
    if (data) {
      setUser({
        email: "",
        fullName: "",
        password: "",
        username: "",
      });
    }
  }, [data]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <>
      <Head>
        <title>Signup - Lets get you all setup</title>
      </Head>
      <main className="relative grid grid-cols-2 w-full min-h-screen py-8">
        {/* {error && <Error error={true} message={error} />} */}
        <section className="auth-section h-full w-full text-blue-900 hidden md:flex md:col-start-1 md:col-end-2 overlay px-8">
          <Link href="/">
            <a className="font-bold text-3xl">{name}</a>
          </Link>
        </section>
        <section className="h-full md:col-start-2 col-start-1 col-end-3 px-8 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">Welcome to {name}</h1>
          <h2 className="text-1xl md:w-4/5 mt-2 text-center">
            Let's get you all setup so you can verify your account and begin
            setting up your dashboard
          </h2>
          <h3 className="mt-12 mb-4">
            Already have an account?{" "}
            <Link href="/login">
              <a className="text-blue-500">Login</a>
            </Link>
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between mt-4 mx-auto w-full md:w-4/5">
            <SocialButton
              text="Register with Facebook"
              className="w-2/3 md:w-fit mb-4 md:mb-0"
              icon="facebook"
            />
            <SocialButton
              text="Register with Google"
              className="w-2/3 md:w-fit"
              icon="google"
            />
          </div>
          <div className="separator">
            <span>or</span>
          </div>
          <form
            className="flex flex-col md:flex-row flex-wrap jstify-center md:justify-between mt-3 w-full md:w-4/5 mx-auto items-center"
            onSubmit={signupUser}
          >
            <div className="input-group flex flex-col md:w-1/2 w-full md:pr-4 mt-3">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="mt-2 rounded-sm w-full py-2 px-2 border-2 border-gray-200"
                onChange={(event) =>
                  setUser({ ...user, username: event.target.value })
                }
                value={user.username}
              />
            </div>
            <div className="input-group flex flex-col md:w-1/2 w-full md:pl-4 mt-3">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                className="mt-2 rounded-sm w-full py-2 px-2 border-2 border-gray-200"
                onChange={(event) =>
                  setUser({ ...user, email: event.target.value })
                }
                value={user.email}
              />
            </div>
            <div className="input-group flex flex-col md:w-1/2 w-full md:pr-4 mt-4">
              <label htmlFor="fullName">Fullname</label>
              <input
                type="text"
                id="password"
                className="mt-2 rounded-sm w-full py-2 px-2 border-2 border-gray-200"
                onChange={(event) =>
                  setUser({ ...user, fullName: event.target.value })
                }
                value={user.fullName}
              />
            </div>
            <div className="input-group flex flex-col md:w-1/2 w-full md:pl-4 mt-4">
              <label htmlFor="repeat-password">Password</label>
              <input
                type="password"
                id="repeat-password"
                className="mt-2 rounded-sm w-full py-2 px-2 border-2 border-gray-200"
                onChange={(event) =>
                  setUser({ ...user, password: event.target.value })
                }
                value={user.password}
              />
            </div>
            <div className="flex flex-row items-center justify-center w-full my-4">
              <Button
                text="Create Account"
                className="btn-blue rounded-xl"
                type="submit"
              />
            </div>
          </form>
          <div className="flex flex-row justify-self-end self-end items-center justify-end text-gray-700">
            <span>
              &copy; {year} {name}
            </span>
            <span></span>
          </div>
        </section>
      </main>
    </>
  );
};

export default Signup;
