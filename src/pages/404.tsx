import { Button, Result } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Here should use antd's 404 result component,
// But it hasn't been released yet. Let's start with a simple one.

const NoFoundPage: React.FC<{}> = () => {
  const { t } = useTranslation();
  let history = useHistory();
  const historyPush = (route: string) => history.push(route);
  const pushToRootPage = () => historyPush("/");
  return (
    <Result
      status="404"
      title={t("global.404.title")}
      subTitle={t("global.404.subTitle")}
      extra={
        <Button type="primary" onClick={pushToRootPage}>
          {t("button.backHome")}
        </Button>
      }
    />
  );
};

export default NoFoundPage;
