import React, { useState } from "react";
import logo from "../../assets/Logo.svg";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="sticky top-0 border-b border-transparent backdrop-blur-sm transition duration-200 ease-in-out animate-header-slide-down-fade"
      style={{ zIndex: 39 }}
    >
      <div className="md:max-w-7xl mx-auto w-full max-w-5xl px-6">
        <div className="bg-root absolute left-0 top-0 z-20 flex w-full flex-col items-center md:hidden">
          <div className="flex w-full items-center px-6 py-4">
            <div className="flex-auto">
              <a
                className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7"
                href="/home"
              >
                <img src={logo} />
              </a>
            </div>
            <div className="flex flex-auto justify-end">
              <button
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen ? "true" : "false"}
                aria-label="menu"
                className="inline-flex items-center justify-center rounded-md p-1 text-slate-11 transition ease-in-out hover:bg-slate-5 hover:text-slate-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-6"
                type="button"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  aria-hidden="true"
                  className="block h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    }
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`flex w-full px-6 py-4 md:hidden ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="mobile-menu"
          >
            <div className="flex w-full flex-col">
              <a
                className="text-base h-11 pl-4 pr-4 rounded-md gap-2 font-semibold dark:bg-slate-3 border-slate-6 dark:text-slate-11 bg-slate-2 text-slate-12 hover:bg-slate-4 focus-visible:ring-2 focus-visible:ring-slate-7 focus-visible:outline-none focus-visible:bg-slate-4 disabled:hover:bg-slate-4 inline-flex items-center border justify-center select-none disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 mb-4 w-full"
                href="/login"
              >
                Sign In
              </a>
              <a
                className="text-base h-11 pl-4 pr-4 rounded-md gap-2 font-semibold bg-black dark:bg-white text-white dark:text-black border-slate-6 hover:bg-black/90 dark:hover:bg-white/90 focus-visible:ring-2 dark:focus-visible:ring-white/40 focus-visible:ring-black/40 focus-visible:outline-none dark:focus-visible:bg-white/90 focus-visible:bg-black/90 disabled:hover:bg-black dark:disabled:hover:bg-white inline-flex items-center border justify-center select-none disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 mb-4 w-full"
                href="/signup"
              >
                Get Started
              </a>
              <a
                className="text-md block w-full border-b border-slate-6 py-4 font-semibold text-slate-11 transition duration-200 ease-in-out last:border-none hover:text-slate-12"
                href="/about"
              >
                About
              </a>
              <a
                className="text-md block w-full border-b border-slate-6 py-4 font-semibold text-slate-11 transition duration-200 ease-in-out last:border-none hover:text-slate-12"
                href="/blog"
              >
                Blog
              </a>
              <a
                className="text-md block w-full border-b border-slate-6 py-4 font-semibold text-slate-11 transition duration-200 ease-in-out last:border-none hover:text-slate-12"
                href="/customers"
              >
                Customers
              </a>
              <a
                className="text-md block w-full border-b border-slate-6 py-4 font-semibold text-slate-11 transition duration-200 ease-in-out last:border-none hover:text-slate-12"
                href="/pricing"
              >
                Pricing
              </a>
              <a
                className="text-md block w-full border-b border-slate-6 py-4 font-semibold text-slate-11 transition duration-200 ease-in-out last:border-none hover:text-slate-12"
                href="/enterprise"
              >
                Enterprise
              </a>
              <a
                className="text-md block w-full border-b border-slate-6 py-4 font-semibold text-slate-11 transition duration-200 ease-in-out last:border-none hover:text-slate-12"
                href="/changelog"
              >
                Changelog
              </a>
              <a
                className="text-md block w-full border-b border-slate-6 py-4 font-semibold text-slate-11 transition duration-200 ease-in-out last:border-none hover:text-slate-12"
                href="/docs"
              >
                Docs
              </a>
              <a
                className="text-md block w-full border-b border-slate-6 py-4 font-semibold text-slate-11 transition duration-200 ease-in-out last:border-none hover:text-slate-12"
                href="/contact"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto hidden h-[58px] w-full items-center justify-between transition duration-500 ease-in-out md:flex">
          <div className="flex lg:w-[225px]">
            <span
              data-state="closed"
              className=""
              style={{ WebkitTouchCallout: "none" }}
            >
              <a
                className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 py-1"
                aria-label="Resend"
                href="/home"
              >
                <img src={logo} />
              </a>
            </span>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <a
                className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-1 py-1 text-sm font-medium text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 lg:px-2"
                href="/about"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-1 py-1 text-sm font-medium text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 lg:px-2"
                href="/blog"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-1 py-1 text-sm font-medium text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 lg:px-2"
                href="/customers"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-1 py-1 text-sm font-medium text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 lg:px-2"
                href="/enterprise"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-1 py-1 text-sm font-medium text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 lg:px-2"
                href="/changelog"
              >
                FAQ
              </a>
            </li>
            <a
              className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 text-sm h-10 pl-4 pr-2 gap-0 font-semibold bg-white text-black hover:bg-white/90 focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-none focus-visible:bg-white/90 disabled:hover:bg-white inline-flex items-center border justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200"
              data-state="closed"
              href="/signup"
            >
              Learn More
              <span className="text-[#70757E]">
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  ></path>
                </svg>
              </span>
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
