import * as React from "react";
import { shallow } from "enzyme";
import { Footer } from "@/layouts";

describe("Footer", () => {
  const container = shallow(<Footer />);
  test("Snapshot", () => {
    expect(container).toMatchSnapshot();
  });
});
