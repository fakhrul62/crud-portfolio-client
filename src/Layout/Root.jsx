import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";



const Root = () => {
  return (
    <div className="bg-gray-950 p-3">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    
    </div>
  );
};

export default Root;
