import clsx from "clsx";
import Link from "next/link";
import React from "react";

type Props = {
  items: string[];
};

function List({ items }: Props) {
  return (
    <ul className="flex-col flex justify-center">
      {items.map((item, i) => (
        <li
          key={item + i}
          className={clsx(
            i === items.length - 1 ? "border-b-0" : "",
            "border-b-2 mx-2 py-3 border-gray-400"
          )}
        >
          <Link href="">{item}</Link>
        </li>
      ))}
    </ul>
  );
}

export default List;
