import React, { FC } from "react";
import { PageHeaderWrapper } from "@ant-design/pro-layout";
import { TableList } from "@/components/List";

const TableListPage: FC<{}> = () => (
  <PageHeaderWrapper>
    <TableList />
  </PageHeaderWrapper>
);

export default TableListPage;
