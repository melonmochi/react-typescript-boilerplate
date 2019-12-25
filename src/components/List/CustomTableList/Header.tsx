import React, { FC, Dispatch } from "react";
import { Form, Switch, Radio } from "antd";
import { RadioChangeEvent } from "antd/lib/radio";
import { TableListState, showHeader, expandedRowRender } from ".";
import { useTranslation } from "react-i18next";

const scroll = { y: 240 };

interface HeaderProps {
  state: TableListState;
  setState: Dispatch<React.SetStateAction<TableListState>>;
}

export const Header: FC<HeaderProps> = props => {
  const { state, setState } = props;
  const { t } = useTranslation();

  const title = () => t("mock.title");
  const footer = () => t("mock.footer");

  const handleToggle = (prop: any) => (enable: boolean) => {
    setState({ ...state, [prop]: enable });
  };

  const handleSizeChange = (e: RadioChangeEvent) => {
    setState({ ...state, size: e.target.value });
  };

  const handleTableLayoutChange = (e: RadioChangeEvent) => {
    setState({ ...state, tableLayout: e.target.value });
  };

  const handleExpandChange = (enable: boolean) => {
    setState({
      ...state,
      expandedRowRender: enable ? expandedRowRender : undefined
    });
  };

  const handleEllipsisChange = (enable: boolean) => {
    setState({ ...state, ellipsis: enable });
  };

  const handleTitleChange = (enable: boolean) => {
    setState({ ...state, title: enable ? title : undefined });
  };

  const handleHeaderChange = (enable: boolean) => {
    setState({ ...state, showHeader: enable ? showHeader : false });
  };

  const handleFooterChange = (enable: boolean) => {
    setState({ ...state, footer: enable ? footer : undefined });
  };

  const handleRowSelectionChange = (enable: boolean) => {
    setState({ ...state, rowSelection: enable ? {} : undefined });
  };

  const handleScollChange = (enable: boolean) => {
    setState({ ...state, scroll: enable ? scroll : undefined });
  };

  const handleDataChange = (hasData: boolean) => {
    setState({ ...state, hasData });
  };

  const handlePaginationChange = (e: RadioChangeEvent) => {
    const { value } = e.target;
    setState({
      ...state,
      pagination: value === "none" ? false : { position: value }
    });
  };

  return (
    <Form
      layout="inline"
      className="components-table-demo-control-bar"
      style={{ marginBottom: 16 }}
    >
      <Form.Item label={t("tableConfig.bordered")}>
        <Switch checked={state.bordered} onChange={handleToggle("bordered")} />
      </Form.Item>
      <Form.Item label={t("tableConfig.loading")}>
        <Switch checked={state.loading} onChange={handleToggle("loading")} />
      </Form.Item>
      <Form.Item label={t("tableConfig.title")}>
        <Switch checked={!!state.title} onChange={handleTitleChange} />
      </Form.Item>
      <Form.Item label={t("tableConfig.columnHeader")}>
        <Switch checked={!!state.showHeader} onChange={handleHeaderChange} />
      </Form.Item>
      <Form.Item label={t("tableConfig.footer")}>
        <Switch checked={!!state.footer} onChange={handleFooterChange} />
      </Form.Item>
      <Form.Item label={t("tableConfig.expandable")}>
        <Switch
          checked={!!state.expandedRowRender}
          onChange={handleExpandChange}
        />
      </Form.Item>
      <Form.Item label={t("tableConfig.checkbox")}>
        <Switch
          checked={!!state.rowSelection}
          onChange={handleRowSelectionChange}
        />
      </Form.Item>
      <Form.Item label={t("tableConfig.fixedHeader")}>
        <Switch checked={!!state.scroll} onChange={handleScollChange} />
      </Form.Item>
      <Form.Item label={t("tableConfig.hasData")}>
        <Switch checked={!!state.hasData} onChange={handleDataChange} />
      </Form.Item>
      <Form.Item label={t("tableConfig.ellipsis")}>
        <Switch checked={!!state.ellipsis} onChange={handleEllipsisChange} />
      </Form.Item>
      <Form.Item label={t("tableConfig.size.title")}>
        <Radio.Group value={state.size} onChange={handleSizeChange}>
          <Radio.Button value="default">
            {t("tableConfig.size.default")}
          </Radio.Button>
          <Radio.Button value="middle">
            {t("tableConfig.size.middle")}
          </Radio.Button>
          <Radio.Button value="small">
            {t("tableConfig.size.small")}
          </Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label={t("tableConfig.tableLayout.title")}>
        <Radio.Group
          value={state.tableLayout}
          onChange={handleTableLayoutChange}
        >
          <Radio.Button value={undefined}>
            {t("tableConfig.tableLayout.unset")}
          </Radio.Button>
          <Radio.Button value="fixed">
            {t("tableConfig.tableLayout.fixed")}
          </Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label={t("tableConfig.pagination.title")}>
        <Radio.Group
          value={state.pagination ? state.pagination.position : "none"}
          onChange={handlePaginationChange}
        >
          <Radio.Button value="top">
            {t("tableConfig.pagination.top")}
          </Radio.Button>
          <Radio.Button value="bottom">
            {t("tableConfig.pagination.bottom")}
          </Radio.Button>
          <Radio.Button value="both">
            {t("tableConfig.pagination.both")}
          </Radio.Button>
          <Radio.Button value="none">
            {t("tableConfig.pagination.none")}
          </Radio.Button>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};
