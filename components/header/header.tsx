import Link from "next/link";
import { useRouter } from "next/router";
import { FiHome, FiUser } from "react-icons/fi";
import cn from "classnames";

interface HeaderProps {}

const links = [
  { title: "Home", href: "/", paths: ["", "/"], icon: <FiHome /> },
  {
    title: "About",
    href: "/about",
    paths: ["/about", "/about/"],
    icon: <FiUser />,
  },
];

const Header: React.FunctionComponent<HeaderProps> = () => {
  const { pathname } = useRouter();

  return (
    <>
      <header className="py-7 md:py-9 px-9 absolute top-0 left-0 right-0">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
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
                      className={cn(
                        "flex items-center p-3 md:px-5 shadow-md rounded-md text-xl transition-colors",
                        {
                          "bg-gradient": link.paths.includes(pathname),
                          "text-white": link.paths.includes(pathname),
                          "bg-white": !link.paths.includes(pathname),
                        }
                      )}
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
        </div>
      </header>
    </>
  );
};

export default Header;
