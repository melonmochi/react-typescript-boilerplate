import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ProLayout, { SettingDrawer } from "@ant-design/pro-layout";
import logo from "../assets/logo.png";

const BasicLayout: React.FC = () => {
  const [t] = useTranslation();
  const [settings, setSettings] = useState({});

  const onSettingChange = (config: React.SetStateAction<{}>) =>
    setSettings(config);

  return (
    <>
      <ProLayout logo={logo} title={t("global.title")} />
      <SettingDrawer settings={settings} onSettingChange={onSettingChange} />
    </>
  );
};

export default BasicLayout;
