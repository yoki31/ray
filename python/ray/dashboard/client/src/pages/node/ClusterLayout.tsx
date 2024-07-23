import React from "react";
import { RiInformationLine, RiTableLine } from "react-icons/ri";
import { SideTabLayout, SideTabRouteLink } from "../layout/SideTabLayout";

export const ClusterLayout = () => {
  return (
    <SideTabLayout>
      <SideTabRouteLink tabId="info" title="Info" Icon={RiInformationLine} />
      <SideTabRouteLink to="" tabId="table" title="Table" Icon={RiTableLine} />
    </SideTabLayout>
  );
};
