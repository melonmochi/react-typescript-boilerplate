import React from "react";
import { Icon, Tooltip } from "antd";
import { Search } from "@/components/Input";
import LanguageDropdown from "./LanguageDropdown";
import { ConnectProps } from "@/models/connect";
import "./RightContent.less";

export type SiderTheme = "light" | "dark";
export interface GlobalHeaderRightProps extends ConnectProps {
  theme?: SiderTheme;
  layout?: "sidemenu" | "topmenu";
}

const RightContent: React.SFC<GlobalHeaderRightProps> = ({
  theme = "light",
  layout = "sidemenu"
}) => {
  let className = "right";

  if (theme === "dark" && layout === "topmenu") {
    className = `right  dark`;
  }

  return (
    <div className={className}>
      <Search
        className={"action search"}
        dataSource={[]}
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
        placeholder="Search"
      />
      <Tooltip title="Help">
        <a
          target="_blank"
          href="https://github.com/melonmochi/react-typescript-boilerplate"
          className={"action"}
        >
          <Icon type="question-circle-o" />
        </a>
      </Tooltip>
      <LanguageDropdown className={"action"} />
    </div>
  );
};

export default RightContent;
