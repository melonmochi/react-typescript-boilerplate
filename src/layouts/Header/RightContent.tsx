import React from "react";
import { useTranslation } from "react-i18next";
import { Icon, Tooltip } from "antd";
import { Search } from "@/components/Input";
import { LanguageDropdown } from ".";
import { ConnectProps } from "typings";
import styles from "./RightContent.less";

export type SiderTheme = "light" | "dark";
export type SiderLayout = "sidemenu" | "topmenu";
export interface GlobalHeaderRightProps extends ConnectProps {
  theme?: SiderTheme;
  layout?: SiderLayout;
}

const RightContent: React.SFC<GlobalHeaderRightProps> = props => {
  const { theme, layout } = props;
  const { t } = useTranslation();
  let className = styles.right;

  if (theme === "dark" && layout === "topmenu") {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <div className={className}>
      <Search
        className={`${styles.action} ${styles.search}`}
        defaultActiveFirstOption={false}
        defaultOpen={false}
        // tslint:disable-next-line:jsx-no-lambda
        onChange={value => {
          console.log("change", value);
        }}
        // tslint:disable-next-line:jsx-no-lambda
        onSearch={value => {
          console.log("input", value);
        }}
        // tslint:disable-next-line:jsx-no-lambda
        onPressEnter={value => {
          console.log("enter", value);
        }}
        placeholder={t("placeholder.search")}
      />
      <Tooltip title={t("common.help")}>
        <a
          target="_blank"
          href="https://github.com/melonmochi/react-typescript-boilerplate"
          className={styles.action}
        >
          <Icon type="question-circle-o" />
        </a>
      </Tooltip>
      <LanguageDropdown className={styles.action} />
    </div>
  );
};

export default RightContent;
