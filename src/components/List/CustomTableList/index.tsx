import React, { FC, useState, useEffect, useRef, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Table, Form, message, Input, Button, Icon, Popconfirm } from "antd";
import Highlighter from "react-highlight-words";
import {
  SortOrder,
  PaginationConfig,
  TableSize,
  TableProps
} from "antd/lib/table";
import { department } from "@/__mocks__/departments.d";
import { getDepartments } from "@/services/Api/departments";
import { EditableCell } from "./EditableCell";
import { Header as TableListHeader } from "./Header";
import styles from "./index.less";

export const expandedRowRender = (record: { name: React.ReactNode }) => (
  <p>{`Here is ${record.name}'s description`}</p>
);
export const showHeader = true;
const pagination = { position: "bottom" } as PaginationConfig;

export const EditableContext = React.createContext<any>({});

export interface TableListState {
  bordered: boolean;
  editingKey: React.ReactText;
  ellipsis: boolean;
  expandedRowRender: (record: { name: React.ReactNode }) => JSX.Element;
  footer?: () => string;
  hasData: boolean;
  loading: boolean;
  pagination: PaginationConfig | false;
  rowSelection: {};
  scroll?: {};
  searchedColumn: string;
  searchText: string;
  showHeader: boolean;
  size: TableSize;
  tableLayout: TableProps<any>["tableLayout"];
  title?: () => string;
}

const TableList: FC = () => {
  const {
    data: dataSource,
    isLoading,
    error,
    setData: setDataSource
  } = useGetDepartmentsApi();
  const [state, setState] = useState<TableListState>({
    bordered: false,
    editingKey: "",
    ellipsis: false,
    expandedRowRender,
    footer: undefined,
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
  const { t } = useTranslation();

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

  const searchInputRef = {
    deptNo: useRef(null),
    name: useRef(null)
  };

  const getColumnSearchProps = (
    dataIndex: string,
    searchInputRef: React.MutableRefObject<any>
  ) => ({
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
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
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
    ),
    filterIcon: (filtered: boolean) => (
      <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value: { toLowerCase: () => void }, record: any) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible: boolean) => {
      if (visible) {
        setTimeout(() => searchInputRef.current.select());
      }
    },
    render: (text: { toString: () => string }) =>
      state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      )
  });

  const isEditing = (record: department) => record.key === state.editingKey;

  const cancel = () => {
    setState({ ...state, editingKey: "" });
  };

  const save = (form: any, key: React.ReactText) => {
    form.validateFields((error: any, row: department) => {
      if (error) {
        return;
      }
      const newData = [...dataSource];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row
        });
        setDataSource(newData);
        setState({ ...state, editingKey: "" });
      } else {
        newData.push(row);
        setState({ ...state, editingKey: "" });
      }
    });
  };

  const edit = (key: React.ReactText) => {
    setState({ ...state, editingKey: key });
  };

  useEffect(() => {
    setState({ ...state, loading: isLoading });
  }, [isLoading]);

  useEffect(() => {
    error && message.info(error);
  }, [error]);

  const form = useContext(EditableContext);

  const columns = [
    {
      title: t("departments.columns.deptNo.title"),
      dataIndex: "deptNo",
      key: "deptNo",
      sorter: (a: department, b: department) =>
        a.deptNo.localeCompare(b.deptNo),
      sortDirections: ["ascend", "descend"] as SortOrder[],
      width: "30%",
      editable: true,
      ...getColumnSearchProps("deptNo", searchInputRef.deptNo)
    },
    {
      title: t("departments.columns.name.title"),
      dataIndex: "name",
      key: "name",
      sorter: (a: department, b: department) => a.name.localeCompare(b.name),
      sortDirections: ["ascend", "descend"] as SortOrder[],
      editable: true,
      ...getColumnSearchProps("name", searchInputRef.name)
    },
    {
      title: t("departments.columns.operation.title"),
      dataIndex: "operation",
      editable: false,
      render: (text: string, record: department) => {
        const { editingKey } = state;
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              onClick={() => save(form, record.key)}
              style={{ marginRight: 8 }}
            >
              {t("button.save")}
            </a>
            <Popconfirm
              okText={t("button.yes")}
              cancelText={t("button.no")}
              title={t("message.confim", {
                action: t("button.cancel").toLowerCase()
              })}
              onConfirm={cancel}
            >
              <a>{t("button.cancel")}</a>
            </Popconfirm>
          </span>
        ) : (
          <Button
            className={styles.editButton}
            disabled={editingKey !== ""}
            onClick={() => edit(record.key)}
            type="link"
          >
            {t("button.edit")}
          </Button>
        );
      }
    }
  ];

  const columnProps = columns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: department) => ({
        record,
        inputType: "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record)
      })
    };
  });

  const components = {
    body: {
      cell: EditableCell
    }
  };

  return (
    <>
      <TableListHeader state={state} setState={setState} />
      <Table
        {...state}
        columns={columnProps}
        components={components}
        dataSource={state.hasData ? dataSource : null}
      />
    </>
  );
};

interface ConnectedTableListProps {
  form: any;
}

export const ConnectedTableList: FC<ConnectedTableListProps> = props => {
  return (
    <EditableContext.Provider value={props.form}>
      <TableList />
    </EditableContext.Provider>
  );
};

const EditableTableList = Form.create()(ConnectedTableList);
export default EditableTableList;

export const useGetDepartmentsApi = () => {
  const [data, setData] = useState<department[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const result = await getDepartments();
      const data = result.data.map((department: any) => ({
        ...department,
        deptNo: department.dept_no,
        key: department.dept_no
      }));
      setData(data);
    } catch (error) {
      setError(JSON.parse(JSON.stringify(error)).message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error, setData };
};
