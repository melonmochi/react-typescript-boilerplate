import * as React from "react";
import { shallow } from "enzyme";
import { Input } from "antd";
import { Search } from "@/components/Input";

describe("Search", () => {
  const container = shallow(<Search />);
  test("Snapshot", () => {
    expect(container).toMatchSnapshot();
  });

  describe("Input", () => {
    const input = container.find(Input);
    test("onKeyDown", () => {
      input.simulate("keyDown", { key: "Enter" });
      input.simulate("keyDown", { key: "" });
    });
  });
});
