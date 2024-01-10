import React from "react";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="backdrop-blur-3xl fixed top-0 left-[20rem] right-0 z-10">
      <div className="w-full bottom-0 my-8 px-6 flex-center">
        <Input
          type="text"
          className="text-lg p-6 text-gray-800 dark:text-white rounded-br-xl backdrop-blur-3xl bg-white/95 dark:bg-zinc-700 shadow-sm"
          placeholder="Search developer by name, locations, gender, skills"
        />
        <SearchIcon
          size={30}
          className={
            "absolute right-10 cursor-pointer hover:text-red-600 transition-all duration-300"
          }
        />
      </div>
    </div>
  );
};

export default Search;
