import Image from "next/image";
import type { NextPage } from "next";

import logo from "assets/img/logo.png";
import Head from "next/head";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About React</title>
      </Head>
      <section className="min-h-screen pt-32 px-9">
        <main className="bg-white max-w-4xl py-8 px-8 md:px-12 mx-auto rounded-lg shadow-2xl">
          <header className="flex items-center mb-5 md:mb-9">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              About Us
            </h1>
            <div className="h-1 w-24 bg-gradient ml-7 rounded-xl" />
          </header>
          <main className="flex flex-col md:flex-row md:items-center">
            <div className="bg-gray-100 flex justify-center items-center py-8 rounded-xl mb-5 md:mb-0 md:mr-10 md:w-80 md:h-full">
              <Image width={100} height={100} src={logo} alt="React logo" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">What is React?</h2>
              <p className="text-gray-500 mb-3">
                React makes it painless to create interactive UIs. Design simple
                views for each state in your application, and React will
                efficiently update and render just the right components when
                your data changes.
              </p>
              <p className="text-gray-500">
                Build encapsulated components that manage their own state, then
                compose them to make complex UIs.
              </p>
            </div>
          </main>
        </main>
      </section>
    </>
  );
};

export default About;
