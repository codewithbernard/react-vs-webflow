import Head from "next/head";
import Link from "next/link";
import { FiHome, FiUser } from "react-icons/fi";

interface HeaderProps {}

const links = [
  { title: "Home", href: "/", icon: <FiHome /> },
  { title: "About", href: "/about", icon: <FiUser /> },
];

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <>
      <Head>
        <title>React JS</title>
      </Head>
      <header className="flex items-center justify-between py-7 md:py-9 px-9 md:px-20 absolute top-0 left-0 right-0">
        <Link href="/" passHref>
          <a className="text-xl md:text-3xl font-extrabold tracking-tight">
            React
          </a>
        </Link>
        <nav>
          <ul className="flex">
            {links.map((link) => (
              <li key={link.title} className="mr-4 md:mr-7 last:mr-0">
                <Link href={link.href} passHref>
                  <a
                    className="flex items-center p-3 bg-white shadow-md rounded-md text-xl"
                    href="https://reactjs.org/"
                  >
                    <span className="md:mr-4">{link.icon}</span>
                    <span className="hidden md:block">{link.title}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
