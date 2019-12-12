import * as React from "react";
import { shallow } from "enzyme";
import ProLayout from "@ant-design/pro-layout";
import { BasicLayout, ConnectedBasicLayout } from "@/layouts/BasicLayout";

describe("BasicLayout", () => {
  describe("Without context", () => {
    const container = shallow(<BasicLayout />);
    test("Snapshot", () => {
      expect(container).toMatchSnapshot();
    });

    describe("fires props actions", () => {
      describe("ProLayout", () => {
        const proLayout = container.find(ProLayout);
        test("onCollapse", () => {
          proLayout.props().onCollapse(true);
        });
        test("footerRender", () => {
          const footerRender = proLayout.props().footerRender;
          footerRender && footerRender({}, null);
        });
      });
    });
  });

  describe("With Context", () => {
    const basicLayoutWithContext = shallow(<ConnectedBasicLayout />);
    test("Snapshot", () => {
      expect(basicLayoutWithContext).toMatchSnapshot();
    });
  });
});
