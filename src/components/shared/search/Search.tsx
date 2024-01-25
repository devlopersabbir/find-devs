import React from "react";
import SearchProfiles from "@/components/forms/SearchProfiles";

const Search = () => {
  return (
    <div className="backdrop-blur-3xl fixed top-0 left-[20rem] right-0 z-10">
      <div className="w-full bottom-0 my-8 px-6 flex-center">
        <SearchProfiles />
      </div>
    </div>
  );
};

export default Search;
