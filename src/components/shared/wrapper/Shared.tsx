import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Search from "../search/Search";

const Shared = () => {
  return (
    <>
      <div className="w-[20rem] fixed left-0 top-0 my-8 px-8 border-r-2 border-gray-200 h-[90vh] z-20">
        <Sidebar />
      </div>
      <div className="backdrop-blur-3xl fixed top-0 left-[20rem] right-0 z-10">
        <Search />
      </div>
    </>
  );
};

export default Shared;
