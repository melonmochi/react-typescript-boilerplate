import * as React from "react";
import { shallow } from "enzyme";
import { BasicLayout } from "@/layouts";

describe("BasicLayout", () => {
  test("Snapshot", () => {
    const basicLayout = shallow(<BasicLayout />);
    expect(basicLayout).toMatchSnapshot();
  });
});
