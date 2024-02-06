import React from "react";
import SearchProfiles from "@/components/forms/SearchProfiles";

const Search = () => {
  return (
    <div className="lg:backdrop-blur-3xl fixed left-0 lg:left-[20rem] lg:mx-0 px-4 py-0.5 dark:bg-zinc-900 bg-zinc-100 lg:bg-transparent lg:top-0 top-[5rem] right-0 z-50">
      <div className="w-full my-3 lg:my-8 flex-center relative">
        <SearchProfiles />
      </div>
    </div>
  );
};

export default Search;
