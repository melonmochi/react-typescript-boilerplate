import React, { FC } from "react";
import { PageHeaderWrapper } from "@ant-design/pro-layout";
import { CustomTableList } from "@/components/List";

export const CustomTableListPage: FC = () => (
  <PageHeaderWrapper>
    <CustomTableList />
  </PageHeaderWrapper>
);
