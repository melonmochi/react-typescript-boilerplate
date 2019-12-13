import * as React from "react";
import { shallow } from "enzyme";
import { RightContent } from "@/layouts/Header";
import { Search } from "@/components/Input";
import { SiderTheme, SiderLayout } from "@/layouts/Header/RightContent";

describe("RightContent", () => {
  describe("Default props", () => {
    const container = shallow(<RightContent />);
    test("Snapshot", () => {
      expect(container).toMatchSnapshot();
    });

    describe("Search", () => {
      const search = container.find(Search);
      test("onChange", () => {
        search.props().onChange("text");
      });
      test("onSearch", () => {
        search.props().onSearch("text");
      });
      test("onPressEnter", () => {
        search.props().onPressEnter("text");
      });
    });
  });

  describe("Alternative props", () => {
    const props = {
      theme: "dark" as SiderTheme,
      layout: "topmenu" as SiderLayout
    };
    const container = shallow(<RightContent {...props} />);
    test("Snapshot", () => {
      expect(container).toMatchSnapshot();
    });
  });
});
