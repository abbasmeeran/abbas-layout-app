import {
  ArrowDownOnSquareStackIcon,
  ArrowDownTrayIcon,
  EyeSlashIcon,
} from "@heroicons/react/16/solid";
import * as React from "react";
import Button from "../Button";
import Select from "../Select";
import Link from "next/link";
import LinkIcon from "../LinkIcon";

export interface Props {}

export default function TopHeader(props: Props) {
  return (
    <div className="flex h-full items-center border-b-2 border-gray-400">
      <div className="flex-1 flex justify-start">
        <Button Icon={ArrowDownTrayIcon} label="Data Load" />
        <Select options={["Dataset 1", "Dataset 2"]} />
        <LinkIcon label="History" Icon={EyeSlashIcon} />
        <LinkIcon label="Forcasting" Icon={EyeSlashIcon} />
        <LinkIcon label="Composition" Icon={EyeSlashIcon} />
      </div>
      <div className="flex flex-1 justify-end ">
        <Button Icon={ArrowDownTrayIcon} label="Components" />
        <LinkIcon label="Forcasting" Icon={EyeSlashIcon} />
      </div>
    </div>
  );
}
