import * as React from "react";
import { shallow } from "enzyme";
import { NoFoundPage } from "@/pages";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe("NoFoundPage", () => {
  test("Snapshot", () => {
    const noFoundPage = shallow(<NoFoundPage />);
    expect(noFoundPage).toMatchSnapshot();
  });
});
