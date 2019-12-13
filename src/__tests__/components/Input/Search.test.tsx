import * as React from "react";
import { mount, shallow } from "enzyme";
import { AutoComplete, Input } from "antd";
import { Search } from "@/components/Input";

describe("Search", () => {
  describe("Mount", () => {
    const container = mount(<Search />);
    test("Snapshot", () => {
      expect(container).toMatchSnapshot();
    });

    test("onPressEnter", () => {
      container.props().onPressEnter();
    });

    describe("span", () => {
      const span = container.find("span").at(0);
      describe("AutoComplete", () => {
        const autoComplete = container.find(AutoComplete);
        test("onChange", () => {
          autoComplete.props().onChange("text");
          autoComplete.props().onChange(0);
        });
        describe("Input", () => {
          const input = autoComplete.find(Input);
          test("onBlur", () => {
            input.simulate("blur");
          });
          test("onKeyDown", () => {
            input.simulate("keyDown", { key: "Enter" });
            input.simulate("keyDown", { key: "" });
          });
          test("span onClick", () => {
            span.simulate("click");
          });
        });
      });
    });
  });

  describe("Shallow", () => {
    const container = shallow(<Search />);
    describe("span", () => {
      const span = container.find("span");
      test("span onClick", () => {
        span.simulate("click");
      });
    });
  });
});
