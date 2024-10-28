import Link from "next/link";
import React, { ForwardRefExoticComponent } from "react";

type Props = {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
};

function LinkIcon({ Icon, label }: Props) {
  return (
    <div className="flex mx-2 p-2 items-center gap-1">
      {Icon && <Icon className="size-5" />}
      <Link href={""}>{label}</Link>
    </div>
  );
}

export default LinkIcon;
