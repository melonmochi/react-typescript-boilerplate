import React, { Component } from "react";
import classNames from "classnames";
import { AutoComplete, Icon, Input } from "antd";
import { AutoCompleteProps, DataSourceItemType } from "antd/es/auto-complete";
import styles from "./Search.less";

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

  getRefValue = (node: Input) => {
    this.inputRef = node;
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
      onSearch(value);
      onChange(value);
    }
  };

  render() {
    const { className, defaultValue, placeholder } = this.props;
    const { searchMode, value } = this.state;
    const inputClass = classNames(styles.input, { [styles.show]: searchMode });
    return (
      <span
        className={classNames(className, styles.search)}
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
            ref={this.getRefValue}
          />
        </AutoComplete>
      </span>
    );
  }
}

export default Search;
