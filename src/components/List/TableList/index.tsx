import React, { FC, useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Table, Tag, message } from "antd";
import { SortOrder, PaginationConfig } from "antd/lib/table";
import InfiniteScroll from "react-infinite-scroller";
import { useRequest, useGetEmployees } from "@/hooks/services";
import { Employee } from "@/services/GraphQL";
import { getColour } from "@/services/GraphQL/departments";
import { BasicLayoutContext } from "@/contexts";

interface TableListState {
  hasMore: boolean;
  loading: boolean;
  pagination: PaginationConfig | false;
}

export const TableList: FC = () => {
  const { t } = useTranslation();
  const [state, setState] = useState<TableListState>({
    hasMore: true,
    loading: false,
    pagination: false
  });
  const { data, loading: isLoading, error, loadMore } = useGetEmployees();
  useRequest({ error, setState, state, isLoading });

  const columns = [
    {
      title: t("employees.columns.EmpNo.title"),
      dataIndex: "empNo",
      key: "empNo",
      sortDirections: ["ascend", "descend"] as SortOrder[],
      render: (empNo: Employee["empNo"]) => <a>{empNo}</a>
    },
    {
      title: t("employees.columns.department.title"),
      dataIndex: "department",
      key: "department",
      sortDirections: ["ascend", "descend"] as SortOrder[],
      editable: true,
      render: (department: Employee["department"]) => (
        <>
          <Tag color="geekblue" key="deptNo">
            {department.deptNo}
          </Tag>
          <Tag color={getColour(department.deptNo)} key="deptName">
            {department.deptName}
          </Tag>
        </>
      )
    },
    {
      title: t("employees.columns.firstName.title"),
      dataIndex: "firstName",
      key: "firstName",
      sortDirections: ["ascend", "descend"] as SortOrder[]
    },
    {
      title: t("employees.columns.lastName.title"),
      dataIndex: "lastName",
      key: "lastName",
      sortDirections: ["ascend", "descend"] as SortOrder[]
    },
    {
      title: t("employees.columns.gender.title"),
      dataIndex: "gender",
      key: "gender",
      sortDirections: ["ascend", "descend"] as SortOrder[]
    },
    {
      title: t("employees.columns.birthDate.title"),
      dataIndex: "birthDate",
      key: "birthDate",
      sortDirections: ["ascend", "descend"] as SortOrder[]
    },
    {
      title: t("employees.columns.hireDate.title"),
      dataIndex: "hireDate",
      key: "hireDate",
      sortDirections: ["ascend", "descend"] as SortOrder[]
    },
    {
      title: t("employees.columns.isManager.title"),
      dataIndex: "isManager",
      key: "isManager",
      sortDirections: ["ascend", "descend"] as SortOrder[],
      editable: true,
      render: (isManager: Employee["isManager"]) => (
        <Tag color={isManager ? "gold" : "magenta"} key="deptNo">
          {isManager ? "YES" : "NO"}
        </Tag>
      )
    }
  ];

  const dataSource = data
    ? data.edges
        .map(edge => edge.node)
        .map(node => ({ ...node, key: node.empNo }))
    : [];

  const handleInfiniteOnLoad = () => {
    if (data.totalCount && data.totalCount === dataSource.length) {
      message.warning("List loaded all");
      setState({ ...state, hasMore: false });
      return;
    }
    loadMore();
  };

  const { globalRef } = useContext(BasicLayoutContext);

  return (
    <InfiniteScroll
      initialLoad={false}
      loadMore={handleInfiniteOnLoad}
      hasMore={!isLoading && state.hasMore}
      useWindow={true}
      getScrollParent={() => globalRef && globalRef.current}
    >
      <Table {...state} columns={columns} dataSource={dataSource} />
    </InfiniteScroll>
  );
};
