import classNames from "classnames";
import { AutoComplete, Icon, Input } from "antd";
import { AutoCompleteProps, DataSourceItemType } from "antd/es/auto-complete";
import React, { FC, useState } from "react";
import styles from "./Search.less";

export interface SearchProps {
  onPressEnter: (value: string) => void;
  onSearch: (value: string) => void;
  onChange: (value: string) => void;
  onVisibleChange: (b: boolean) => void;
  className: string;
  placeholder: string;
  defaultActiveFirstOption: boolean;
  dataSource: DataSourceItemType[];
  defaultOpen: boolean;
  open?: boolean;
  defaultValue?: string;
}

const Search: FC<SearchProps> = props => {
  const {
    className,
    defaultValue,
    onChange: propsOnChange,
    onSearch,
    onVisibleChange,
    placeholder
  } = props;
  const [value, setValue] = useState("");
  const [searchMode, setSearchMode] = useState(false);
  console.log(styles, styles.input);
  const inputClass = classNames(styles.input, { [styles.show]: searchMode });

  const enterSearchMode = () => {
    onVisibleChange(true);
    setSearchMode(true);
  };

  const leaveSearchMode = () => {
    setSearchMode(false);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      console.log("im entering");
    }
  };

  const onChange: AutoCompleteProps["onChange"] = value => {
    if (typeof value === "string") {
      setValue(value);
      if (onSearch) {
        onSearch(value);
      }
      if (propsOnChange) {
        propsOnChange(value);
      }
    }
  };

  return (
    <span
      className={classNames(className, "headerSearch")}
      onClick={enterSearchMode}
    >
      <Icon type="search" key="Icon" />
      <AutoComplete
        className={inputClass}
        key="Header Search AutoComplete"
        onChange={onChange}
        value={value}
      >
        <Input
          defaultValue={defaultValue}
          aria-label={placeholder}
          onBlur={leaveSearchMode}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
        />
      </AutoComplete>
    </span>
  );
};

export default Search;
