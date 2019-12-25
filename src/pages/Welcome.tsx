import React, { FC } from "react";
import { PageHeaderWrapper } from "@ant-design/pro-layout";
import { Card, Typography, Alert } from "antd";

import styles from "./Welcome.less";
import { useTranslation } from "react-i18next";

const CodePreview: React.FC<{}> = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const Welcome: FC<{}> = () => {
  const { t } = useTranslation();
  return (
    <PageHeaderWrapper>
      <Card>
        <Alert
          message={t("welcome.message")}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24
          }}
        />
        <Typography.Text strong>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.typescriptlang.org"
          >
            {t("welcome.messageDesc")}
          </a>
        </Typography.Text>
        <CodePreview>
          git archive
          --remote="git@github.com:melonmochi/react-typescript-boilerplate.git"
          HEAD | tar -x
        </CodePreview>
      </Card>
      <p style={{ textAlign: "center", marginTop: 24 }}>
        {t("welcome.messageObs")}
      </p>
    </PageHeaderWrapper>
  );
};

export default Welcome;
