import "flowbite";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [location.pathname]);

  return (
    <>
      <nav className="flex flex-wrap lg:flex-row justify-between items-center tracking-wide uppercase text-neutral-100 xl:space-x-12 z-50 p-4 sm:px-6 md:px-12 lg:px-24 top-0 sticky bg-slate-900 bg-[url('/always-grey.png')] bg-center bg-fixed">
        <Link to="/" className="font-bold sm:text-2xl drop-shadow-lg">
          Martin Alexander
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          aria-controls="navbar-default"
          aria-expanded="false"
          type="button"
          className="inline-flex items-center p-2 w-12 h-12 justify-center text-sm bg-blue-600 rounded-lg lg:hidden hover:shadow-md hover:shadow-slate-950 hover:bg-blue-500 transition ease-in-out delay-80 focus:bg-slate-900 focus:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-8 h-8"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {isVisible && (
          <div
            className="hidden w-full lg:block lg:w-auto lg:flex lg:space-x-12 lg:h-10"
            id="navbar-default"
          >
            <a
              href="#intro"
              className="flex w-full mt-4 lg:mt-0 lg:w-52 h-10 lg:h-inherit bg-blue-600 justify-center items-center rounded-md font-bold hover:shadow-md hover:shadow-slate-950 hover:bg-blue-500 transition ease-in-out delay-80"
            >
              Intro
            </a>
            <a
              href="#portfolio"
              className="flex w-full mt-4 lg:mt-0 lg:w-52 h-10 lg:h-inherit bg-blue-600 justify-center items-center rounded-md font-bold hover:shadow-md hover:shadow-slate-950 hover:bg-blue-500 transition ease-in-out delay-80"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="flex w-full mt-4 lg:mt-0  lg:w-52 h-10 lg:h-inherit bg-blue-600 justify-center items-center rounded-md font-bold hover:shadow-md hover:shadow-slate-950 hover:bg-blue-500 transition ease-in-out delay-80"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
