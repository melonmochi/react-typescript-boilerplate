import React, { useState, useEffect } from "react";
import { Table, Form, Switch, Radio } from "antd";
import { departments as d$ } from "@/__mocks__";
import { department } from "@/__mocks__/departments.d";
import { SortOrder } from "antd/lib/table";
import { RadioChangeEvent } from "antd/lib/radio";

const columns = [
  {
    title: "Department No",
    dataIndex: "deptNo",
    key: "deptNo",
    sorter: (a: department, b: department) => a.deptNo.length - b.deptNo.length,
    sortDirections: ["ascend", "descend"] as SortOrder[],
    width: 150
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a: department, b: department) => a.name.length - b.name.length,
    sortDirections: ["ascend", "descend"] as SortOrder[]
  }
];

const expandedRowRender = (record: { description: React.ReactNode }) => (
  <p>{record.description}</p>
);
const title = () => "Here is title";
const showHeader = true;
const footer = () => "Here is footer";
const scroll = { y: 240 };
const pagination = { position: "bottom" };

const TableList: React.FC = () => {
  const [dataSource, setDataSource] = useState<department[]>([]);
  const [state, setState] = useState<any>({
    bordered: false,
    ellipsis: false,
    loading: false,
    pagination,
    size: "default",
    expandedRowRender,
    title: undefined,
    showHeader,
    footer,
    rowSelection: {},
    scroll: undefined,
    hasData: true,
    tableLayout: undefined
  });

  const handleToggle = (prop: any) => (enable: any) => {
    setState({ ...state, [prop]: enable });
  };

  const handleSizeChange = (e: RadioChangeEvent) => {
    setState({ ...state, size: e.target.value });
  };

  const handleTableLayoutChange = (e: RadioChangeEvent) => {
    setState({ ...state, tableLayout: e.target.value });
  };

  const handleExpandChange = (enable: any) => {
    setState({
      ...state,
      expandedRowRender: enable ? expandedRowRender : undefined
    });
  };

  const handleEllipsisChange = (enable: any) => {
    setState({ ...state, ellipsis: enable });
  };

  const handleTitleChange = (enable: any) => {
    setState({ ...state, title: enable ? title : undefined });
  };

  const handleHeaderChange = (enable: any) => {
    setState({ ...state, showHeader: enable ? showHeader : false });
  };

  const handleFooterChange = (enable: any) => {
    setState({ ...state, footer: enable ? footer : undefined });
  };

  const handleRowSelectionChange = (enable: any) => {
    setState({ ...state, rowSelection: enable ? {} : undefined });
  };

  const handleScollChange = (enable: any) => {
    setState({ ...state, scroll: enable ? scroll : undefined });
  };

  const handleDataChange = (hasData: any) => {
    setState({ ...state, hasData });
  };

  const handlePaginationChange = (e: RadioChangeEvent) => {
    const { value } = e.target;
    setState({
      ...state,
      pagination: value === "none" ? false : { position: value }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await d$();
      setDataSource(result.data);
    };
    fetchData();
  }, []);

  const TableListHeader = (
    <Form
      layout="inline"
      className="components-table-demo-control-bar"
      style={{ marginBottom: 16 }}
    >
      <Form.Item label="Bordered">
        <Switch checked={state.bordered} onChange={handleToggle("bordered")} />
      </Form.Item>
      <Form.Item label="loading">
        <Switch checked={state.loading} onChange={handleToggle("loading")} />
      </Form.Item>
      <Form.Item label="Title">
        <Switch checked={!!state.title} onChange={handleTitleChange} />
      </Form.Item>
      <Form.Item label="Column Header">
        <Switch checked={!!state.showHeader} onChange={handleHeaderChange} />
      </Form.Item>
      <Form.Item label="Footer">
        <Switch checked={!!state.footer} onChange={handleFooterChange} />
      </Form.Item>
      <Form.Item label="Expandable">
        <Switch
          checked={!!state.expandedRowRender}
          onChange={handleExpandChange}
        />
      </Form.Item>
      <Form.Item label="Checkbox">
        <Switch
          checked={!!state.rowSelection}
          onChange={handleRowSelectionChange}
        />
      </Form.Item>
      <Form.Item label="Fixed Header">
        <Switch checked={!!state.scroll} onChange={handleScollChange} />
      </Form.Item>
      <Form.Item label="Has Data">
        <Switch checked={!!state.hasData} onChange={handleDataChange} />
      </Form.Item>
      <Form.Item label="Ellipsis">
        <Switch checked={!!state.ellipsis} onChange={handleEllipsisChange} />
      </Form.Item>
      <Form.Item label="Size">
        <Radio.Group value={state.size} onChange={handleSizeChange}>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="middle">Middle</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Table Layout">
        <Radio.Group
          value={state.tableLayout}
          onChange={handleTableLayoutChange}
        >
          <Radio.Button value={undefined}>Unset</Radio.Button>
          <Radio.Button value="fixed">Fixed</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Pagination">
        <Radio.Group
          value={state.pagination ? state.pagination.position : "none"}
          onChange={handlePaginationChange}
        >
          <Radio.Button value="top">Top</Radio.Button>
          <Radio.Button value="bottom">Bottom</Radio.Button>
          <Radio.Button value="both">Both</Radio.Button>
          <Radio.Button value="none">None</Radio.Button>
        </Radio.Group>
      </Form.Item>
    </Form>
  );

  return (
    <>
      {TableListHeader}
      <Table
        {...state}
        columns={columns}
        dataSource={state.hasData ? dataSource : null}
      />
    </>
  );
};

export default TableList;
