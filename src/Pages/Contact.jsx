import React from "react";
import { Helmet } from "react-helmet-async";
import { BsEnvelopeAt } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Contact = () => {
  return (
    <div
      className="bg-[url(https://i.ibb.co.com/yVXWVTY/pexels-rudy-kirchner-278171-1750823.jpg)]  bg-cover bg-no-repeat bg-center mt-3 rounded-2xl"
      style={{ minHeight: "calc(100vh - 102px)" }}
    >
        <Helmet>
                <title>Contact Me</title>
                <link rel="canonical" href="https://http://fakhrul.codechronic.com/" />
              </Helmet>
      <div
        className="py-16 rounded-2xl  bg-[#111827c0]"
        style={{ minHeight: "calc(100vh - 102px)" }}
      >
        <div className="w-10/12 mx-auto">
          <div className="mb-10">
            <h4 className="text-accent uppercase font-heading text-xs">
              Contact Me
            </h4>
            <h2 className="font-heading lg:text-5xl md:text-6xl text-3xl font-semibold mt-6">
              Let's Talk
            </h2>
          </div>
          <div>
            <h3 className="flex items-center gap-1 text-xl font-heading">
              <span className="text-amber-400">
                <BsEnvelopeAt />
              </span>{" "}
              ifakhrul23@gmail.com
            </h3>
            <div className="flex gap-3 items-center mt-10">
                <a href="https://www.linkedin.com/in/md-fakhrul-alam-shuvo/" target="_blank"  className="bg-gray-900 rounded-xl p-5 border border-gray-800">
                  <FaLinkedinIn />
                </a>
              <a href="https://github.com/fakhrul62"  target="_blank"  className="bg-gray-900 rounded-xl p-5 border border-gray-800">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="mt-10">
            <p className="font-mono">
                &copy; 2025 Fakhrul Alam. All rights reserved.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
