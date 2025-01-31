import React from "react";
import { Helmet } from "react-helmet-async";
import { GoArrowUpRight } from "react-icons/go";

const Portfolio = () => {
  return (
    <div
      className="bg-[url(https://i.ibb.co.com/yVXWVTY/pexels-rudy-kirchner-278171-1750823.jpg)] bg-fixed bg-cover bg-no-repeat bg-center mt-3 rounded-2xl"
      style={{ minHeight: "calc(100vh - 102px)" }}
    >
        <Helmet>
                <title>My Portfolio</title>
                <link rel="canonical" href="https://http://fakhrul.codechronic.com/" />
              </Helmet>
      <div
        className="py-16 rounded-2xl  bg-[#111827c0]"
        style={{ minHeight: "calc(100vh - 102px)" }}
      >
        <div className="w-10/12 mx-auto">
          <div className="mb-10">
            <h4 className="text-accent uppercase font-heading text-xs">
              My Portfolio
            </h4>
            <h2 className="font-heading lg:text-5xl md:text-6xl text-3xl font-semibold mt-6">
              Showcasing My Work
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 px-4">
            <div className="bg-gray-900 border border-gray-800 p-5 rounded-2xl flex flex-col gap-5">
              <img
                src="https://i.ibb.co.com/Kzm7PG6H/Rice-Spice-House-02-01-2025-02-11-AM.png"
                className="rounded-xl"
              />
              <div className="">
                <h3 className="font-heading text-xl">Rice & Spice House</h3>
                <p className="font-body text-sm text-zinc-500">Full Stack</p>
              </div>
              <a
                href="https://rice-and-spice-house.web.app/"
                target="_blank"
                className="font-heading text-zinc-200"
              >
                <button className="border-b pb-2 border-b-amber-400 flex items-center gap-1">
                  Demo Link <GoArrowUpRight />
                </button>
              </a>
            </div>
            <div className="bg-gray-900 border border-gray-800 p-5 rounded-2xl flex flex-col gap-5">
              <img
                src="https://i.ibb.co.com/jv4NRH2Q/CRUD-Store-02-01-2025-02-25-AM.png"
                className="rounded-xl"
              />
              <div className="">
                <h3 className="font-heading text-xl">CRUD Store</h3>
                <p className="font-body text-sm text-zinc-500">Full Stack</p>
              </div>
              <a
                href="https://crud-store-5e285.web.app//"
                target="_blank"
                className="font-heading text-zinc-200"
              >
                <button className="border-b pb-2 border-b-amber-400 flex items-center gap-1">
                  Demo Link <GoArrowUpRight />
                </button>
              </a>
            </div>
            <div className="bg-gray-900 border border-gray-800 p-5 rounded-2xl flex flex-col gap-5">
              <img
                src="https://i.ibb.co.com/tTR4yjJ1/Product-Recommendation-System-02-01-2025-02-31-AM.png"
                className="rounded-xl"
              />
              <div className="">
                <h3 className="font-heading text-xl">Product Recommendation System</h3>
                <p className="font-body text-sm text-zinc-500">Full Stack</p>
              </div>
              <a
                href="https://product-recommendation-s-c2392.web.app/"
                target="_blank"
                className="font-heading text-zinc-200"
              >
                <button className="border-b pb-2 border-b-amber-400 flex items-center gap-1">
                  Demo Link <GoArrowUpRight />
                </button>
              </a>
            </div>
            <div className="bg-gray-900 border border-gray-800 p-5 rounded-2xl flex flex-col gap-5">
              <img
                src="https://i.ibb.co.com/chd3mKL8/Staffly-Employee-Management-System-02-01-2025-02-34-AM.png"
                className="rounded-xl"
              />
              <div className="">
                <h3 className="font-heading text-xl">Staffly</h3>
                <p className="font-body text-sm text-zinc-500">Full Stack</p>
              </div>
              <a
                href="https://staffly-35b73.web.app/"
                target="_blank"
                className="font-heading text-zinc-200"
              >
                <button className="border-b pb-2 border-b-amber-400 flex items-center gap-1">
                  Demo Link <GoArrowUpRight />
                </button>
              </a>
            </div>
            <div className="bg-gray-900 border border-gray-800 p-5 rounded-2xl flex flex-col gap-5">
              <img
                src="https://i.ibb.co.com/4g8KrTwR/Interior-with-Tailwind-02-01-2025-02-32-AM.png"
                className="rounded-xl"
              />
              <div className="">
                <h3 className="font-heading text-xl">Interior</h3>
                <p className="font-body text-sm text-zinc-500">Frontend</p>
              </div>
              <a
                href="https://fakhrul62.github.io/interior-tailwind/"
                target="_blank"
                className="font-heading text-zinc-200"
              >
                <button className="border-b pb-2 border-b-amber-400 flex items-center gap-1">
                  Demo Link <GoArrowUpRight />
                </button>
              </a>
            </div>
            <div className="bg-gray-900 border border-gray-800 p-5 rounded-2xl flex flex-col gap-5">
              <img
                src="https://i.ibb.co.com/nsrq92MY/React-Book-02-01-2025-02-33-AM.png"
                className="rounded-xl"
              />
              <div className="">
                <h3 className="font-heading text-xl">React Book</h3>
                <p className="font-body text-sm text-zinc-500">Frontend</p>
              </div>
              <a
                href="https://react-book-fakhrul62.netlify.app/"
                target="_blank"
                className="font-heading text-zinc-200"
              >
                <button className="border-b pb-2 border-b-amber-400 flex items-center gap-1">
                  Demo Link <GoArrowUpRight />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
