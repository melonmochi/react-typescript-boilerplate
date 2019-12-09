import * as React from "react";
import { shallow } from "enzyme";
import { BasicLayoutContextProvider } from "@/contexts";

describe("BasicLayoutContextProvider", () => {
  test("Snapshot", () => {
    const basicLayout = shallow(<BasicLayoutContextProvider />);
    expect(basicLayout).toMatchSnapshot();
  });
});
