import * as React from "react";
import { shallow } from "enzyme";
import { Language } from "@/components/Selector";

describe("Search", () => {
  const container = shallow(<Language />);
  test("Snapshot", () => {
    expect(container).toMatchSnapshot();
  });
});
