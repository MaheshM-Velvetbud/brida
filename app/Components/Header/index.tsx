"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  const closeNavbarOnScroll = () => {
    setNavbarOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", closeNavbarOnScroll);

    return () => {
      window.removeEventListener("scroll", closeNavbarOnScroll);
    };
  }, []);

  return (
    <>
      <div className="flex items-center justify-center "> {/* Centered the header vertically */}
        <header
          className={`header justify-center left-16 top-0 z-40 flex w-[80%] items-center h-20  rounded-full ${sticky
            ? "fixed z-[9999] bg-white  transition rounded-full"
            : "absolute bg-white "
            }`}
        >
          <div className={`container mx-auto px-8 xl:px-20`}>
            <div className="relative flex items-center justify-between">
              <div className="w-32 max-w-full rounded-full">
                <Link
                  href="/"
                  className={`header-logo block w-full ${sticky ? "py-2 lg:py-2" : "py-8"}`}
                >
                  <Image
                    src="/images/logo.png"
                    alt="WOOD"
                    width={350}
                    height={90}
                    className="w-full"
                  />
                </Link>
              </div>

              <div className="flex items-center justify-center">
                <div>
                  <button
                    onClick={navbarToggleHandler}
                    id="navbarToggler"
                    aria-label="Mobile Menu"
                    className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                  >
                    <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${navbarOpen ? "top-[7px] rotate-45" : ""}`}
                    />
                    <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${navbarOpen ? "opacity-0" : ""}`}
                    />
                    <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${navbarOpen ? "top-[-8px] -rotate-45" : ""}`}
                    />
                  </button>
                  <nav
                    id="navbarCollapse"
                    className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                      }`}
                  >
                    <ul className="block lg:flex lg:space-x-12">
                      {menuData.map((menuItem, index) => (
                        <li key={index} className="group relative ">
                          {menuItem.path ? (
                            <Link
                              href={menuItem.path}
                              className={`flex py-2 text-lg  lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${usePathName === menuItem.path
                                ? "text-black "
                                : ` ${!sticky && usePathName.includes("/services/webdevelopment") ? "text-black" : "text-black"} text-black hover:text-primary hover:cursor-pointer text-black`
                                }text-black`}
                            >
                              {menuItem.title}
                            </Link>
                          ) : (
                            <>
                              <p
                                onClick={() => handleSubmenu(index)}
                                className={`${!sticky && usePathName.includes("/services/webdevelopment") ? "text-black" : " text-black"} flex cursor-pointer   items-center justify-between py-2 text-lg text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:px-0 lg:py-6`}
                              >
                                {menuItem.title}
                                <span className="pl-3">
                                  <svg width="25" height="24" viewBox="0 0 25 24">
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                              </p>
                              <div
                                className={`bg-white  text-black flex gap-4 text-lg submenu text-black relative left-0 top-full rounded-2xl transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:flex lg:w-max lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "block" : "hidden"}`}
                              >
                                <div className="text-gray-700">
                                  {menuItem.submenu?.slice(0, 8).map((submenuItem, index) => {
                                    return (
                                      <Link
                                        href={submenuItem.path}
                                        key={index}
                                        className="block rounded py-2.5 text-sm arrow-svg text-black hover:text-green-800 lg:px-3"
                                      >
                                        {submenuItem.title}
                                      </Link>
                                    );
                                  })}
                                </div>
                                <div className="text-gray-700">
                                  {menuItem.submenu?.slice(8).map((submenuItem, index) => {
                                    return (
                                      <Link
                                        href={submenuItem.path}
                                        key={index}
                                        className="block text-black rounded py-2.5 text-sm arrow-svg  hover:text-blue-800 lg:px-3"
                                      >
                                        {submenuItem.title}
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;