import React from "react";
import { FaInstagram, FaLinkedinIn, FaGithub, FaSkype } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[url(https://i.ibb.co.com/yVXWVTY/pexels-rudy-kirchner-278171-1750823.jpg)] bg-cover bg-no-repeat bg-center my-3 rounded-2xl">
      <div className="py-20 rounded-2xl bg-[#111827c0]">
        <div className="grid lg:grid-cols-3 gap-10 w-10/12 mx-auto">
            <div className="bg-gray-900 border border-gray-800 p-5 rounded-2xl py-10 lg:order-1 order-2">
              <h2 className="font-heading text-center lg:text-xl text-lg font-bold mb-4">
                Full Stack Developer
              </h2>

              <div className="divider"></div>
              <div className="flex justify-center gap-5 *:text-2xl hover:*:text-accenth">
                <a href="https://www.linkedin.com/in/md-fakhrul-alam-shuvo/" target="_blank">
                  <FaLinkedinIn />
                </a>
                <a href="https://github.com/fakhrul62" target="_blank">
                  <FaGithub />
                </a>
              </div>
              <div className="divider"></div>
              <div className="w-10/12 mx-auto font-body flex flex-col gap-3">
                <h4 className="flex justify-between font-bold">
                  Residence: <span className="text-zinc-500">BD</span>
                </h4>
                <h4 className="flex justify-between font-bold">
                  City: <span className="text-zinc-500">Dhaka</span>
                </h4>
                <h4 className="flex justify-between font-bold">
                  Age: <span className="text-zinc-500">24</span>
                </h4>
              </div>
              <div className="mt-10 text-center">
                <a href="mailto:ifakhrul23@gmail.com"  target="_blank">
                <button className="lg:px-10 md:px-5 md:text-base text-xs px-2 font-heading py-2 border border-accent text-accent rounded-full  duration-300">
                ifakhrul23@gmail.com
                </button>
                </a>
              </div>
            </div>
          <div className="lg:col-span-2 lg:order-2 order-1">
            <h4 className="text-accent uppercase font-heading text-xs">
              Hi there
            </h4>
            <h1 className="font-heading lg:text-7xl md:text-6xl text-5xl font-semibold mt-6 mb-7">
              Feel free to <br />
              Explore my work<span className="text-accent">.</span>
            </h1>
            <button
              type="button"
              className="font-body uppercase tracking-widest pr-4 border-b hover:border-b-accent pb-2 duration-300"
            >
              see my portfolio
            </button>
            <div className="grid md:grid-cols-3 gap-5 mt-10">
              <div className="p-7 flex flex-col gap-4 text-center rounded-2xl border border-gray-800 bg-gray-900">
                <h3 className="font-heading font-bold text-3xl">24 <span className="text-accent">+</span></h3>
                <p className="font-body lg:text-sm text-xs uppercase tracking-widest">Projects Completed</p>
              </div>
              <div className="p-7 flex flex-col gap-4 text-center rounded-2xl border border-gray-800 bg-gray-900">
                <h3 className="font-heading font-bold text-3xl">4 <span className="text-accent">+</span></h3>
                <p className="font-body lg:text-sm text-xs uppercase tracking-widest">Years of Experience</p>
              </div>
              <div className="p-7 flex flex-col gap-4 text-center rounded-2xl border border-gray-800 bg-gray-900">
                <h3 className="font-heading font-bold text-3xl">5 <span className="text-accent">+</span></h3>
                <p className="font-body lg:text-sm text-xs uppercase tracking-widest">Dev Tools Mastered </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
