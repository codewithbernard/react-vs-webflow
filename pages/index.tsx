import type { NextPage } from "next";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithubAlt,
} from "react-icons/fa";

import logo from "assets/img/logo.png";

const socials = [
  {
    name: "facebook",
    Icon: FaFacebookF,
    color: "#1773ea",
    href: "https://facebook.com",
  },
  {
    name: "twitter",
    Icon: FaTwitter,
    color: "#1c99e6",
    href: "https://twitter.com/",
  },
  {
    name: "linked",
    Icon: FaLinkedinIn,
    color: "#006191",
    href: "https://www.linkedin.com/",
  },
  {
    name: "github",
    Icon: FaGithubAlt,
    color: "#000000",
    href: "https://github.com/",
  },
];

const Home: NextPage = () => {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <main className="flex flex-col items-center">
        <div className="w-48 h-48 mb-6 rounded-full bg-white shadow-sm flex justify-center items-center">
          <Image width={100} height={100} src={logo} alt="React logo" />
        </div>
        <h1 className="m-0 mb-2 text-3xl font-bold tracking-wide">React</h1>
        <h2 className="font-light mb-5">
          A JavaScript library for building user interfaces
        </h2>
        <ul className="mb-6 flex">
          {socials.map(({ Icon, name, color, href }) => (
            <li
              key={name}
              className="mr-3 last:mr-0 bg-white shadow-lg rounded-lg w-9 h-9 flex justify-center items-center"
            >
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="text-lg" style={{ color }} />
              </a>
            </li>
          ))}
        </ul>
        <a className="rounded-lg py-3 px-5 bg-teal-500 font-extrabold tracking-tight text-white uppercase">
          Try Now
        </a>
      </main>
    </section>
  );
};

export default Home;
