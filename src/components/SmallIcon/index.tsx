import React from "react";

type Props = {
  Icon: React.ComponentType<any>;
};

function SmallIcon({ Icon }: Props) {
  return (
    <div className="p-2  bg-gray-950 border-b-[.08rem] border-gray-300 rounded-md">
      <Icon className="size-4 text-cyan-50" />
    </div>
  );
}

export default SmallIcon;
