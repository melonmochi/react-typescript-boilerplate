import * as React from "react";
import { shallow } from "enzyme";
import { AppLayout } from "@/components";

describe("NoFoundPage", () => {
  test("Snapshot", () => {
    const appLayout = shallow(<AppLayout />);
    expect(appLayout).toMatchSnapshot();
  });
});
