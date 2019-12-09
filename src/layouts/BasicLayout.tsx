import React, { FC, useContext, useState } from "react";
import ProLayout, {
  SettingDrawer,
  SettingDrawerProps,
  BasicLayoutProps as ProLayoutProps
} from "@ant-design/pro-layout";
import { BasicLayoutContext, BasicLayoutContextProvider } from "@/contexts";
import logo from "../assets/logo.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { RightContent } from "./Header";

export interface BasicLayoutProps extends ProLayoutProps {
  settings?: SettingDrawerProps["settings"];
}

export const BasicLayout: FC<BasicLayoutProps> = props => {
  const { settings } = props;
  const { state, dispatch } = useContext(BasicLayoutContext);
  const { collapsed } = state;

  const footerRender: BasicLayoutProps["footerRender"] = () => <Footer />;

  const handleMenuCollapse = (payload: boolean): void => {
    dispatch({ type: "CHANGE_COLLAPSED", payload });
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

  const onSettingChange: SettingDrawerProps["onSettingChange"] = settings => {
    dispatch({ type: "CHANGE_SETTINGS", payload: settings });
  };

  const rightContentRender: BasicLayoutProps["rightContentRender"] = rightProps => (
    <RightContent {...rightProps} />
  );

  return (
    <>
      <ProLayout
        collapsed={collapsed}
        footerRender={footerRender}
        logo={logo}
        menuHeaderRender={menuHeaderRender}
        onCollapse={handleMenuCollapse}
        rightContentRender={rightContentRender}
        title="React TypeScript"
      />
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
