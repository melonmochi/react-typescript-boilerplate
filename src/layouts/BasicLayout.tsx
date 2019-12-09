import React, { FC, useContext, useState } from "react";
import ProLayout, {
  SettingDrawer,
  BasicLayoutProps
} from "@ant-design/pro-layout";
import { BasicLayoutContext, BasicLayoutContextProvider } from "@/contexts";
import logo from "../assets/logo.png";
import Footer from "./Footer";

const footerRender: BasicLayoutProps["footerRender"] = () => <Footer />;

export const BasicLayout: FC = () => {
  const { state, dispatch } = useContext(BasicLayoutContext);
  const [settings, setSettings] = useState({});
  const { collapsed } = state;

  const handleMenuCollapse = (payload: boolean): void => {
    dispatch({ type: "CHANGE_COLLAPSED", payload });
  };

  const onSettingChange = (config: React.SetStateAction<{}>) =>
    setSettings(config);

  return (
    <>
      <ProLayout
        collapsed={collapsed}
        footerRender={footerRender}
        logo={logo}
        onCollapse={handleMenuCollapse}
        title="React ❤️ TS"
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
