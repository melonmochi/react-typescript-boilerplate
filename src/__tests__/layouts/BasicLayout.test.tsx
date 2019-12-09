import * as React from "react";
import { shallow } from "enzyme";
import ProLayout, { SettingDrawer } from "@ant-design/pro-layout";
import { BasicLayout, ConnectedBasicLayout } from "@/layouts/BasicLayout";

describe("BasicLayout", () => {
  describe("Without context", () => {
    const container = shallow(<BasicLayout />);
    test("Snapshot", () => {
      expect(container).toMatchSnapshot();
    });

    test("fires props actions", () => {
      const proLayout = container.find(ProLayout);
      const settingDrawer = container.find(SettingDrawer);
      proLayout.props().onCollapse(true);
      settingDrawer.props().onSettingChange({});
    });
  });

  describe("With Context", () => {
    const basicLayoutWithContext = shallow(<ConnectedBasicLayout />);
    test("Snapshot", () => {
      expect(basicLayoutWithContext).toMatchSnapshot();
    });
  });
});
