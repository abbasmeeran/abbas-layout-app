import React, { ForwardRefExoticComponent } from "react";

type Props = {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
};

function Button({ Icon, label }: Props) {
  return (
    <button className="text-white bg-[#13675d] p-2 rounded-md flex items-center mx-2">
      {Icon && <Icon className="size-5 mr-2" />}
      {label}
    </button>
  );
}

export default Button;
