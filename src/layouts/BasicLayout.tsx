import React, { useState, Suspense } from "react";
import ProLayout, { SettingDrawer } from "@ant-design/pro-layout";
import logo from "../assets/logo.png";

const BasicLayout: React.FC = () => {
  const [settings, setSettings] = useState({});

  const onSettingChange = (config: React.SetStateAction<{}>) =>
    setSettings(config);

  return (
    <>
      <Suspense fallback="loading">
        <ProLayout logo={logo} title="React ❤️ TS" />
      </Suspense>
      <SettingDrawer settings={settings} onSettingChange={onSettingChange} />
    </>
  );
};

export default BasicLayout;
