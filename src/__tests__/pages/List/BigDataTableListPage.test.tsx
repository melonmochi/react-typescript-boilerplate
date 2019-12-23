import * as React from "react";
import { shallow } from "enzyme";
import { BigDataTableListPage } from "@/pages";

jest.mock("react-router", () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe("BigDataTableListPage", () => {
  const bigDataTableListPage = shallow(<BigDataTableListPage />);
  test("Snapshot", () => {
    expect(bigDataTableListPage).toMatchSnapshot();
  });
});
