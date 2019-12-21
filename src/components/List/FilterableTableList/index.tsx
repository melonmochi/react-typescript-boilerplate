import React, { FC, useState, useEffect, useRef } from "react";
import { Button, Table, Form, Switch, Radio, Input } from "antd";
// import Highlighter from "react-highlight-words";
import { department } from "@/__mocks__/departments.d";
import { SortOrder } from "antd/lib/table";
import { RadioChangeEvent } from "antd/lib/radio";
import { getDepartments } from "@/services/Api/departments";

const expandedRowRender = (record: { deptNo: React.ReactNode }) => {
  return <p>{`Here is ${record.deptNo}'s description`}</p>;
};
const title = () => "Here is title";
const showHeader = true;
const footer = () => "Here is footer";
const scroll = { y: 240 };
const pagination = { position: "bottom" };

const TableList: FC = () => {
  const [dataSource, setDataSource] = useState<department[]>([]);
  const [state, setState] = useState<any>({
    bordered: false,
    ellipsis: false,
    expandedRowRender,
    footer,
    hasData: true,
    loading: false,
    pagination,
    rowSelection: {},
    scroll: undefined,
    searchedColumn: "",
    searchText: "",
    showHeader,
    size: "default",
    tableLayout: undefined,
    title: undefined
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

  const handleSearch = (
    selectedKeys: string[],
    confirm: () => void,
    dataIndex: string
  ) => {
    confirm();
    setState({
      ...state,
      searchText: selectedKeys[0],
      searchedColumn: dataIndex
    });
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setState({ ...state, searchText: "" });
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDepartments();
      const data = result.data.map((department: any) => ({
        ...department,
        deptNo: department.dept_no,
        key: department.dept_no
      }));
      setDataSource(data);
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

  const searchInputRef = useRef(null);

  // const getColumnSearchProps = (dataIndex: string) => ({
  //   filterDropdown: ({
  //     setSelectedKeys,
  //     selectedKeys,
  //     confirm,
  //     clearFilters
  //   }: {
  //     setSelectedKeys: (keys: string[]) => void;
  //     selectedKeys: string[];
  //     confirm: () => void;
  //     clearFilters: () => void;
  //   }) => (
  //     <div style={{ padding: 8 }}>
  //       <Input
  //         ref={searchInputRef}
  //         placeholder={`Search ${dataIndex}`}
  //         value={selectedKeys[0]}
  //         onChange={e =>
  //           setSelectedKeys(e.target.value ? [e.target.value] : [])
  //         }
  //         onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
  //         style={{ width: 188, marginBottom: 8, display: "block" }}
  //       />
  //       <Button
  //         type="primary"
  //         onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
  //         icon="search"
  //         size="small"
  //         style={{ width: 90, marginRight: 8 }}
  //       >
  //         Search
  //       </Button>
  //       <Button
  //         onClick={() => handleReset(clearFilters)}
  //         size="small"
  //         style={{ width: 90 }}
  //       >
  //         Reset
  //       </Button>
  //     </div>
  //   ),
  //   filterIcon: (filtered: boolean) => (
  //     <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
  //   ),
  //   onFilter: (
  //     value: { toLowerCase: () => void },
  //     record: {
  //       [x: string]: {
  //         toString: () => {
  //           toLowerCase: () => { includes: (arg0: any) => void };
  //         };
  //       };
  //     }
  //   ) =>
  //     record[dataIndex]
  //       .toString()
  //       .toLowerCase()
  //       .includes(value.toLowerCase()),
  //   onFilterDropdownVisibleChange: (visible: boolean) => {
  //     if (visible) {
  //       setTimeout(() => searchInputRef.current.select());
  //     }
  //   },
  //   render: (text: { toString: () => string }) =>
  //     state.searchedColumn === dataIndex ? (
  //       <Highlighter
  //         highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
  //         searchWords={[state.searchText]}
  //         autoEscape
  //         textToHighlight={text.toString()}
  //       />
  //     ) : (
  //       text
  //     )
  // });

  const columns = [
    {
      title: "Department No",
      dataIndex: "deptNo",
      key: "deptNo",
      sorter: (a: department, b: department) =>
        a.deptNo.localeCompare(b.deptNo),
      sortDirections: ["ascend", "descend"] as SortOrder[],
      width: "20%",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters
      }: {
        setSelectedKeys: (keys: string[]) => void;
        selectedKeys: string[];
        confirm: () => void;
        clearFilters: () => void;
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={searchInputRef}
            value={selectedKeys[0]}
            onChange={e =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => handleSearch(selectedKeys, confirm, "deptNo")}
            style={{ width: 188, marginBottom: 8, display: "block" }}
          />
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, "deptNo")}
            icon="search"
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </div>
      )
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a: department, b: department) => a.name.localeCompare(b.name),
      sortDirections: ["ascend", "descend"] as SortOrder[]
    }
  ];

  console.log(columns);

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
