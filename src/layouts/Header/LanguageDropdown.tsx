import React from "react";
import classNames from "classnames";
import { Icon } from "antd";
import { Language } from "@/components/Selector";
import Dropdown from "./Dropdown";
import "./LanguageDropdown.less";

interface LanguageDropdownProps {
  className?: string;
}
const LanguageDropdown: React.FC<LanguageDropdownProps> = props => {
  const { className } = props;
  return (
    <Dropdown overlay={Language} placement="bottomRight">
      <span className={classNames("dropdown", className)}>
        <Icon type="global" title={"Languages"} />
      </span>
    </Dropdown>
  );
};

export default LanguageDropdown;
