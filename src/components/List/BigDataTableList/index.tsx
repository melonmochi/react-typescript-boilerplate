import React, { FC, useState, useContext } from "react";
import { Table, Tag, message } from "antd";
import { SortOrder, PaginationConfig } from "antd/lib/table";
import InfiniteScroll from "react-infinite-scroller";
import { useRequest, useGetEmployees } from "@/hooks/services";
import { Employee } from "@/services/GraphQL";
import { getColour } from "@/services/GraphQL/departments";
import { BasicLayoutContext } from "@/contexts";

const columns = [
  {
    title: "Employee No",
    dataIndex: "empNo",
    key: "empNo",
    sortDirections: ["ascend", "descend"] as SortOrder[],
    render: (empNo: Employee["empNo"]) => <a>{empNo}</a>
  },
  {
    title: "Department",
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
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
    sortDirections: ["ascend", "descend"] as SortOrder[]
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
    sortDirections: ["ascend", "descend"] as SortOrder[]
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    sortDirections: ["ascend", "descend"] as SortOrder[]
  },
  {
    title: "Birth Date",
    dataIndex: "birthDate",
    key: "birthDate",
    sortDirections: ["ascend", "descend"] as SortOrder[]
  },
  {
    title: "Hire Date",
    dataIndex: "hireDate",
    key: "hireDate",
    sortDirections: ["ascend", "descend"] as SortOrder[]
  },
  {
    title: "Manager",
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

interface BigDataTableListState {
  hasMore: boolean;
  loading: boolean;
  pagination: PaginationConfig | false;
}

export const BigDataTableList: FC = () => {
  const [state, setState] = useState<BigDataTableListState>({
    hasMore: true,
    loading: false,
    pagination: false
  });
  const { data, loading: isLoading, error, loadMore } = useGetEmployees();
  useRequest({ error, setState, state, isLoading });

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
