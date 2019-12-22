import React, { FC } from "react";
import { PageHeaderWrapper } from "@ant-design/pro-layout";
import { BigDataTableList } from "@/components/List";

export const BigDataTableListPage: FC<{}> = () => (
  <PageHeaderWrapper>
    <BigDataTableList />
  </PageHeaderWrapper>
);
