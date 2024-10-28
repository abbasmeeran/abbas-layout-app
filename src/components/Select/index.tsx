import React from "react";

type Props = {
  options: string[];
  label?: string;
};

function Select({ options, label }: Props) {
  return (
    <div className="flex items-center">
      {label && <div className="p-2">{label}</div>}
      <select className="w-60 border-2 border-slate-400 rounded-md p-2">
        {options.map((v, i) => (
          <option key={v + i}>{v}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
