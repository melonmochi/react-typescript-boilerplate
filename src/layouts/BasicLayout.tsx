import React, { FC, useContext } from "react";
import ProLayout, {
  SettingDrawer,
  SettingDrawerProps,
  BasicLayoutProps
} from "@ant-design/pro-layout";
import logo from "../assets/logo.png";
import { BasicLayoutContext, BasicLayoutContextProvider } from "@/contexts";
import { Footer } from ".";
import { Link, RouteProps } from "react-router-dom";
import { RightContent } from "./Header";
import { mapComponent, translateRoute } from "./utils";
import { route } from "@/Routes";
import { useTranslation } from "react-i18next";

export const BasicLayout: FC = props => {
  const { state, dispatch, globalRef } = useContext(BasicLayoutContext);
  const { collapsed, settings } = state;
  const { t } = useTranslation();

  const breadcrumbRender: BasicLayoutProps["breadcrumbRender"] = (
    routers = []
  ) => [
    {
      path: "/",
      breadcrumbName: t("home")
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
    <div ref={globalRef}>
      <ProLayout
        breadcrumbRender={breadcrumbRender}
        collapsed={collapsed}
        footerRender={footerRender}
        itemRender={itemRender}
        logo={logo}
        menuItemRender={menuItemRender}
        menuHeaderRender={menuHeaderRender}
        onCollapse={handleMenuCollapse}
        rightContentRender={rightContentRender}
        route={translateRoute(t, route)}
        {...settings}
      >
        {props.children}
      </ProLayout>
      <SettingDrawer settings={settings} onSettingChange={onSettingChange} />
    </div>
  );
};

export const ConnectedBasicLayout: FC = (props: RouteProps) => {
  return (
    <BasicLayoutContextProvider>
      <BasicLayout {...props}>
        {props.location && mapComponent(props.location.pathname, route.routes)}
      </BasicLayout>
    </BasicLayoutContextProvider>
  );
};

export default ConnectedBasicLayout;
