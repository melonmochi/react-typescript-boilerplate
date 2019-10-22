import * as React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import "./style";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const AppLayout = () => (
  <Layout>
    <Header>
      <Menu
        className="layout-header-menu"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: "#fff" }}>
        <Menu
          className="layout-sider-menu"
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                subnav 1
              </span>
            }
          >
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="layout-center">
        <Breadcrumb className="layout-center-breadcrumb">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content className="layout-center-content">Content</Content>
      </Layout>
    </Layout>
  </Layout>
);

export default AppLayout;
