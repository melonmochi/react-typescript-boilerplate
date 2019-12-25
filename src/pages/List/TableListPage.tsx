import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { PageHeaderWrapper } from "@ant-design/pro-layout";
import { Icon, Button, Typography } from "antd";
import CountUp from "react-countup";
import { TableList } from "@/components/List";
import { useGetEmployees } from "@/hooks/services";
const { Text } = Typography;

import avatarSrc from "../../assets/jazz.png";

export const TableListPage: FC<{}> = () => {
  const { t } = useTranslation();
  let history = useHistory();
  const { data } = useGetEmployees();
  return (
    <PageHeaderWrapper
      extra={[
        <Button key="1">{t("mock.operation", { number: 1 })}</Button>,
        <Button key="2">{t("mock.operation", { number: 2 })}</Button>,
        <Button key="3" type="primary">
          {t("mock.operation", { number: 3 })}
        </Button>
      ]}
      avatar={{ src: avatarSrc }}
      subTitle={
        <Text strong>{data ? <CountUp end={data.totalCount} /> : 0}</Text>
      }
      onBack={() => history.goBack()}
      backIcon={<Icon type="left" />}
    >
      <TableList />
    </PageHeaderWrapper>
  );
};
