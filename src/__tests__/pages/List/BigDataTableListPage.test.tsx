import * as React from "react";
import { shallow } from "enzyme";
import { BigDataTableListPage } from "@/pages";

describe("BigDataTableListPage", () => {
  const bigDataTableListPage = shallow(<BigDataTableListPage />);
  test("Snapshot", () => {
    expect(bigDataTableListPage).toMatchSnapshot();
  });
});
