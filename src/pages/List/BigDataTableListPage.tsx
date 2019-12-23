import React, { FC } from "react";
import { PageHeaderWrapper } from "@ant-design/pro-layout";
import { BigDataTableList } from "@/components/List";
import { useHistory } from "react-router";
import { Icon, Button } from "antd";

import avatarSrc from "../../assets/jazz.png";

export const BigDataTableListPage: FC<{}> = () => {
  let history = useHistory();
  return (
    <PageHeaderWrapper
      extra={[
        <Button key="1">Operation 1</Button>,
        <Button key="2">Operation 2 </Button>,
        <Button key="3" type="primary">
          Operation 3
        </Button>
      ]}
      avatar={{ src: avatarSrc }}
      subTitle="This is an awesome table list"
      onBack={() => history.goBack()}
      backIcon={<Icon type="left" />}
    >
      <BigDataTableList />
    </PageHeaderWrapper>
  );
};
