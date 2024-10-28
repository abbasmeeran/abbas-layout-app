import * as React from "react";
import Button from "../Button";

export interface Props {}

export default function BodyRightHeader(props: Props) {
  return (
    <div className="flex p-2 m-2 items-center">
      <div className="flex-1 text-xl font-bold">Report Preview</div>
      <div className="flex-[12%] flex justify-center">
        <div className="text-sm font-bold">Include empty segments</div>
        <input type="checkbox" className="ml-2 border-2 checked:bg-slate-600" />
      </div>
      <div className="flex-1 flex justify-center">
        <div className="text-sm font-bold">Auto Refresh</div>
        <input type="checkbox" className="ml-2 border-2" />
      </div>
      <div className="flex-1 flex justify-end">
        <Button label="DOWNLOAD" />
      </div>
    </div>
  );
}
