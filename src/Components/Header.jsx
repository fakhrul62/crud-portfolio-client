import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import Hero from "./Hero";

const Header = () => {
  const li = (
    <>
      <Link>Home</Link>
      <Link>Skills</Link>
      <Link>Potfolio</Link>
      <Link>Contact</Link>
    </>
  );
  return (
    <>
      <div className="bg-gray-900 rounded-2xl sticky top-3 md:block hidden border border-gray-800 shadow-lg z-10">
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
            <a className="lg:px-20 md:px-10 font-heading py-2 bg-accent hover:bg-accenth text-black rounded-full drop-shadow-me hover:filter-none duration-300">
              Hire Me
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 rounded-2xl sticky top-3 md:hidden">
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
                  className="drawer-button text-accent text-xl"
                >
                  <HiOutlineBars3BottomRight />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-gray-900 text-base-content min-h-full w-80 p-4 gap-5 text-center font-heading text-xs uppercase hover:*:text-accent *:duration-500 *:tracking-widest">
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
