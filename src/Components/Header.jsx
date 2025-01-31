import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import Hero from "./Hero";

const Header = () => {
  const li = (
    <>
      <Link to="/">Home</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/portfolio">Potfolio</Link>
      <Link to="/contact">Contact</Link>
    </>
  );
  return (
    <>
      <div className="bg-gray-900 rounded-2xl sticky top-3 md:block hidden border border-gray-800 shadow-lg drop-shadow-[0px_-20px_0px_rgba(3,7,18,1)] z-50">
        <div className="navbar w-10/12 mx-auto">
          <div className="navbar-start">
            <a className="font-heading text-2xl">
              Fakhrul <span className="text-accent">Alam</span>
            </a>
          </div>
          <div className="navbar-center lg:flex">
            <ul className="menu menu-horizontal px-1 gap-5 items-center font-heading text-xs uppercase hover:*:text-accent *:duration-500 *:tracking-widest">
              {li}
            </ul>
          </div>
          <div className="navbar-end">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ifakhrul23@gmail.com"
                target="_blank"
                rel="noopener noreferrer" className="lg:px-20 md:px-10 font-heading py-2 bg-accenth hover:bg-white text-black rounded-full drop-shadow-me hover:filter-none duration-300">
              Hire Me
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 rounded-2xl sticky top-3 md:hidden border border-gray-800 shadow-lg drop-shadow-[0px_-20px_0px_rgba(3,7,18,1)] !z-50">
        <div className="navbar w-10/12 mx-auto">
          <div className="navbar-start w-4/5">
            <a className="font-heading text-2xl">
              Fakhrul <span className="text-accent">Alam</span>
            </a>
          </div>
          <div className="navbar-end">
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content flex justify-end">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button text-accent  text-xl"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 18.0048C22 18.5544 21.5544 19 21.0048 19H12.9952C12.4456 19 12 18.5544 12 18.0048C12 17.4552 12.4456 17.0096 12.9952 17.0096H21.0048C21.5544 17.0096 22 17.4552 22 18.0048Z"
                      fill="currentColor"
                    />
                    <path
                      d="M22 12.0002C22 12.5499 21.5544 12.9954 21.0048 12.9954H2.99519C2.44556 12.9954 2 12.5499 2 12.0002C2 11.4506 2.44556 11.0051 2.99519 11.0051H21.0048C21.5544 11.0051 22 11.4506 22 12.0002Z"
                      fill="currentColor"
                    />
                    <path
                      d="M21.0048 6.99039C21.5544 6.99039 22 6.54482 22 5.99519C22 5.44556 21.5544 5 21.0048 5H8.99519C8.44556 5 8 5.44556 8 5.99519C8 6.54482 8.44556 6.99039 8.99519 6.99039H21.0048Z"
                      fill="currentColor"
                    />
                  </svg>
                </label>
              </div>
              <div className="drawer-side z-50">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu z-50 bg-gray-900 text-base-content min-h-full w-80 p-4 gap-5 text-center font-heading text-xs uppercase hover:*:text-accent *:duration-500 *:tracking-widest">
                  <a className="lg:px-20 md:px-10  font-heading py-2 bg-accent hover:bg-accenth text-black rounded-full drop-shadow-me hover:filter-none duration-300">
                    Hire Me
                  </a>
                  {li}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
