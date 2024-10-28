import {
  ArrowDownIcon,
  ArrowUpIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/16/solid";
import clsx from "clsx";
import React from "react";

type Props = {
  items: string[];
};

const Accordion = ({ items }: Props) => {
  return (
    <div className="mb-2 bg-white rounded-md">
      <div
        className={clsx(
          !items.length ? "border-b-0" : "",
          "flex border-gray-400 border-b-2"
        )}
      >
        <div className="text-l font-bold content-start p-2">Segement 1</div>
        <div className="flex flex-1 items-center justify-end p-2">
          <ArrowUpIcon className="size-5" />
        </div>
      </div>
      <ul>
        {items.map((item, i) => (
          <li
            key={item + i}
            className={clsx(
              i === items.length - 1 ? "border-b-0" : "",
              "border-b-2 p-2 flex border-gray-400"
            )}
          >
            <div>{item}</div>
            <div className="flex flex-[10%] justify-end">
              <PlusIcon className="size-5" />
              <MinusIcon className="size-5" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
