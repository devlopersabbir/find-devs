import React from "react";
import SearchProfiles from "@/components/forms/SearchProfiles";

const Search = () => {
  return (
    <div className="backdrop-blur-3xl lg:fixed lg:top-0 lg:left-[20rem] lg:right-0 z-10 static">
      <div className="w-full bottom-0 lg:my-8 my-5 lg:px-6 px-0 flex-center">
        <SearchProfiles />
      </div>
    </div>
  );
};

export default Search;
