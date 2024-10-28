import { BuildingLibraryIcon } from "@heroicons/react/16/solid";
import * as React from "react";
import Select from "../Select";

export interface Props {}

export default function BodyLeftHeader(props: Props) {
  return (
    <div className="flex h-16 m-2 items-center">
      <BuildingLibraryIcon className="size-6" />
      <Select options={["DATACOI3.csv"]} label="Dataset:" />
      <div className="flex m-2 items-center">
        <div className="mr-2">Cutoff Date:</div>
        <div>
          <input
            type="date"
            className=" rounded-md w-56 p-1 border-2 border-slate-500"
            placeholder=""
            value=""
          />
        </div>
      </div>
    </div>
  );
}
