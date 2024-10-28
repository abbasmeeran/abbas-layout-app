import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import React from "react";

type Props = {};

function Search({}: Props) {
  return (
    <div className="flex m-2 items-center ">
      <input
        placeholder="Search..."
        type="text"
        className="border-2 p-2 w-[100%] border-r-0 rounded-l-md focus:border-none"
      />
      <div className="border-2 p-2 h-[2.7rem] inline-block  text-slate-400 border-l-0 rounded-r-md bg-white">
        <MagnifyingGlassIcon className="size-5" />
      </div>
    </div>
  );
}

export default Search;
