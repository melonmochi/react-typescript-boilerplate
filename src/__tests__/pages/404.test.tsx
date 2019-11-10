import * as React from "react";
import { shallow } from "enzyme";
import { NoFoundPage } from "@/pages";

describe("NoFoundPage", () => {
  test("Snapshot", () => {
    const noFoundPage = shallow(<NoFoundPage />);
    expect(noFoundPage).toMatchSnapshot();
  });
});
