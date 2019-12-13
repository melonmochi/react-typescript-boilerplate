import * as React from "react";
import { shallow } from "enzyme";
import { LanguageDropdown } from "@/layouts/Header";

describe("LanguageDropdown", () => {
  const container = shallow(<LanguageDropdown />);
  test("Snapshot", () => {
    expect(container).toMatchSnapshot();
  });
});
