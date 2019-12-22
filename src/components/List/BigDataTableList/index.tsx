import React, { FC, useState } from "react";
import { Table, Tag } from "antd";
import { SortOrder, PaginationConfig } from "antd/lib/table";
import { useRequest, useGetEmployees } from "@/hooks/services";
import { Employee } from "@/services/GraphQL";
import { getColour } from "@/services/GraphQL/departments";

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
  loading: boolean;
  pagination: PaginationConfig;
}

export const BigDataTableList: FC = () => {
  const [state, setState] = useState<BigDataTableListState>({
    loading: false,
    pagination: {
      showSizeChanger: true,
      showQuickJumper: true
    }
  });
  const { data, loading: isLoading, error } = useGetEmployees();
  useRequest({ error, setState, state, isLoading });

  const dataSource = data
    ? data.edges
        .map(edge => edge.node)
        .map(node => ({ ...node, key: node.empNo }))
    : [];

  return (
    <>
      <Table {...state} columns={columns} dataSource={dataSource} />
    </>
  );
};
