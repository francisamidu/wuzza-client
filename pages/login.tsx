import React, { useState, useEffect } from "react";
import Link from "next/link";
import router from "next/router";
import Head from "next/head";

import { Button, SocialButton, Error } from "../components";
import { useApp } from "../contexts/AppContext";
import { useLoginMutation } from "../services";

const Login = () => {
  const { name, year } = useApp();
  const [errorMessage, setError] = useState("");
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [login, { error, data }] = useLoginMutation();

  const loginUser = async (event) => {
    event.preventDefault();
    try {
      await login(user);
    } catch {
      console.log(error);
    }
  };

  useEffect(() => {
    if (data && !error) {
      router.push("/dashboard");
    }
  }, [data]);

  return (
    <>
      <Head>
        <title>Login - Lets get you back into you dashboard</title>
      </Head>
      <main className="relative grid grid-cols-2 w-full min-h-screen py-8">
        {error && <Error error={true} message={errorMessage} />}
        <section className="h-full w-full text-blue-900 hidden md:flex md:col-start-1 md:col-end-2 overlay px-8 auth-section">
          <Link href="/">
            <a className="font-bold text-3xl">{name}</a>
          </Link>
        </section>
        <section className="h-full md:col-start-2 col-start-1 col-end-3 px-8 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">Welcome back to {name}</h1>
          <h2 className="text-1xl md:w-4/5 mt-2 text-center">
            Let's get you back into your dashboard
          </h2>
          <h3 className="mt-12 mb-4">
            Don't have an account?{" "}
            <Link href="/signup">
              <a className="text-blue-500">Signup</a>
            </Link>
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between mt-4 mx-auto w-full md:w-9/12">
            <SocialButton
              text="Login with Facebook"
              className="w-2/3 md:w-fit mb-4 md:mb-0"
              icon="facebook"
            />
            <SocialButton
              text="Login with Google"
              className="w-2/3 md:w-fit"
              icon="google"
            />
          </div>
          <div className="separator">
            <span>or</span>
          </div>
          <form
            className="flex flex-col justify-center self-center my-4 mt-0 w-4/5 mx-auto md:w-3/5 items-center"
            onSubmit={loginUser}
          >
            <div className="input-group flex flex-col pr-4 mt-3 w-full">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="mt-2 rounded-sm w-full py-2 px-2 border-2 border-gray-200"
                onChange={(event) =>
                  setUser({ ...user, username: event.target.value })
                }
              />
            </div>
            <div className="input-group flex flex-col pr-4 mt-3 w-full">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="mt-2 rounded-sm w-full py-2 px-2 border-2 border-gray-200"
                onChange={(event) =>
                  setUser({ ...user, password: event.target.value })
                }
              />
            </div>
            <div className="flex flex-row items-center justify-center my-4 w-full">
              <Button
                text="Continue"
                className="btn-blue rounded-xl w-fit md:w-3/5"
                type="submit"
              />
            </div>
          </form>
          <div className="flex flex-row justify-self-end self-end items-center justify-end text-gray-700">
            <span>
              &copy; {year} {name}
            </span>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
