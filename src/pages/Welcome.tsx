import React, { FC } from "react";
import { PageHeaderWrapper } from "@ant-design/pro-layout";
import { Card, Typography, Alert } from "antd";

import styles from "./Welcome.less";

const CodePreview: React.FC<{}> = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const Welcome: FC<{}> = () => (
  <PageHeaderWrapper>
    <Card>
      <Alert
        message="React TypeScript Boilerplate is now available, click the logo icon in the top left corner to check the source code"
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
          Quickly build standard pages development based on TypeScript.
        </a>
      </Typography.Text>
      <CodePreview>
        git archive
        --remote="git@github.com:melonmochi/react-typescript-boilerplate.git"
        HEAD | tar -x
      </CodePreview>
    </Card>
    <p style={{ textAlign: "center", marginTop: 24 }}>
      Want to add more pages? Please wait for publication of handbook.
    </p>
  </PageHeaderWrapper>
);

export default Welcome;
