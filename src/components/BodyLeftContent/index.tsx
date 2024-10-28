import {
  ArrowDownOnSquareIcon,
  BriefcaseIcon,
  FolderIcon,
  MagnifyingGlassIcon,
  MapIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import * as React from "react";
import Search from "../Search";
import Link from "next/link";
import List from "../List";
import Select from "../Select";
import Accordion from "../Accordion";
import { KeyIcon } from "@heroicons/react/24/solid";
import SmallIcon from "../SmallIcon";
import Icon from "../Icon";

export interface Props {}

export default function BodyLeftContent(props: Props) {
  return (
    <div className="flex h-full m-2 bg-gray-300 rounded-md border-[.1rem] border-gray-500">
      <div className="flex-1 flex-col p-2">
        <div className="text-xl font-bold m-2">Add to Selection</div>
        <div className="flex bg-slate-800  rounded-md text-white m-2 p-1">
          <button className="flex-1 size-10 bg-green-700 p-1 rounded-md">
            Fields
          </button>
          <button className="flex-1 bg-inherit rounded-md">Segments</button>
        </div>
        <div className="mt-5">
          <Search />
        </div>
        <div>
          <List
            items={[
              "As of date",
              "Deliquence Status",
              "Escrow Flag",
              "Gurantor",
              "Loan Age",
              "Occupancy",
              "Original Term",
              "Program Type",
              "Property Type",
              "Servicing Fee",
              "State",
              "Unique Loan ID",
            ]}
          />
        </div>
      </div>
      <div className="flex-1 flex-col border-l-0 p-2 border-l-[.1rem] border-gray-500">
        <div className="flex-col">
          <div className="flex-1 flex">
            <div className="text-xl font-bold m-2">Segment Group</div>
            <div className="flex-1 flex items-center justify-end">
              <TrashIcon className="size-5" />
              <ArrowDownOnSquareIcon className="size-5" />
              <PlusIcon className="size-5" />
            </div>
          </div>
          <div className="m-2">
            <Select options={["Segement Group1"]} />
          </div>
        </div>
        <div className="flex m-2 ">
          <div className="flex-col mt-4 ">
            {[TrashIcon, BriefcaseIcon, MapIcon, KeyIcon, FolderIcon].map(
              (icon, i) => (
                <SmallIcon key={Icon.name + i} Icon={icon} />
              )
            )}
          </div>
          <div className="flex-col mr-5 mt-4 w-full">
            <Accordion
              items={[
                "Escrow Flag",
                "Deliquency Status",
                "Loan Age",
                "Search for Field to Add",
              ]}
            />
            <div className="mb-10"></div>
            <Accordion
              items={[
                "Escrow Flag",
                "Deliquency Status",
                "Loan Age",
                "Search for Field to Add",
              ]}
            />
            <div className="mb-10"></div>
            <Accordion items={[]} />
          </div>
        </div>
      </div>
    </div>
  );
}
