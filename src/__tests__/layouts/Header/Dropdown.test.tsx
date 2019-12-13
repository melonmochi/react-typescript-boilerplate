import * as React from "react";
import { shallow } from "enzyme";
import { Dropdown } from "@/layouts/Header";
import { Language } from "@/components/Selector";

describe("Dropdown", () => {
  const container = shallow(<Dropdown overlay={Language} />);
  test("Snapshot", () => {
    expect(container).toMatchSnapshot();
  });
});
