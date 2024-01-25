"use client";
import React from "react";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";
import { searchProfilesAction } from "@/lib/actions";

const SearchProfiles = () => {
  return (
    <>
      <Input
        onChange={(e) => {
          const queryString = e.target.value;
          if (queryString.length >= 2) searchProfilesAction(queryString);
        }}
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
    </>
  );
};

export default SearchProfiles;
