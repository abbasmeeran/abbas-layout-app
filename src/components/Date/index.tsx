import React from "react";

type Props = {
  label?: string;
};

function index({ label }: Props) {
  return (
    <div className="flex m-2 items-center">
      {label && <div className="mr-2">{label}</div>}
      <div>
        <input
          type="date"
          className=" rounded-md w-56 p-1 border-2 border-slate-500"
        />
      </div>
    </div>
  );
}

export default index;
