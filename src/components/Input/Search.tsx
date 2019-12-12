import React, { Component } from "react";
import classNames from "classnames";
import { AutoComplete, Icon, Input } from "antd";
import { AutoCompleteProps, DataSourceItemType } from "antd/es/auto-complete";
import "./Search.less";

export interface SearchProps {
  onPressEnter: (value: string) => void;
  onSearch: (value: string) => void;
  onChange: (value: string) => void;
  onVisibleChange: (b: boolean) => void;
  className: string;
  placeholder: string;
  defaultActiveFirstOption: boolean;
  dataSource?: DataSourceItemType[];
  defaultOpen: boolean;
  open?: boolean;
  defaultValue?: string;
}

interface SearchState {
  value?: string;
  searchMode: boolean;
}

class Search extends Component<SearchProps, SearchState> {
  static defaultProps = {
    defaultActiveFirstOption: false,
    onPressEnter: () => {},
    onSearch: () => {},
    onChange: () => {},
    className: "",
    placeholder: "",
    defaultOpen: false,
    onVisibleChange: () => {}
  };
  private inputRef: Input | null = null;

  constructor(props: SearchProps) {
    super(props);
    this.state = {
      searchMode: props.defaultOpen,
      value: props.defaultValue
    };
  }

  enterSearchMode = () => {
    const { onVisibleChange } = this.props;
    onVisibleChange(true);
    this.setState({ searchMode: true }, () => {
      const { searchMode } = this.state;
      if (searchMode && this.inputRef) {
        this.inputRef.focus();
      }
    });
  };

  leaveSearchMode = () => {
    this.setState({
      searchMode: false
    });
  };

  onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      console.log("im entering");
    }
  };

  onChange: AutoCompleteProps["onChange"] = value => {
    if (typeof value === "string") {
      const { onSearch, onChange } = this.props;
      this.setState({ value });
      if (onSearch) {
        onSearch(value);
      }
      if (onChange) {
        onChange(value);
      }
    }
  };

  render() {
    const { className, defaultValue, placeholder } = this.props;
    const { searchMode, value } = this.state;
    const inputClass = classNames("input", { show: searchMode });
    return (
      <span
        className={classNames(className, "headerSearch")}
        onClick={this.enterSearchMode}
      >
        <Icon type="search" key="Icon" />
        <AutoComplete
          className={inputClass}
          key="Header Search AutoComplete"
          onChange={this.onChange}
          value={value}
        >
          <Input
            defaultValue={defaultValue}
            aria-label={placeholder}
            onBlur={this.leaveSearchMode}
            onKeyDown={this.onKeyDown}
            placeholder={placeholder}
            ref={node => {
              this.inputRef = node;
            }}
          />
        </AutoComplete>
      </span>
    );
  }
}

export default Search;
