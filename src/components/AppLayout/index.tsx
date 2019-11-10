import * as React from "react";
import { useTranslation } from "react-i18next";
import ProLayout from "@ant-design/pro-layout";

const AppLayout: React.FC = () => {
  const [t, i18n] = useTranslation();
  return <ProLayout title={t("global.title")} />;
};

export default AppLayout;
