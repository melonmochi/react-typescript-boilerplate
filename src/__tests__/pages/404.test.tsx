import * as React from "react";
import { shallow } from "enzyme";
import { NoFoundPage } from "@/pages";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe("NoFoundPage", () => {
  const container = shallow(<NoFoundPage />);
  test("Snapshot", () => {
    expect(NoFoundPage).toMatchSnapshot();
  });

  test("fires props actions", () => {
    const button = container.props().extra;
    button.props.onClick();
  });
});
