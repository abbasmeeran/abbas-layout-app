import {
  AdjustmentsHorizontalIcon,
  Bars4Icon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  CalendarDateRangeIcon,
} from "@heroicons/react/16/solid";
import * as React from "react";
import Icon from "../Icon";

export interface Props {}

export default function SideMenu(props: Props) {
  return (
    <div className="flex-col justify-items-center border-2 border-gray-600  my-2">
      <Icon label="Home">
        <Bars4Icon />
      </Icon>
      <Icon label="Home">
        <BriefcaseIcon />
      </Icon>
      <Icon label="Home">
        <AdjustmentsHorizontalIcon />
      </Icon>
      <Icon label="Home">
        <BuildingOffice2Icon />
      </Icon>
      <Icon label="Home">
        <CalendarDateRangeIcon />
      </Icon>
      <Icon label="Home">
        <BuildingStorefrontIcon />
      </Icon>
      <Icon label="Home">
        <BuildingStorefrontIcon />
      </Icon>
      <Icon label="Home">
        <BuildingStorefrontIcon />
      </Icon>
      <Icon label="Home">
        <BuildingStorefrontIcon />
      </Icon>
      <Icon label="Home">
        <BuildingStorefrontIcon />
      </Icon>
      <Icon label="Home">
        <BuildingStorefrontIcon />
      </Icon>
      <Icon label="Home">
        <BuildingStorefrontIcon />
      </Icon>
      <Icon label="Home">
        <BuildingStorefrontIcon />
      </Icon>
    </div>
  );
}
