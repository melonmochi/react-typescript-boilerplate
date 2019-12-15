import React, { FC, useContext } from "react";
import ProLayout, {
  SettingDrawer,
  SettingDrawerProps,
  BasicLayoutProps,
  MenuDataItem
} from "@ant-design/pro-layout";
import { BasicLayoutContext, BasicLayoutContextProvider } from "@/contexts";
import logo from "../assets/logo.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { RightContent } from "./Header";
import Welcome from "@/pages/Welcome";

export const menuData = [
  {
    path: "/dashboard",
    name: "dashboard",
    icon: "dashboard",
    children: [
      {
        path: "/dashboard/analysis",
        name: "analysis",
        icon: "dashboard",
        exact: true,
        component: Welcome
      }
    ]
  }
];

export const BasicLayout: FC = props => {
  const { children } = props;
  const { state, dispatch } = useContext(BasicLayoutContext);
  const { collapsed, settings } = state;

  const breadcrumbRender: BasicLayoutProps["breadcrumbRender"] = (
    routers = []
  ) => [
    {
      path: "/",
      breadcrumbName: "Home"
    },
    ...routers
  ];

  const footerRender: BasicLayoutProps["footerRender"] = () => <Footer />;

  const handleMenuCollapse = (payload: boolean): void => {
    dispatch({ type: "CHANGE_COLLAPSED", payload });
  };

  const itemRender: BasicLayoutProps["itemRender"] = (
    route,
    params,
    routes,
    paths
  ) => {
    const first = routes.indexOf(route) === 0;
    return first ? (
      <Link to={paths.join("/")}>{route.breadcrumbName}</Link>
    ) : (
      <span>{route.breadcrumbName}</span>
    );
  };

  const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] =>
    menuList.map(item => {
      const localItem = {
        ...item,
        children: item.children ? menuDataRender(item.children) : []
      };
      return localItem as MenuDataItem;
    });

  const menuHeaderRender: BasicLayoutProps["menuHeaderRender"] = (
    logoDom,
    titleDom
  ) => (
    <Link to="/">
      {logoDom}
      {titleDom}
    </Link>
  );

  const menuItemRender: BasicLayoutProps["menuItemRender"] = (
    menuItemProps,
    defaultDom
  ) => {
    if (menuItemProps.isUrl || menuItemProps.children) {
      return defaultDom;
    }
    return <Link to={menuItemProps.path}>{defaultDom}</Link>;
  };

  const onSettingChange: SettingDrawerProps["onSettingChange"] = settings => {
    dispatch({ type: "CHANGE_SETTINGS", payload: settings });
  };
  const rightContentRender: BasicLayoutProps["rightContentRender"] = rightProps => (
    <RightContent {...rightProps} />
  );

  return (
    <>
      <ProLayout
        breadcrumbRender={breadcrumbRender}
        collapsed={collapsed}
        footerRender={footerRender}
        itemRender={itemRender}
        logo={logo}
        menuDataRender={menuDataRender}
        menuItemRender={menuItemRender}
        menuHeaderRender={menuHeaderRender}
        onCollapse={handleMenuCollapse}
        rightContentRender={rightContentRender}
        {...settings}
      >
        {children}
      </ProLayout>
      <SettingDrawer settings={settings} onSettingChange={onSettingChange} />
    </>
  );
};

export const ConnectedBasicLayout: FC = () => {
  return (
    <BasicLayoutContextProvider>
      <BasicLayout />
    </BasicLayoutContextProvider>
  );
};

export default ConnectedBasicLayout;
