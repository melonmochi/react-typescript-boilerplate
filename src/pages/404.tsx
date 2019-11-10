import { Button, Result } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

// Here should use antd's 404 result component,
// But it hasn't been released yet. Let's start with a simple one.

const NoFoundPage: React.FC<{}> = () => {
  let history = useHistory();
  const historyPush = (route: string) => history.push(route);
  const pushToRootPage = () => historyPush("/");
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={pushToRootPage}>
          Back Home
        </Button>
      }
    />
  );
};

export default NoFoundPage;
