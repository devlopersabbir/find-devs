"use client";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";
import { useDebounce } from "use-debounce";
import { useRouter } from "next/navigation";

const SearchProfiles = () => {
  const router = useRouter();
  const [queryString, setQueryString] = useState<string>("");
  const [query] = useDebounce(queryString, 400);
  const initialRender = useRef<boolean>(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    if (query.length >= 2) {
      router.push(`?search=${query}`);
    } else {
      router.push(`/`);
    }
  }, [queryString, query, router]);
  return (
    <>
      <Input
        onChange={(e) => setQueryString(e.target.value)}
        type="text"
        value={queryString}
        className="text-lg p-6 text-gray-800 dark:text-white rounded-br-xl backdrop-blur-3xl bg-white/95 dark:bg-zinc-700 shadow-sm"
        placeholder="Search developer by name, skills or locations"
      />
      <SearchIcon
        size={30}
        className={
          "absolute right-2 cursor-pointer hover:text-red-600 transition-all duration-300 hidden md:block"
        }
      />
    </>
  );
};

export default SearchProfiles;
