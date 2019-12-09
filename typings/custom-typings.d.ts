declare module "*.png";
declare module "*.less";

declare module "typings" {
  import { SettingDrawerProps } from "@ant-design/pro-layout";
  namespace Action {
    type TODO_ACTION = { type: "TODO_ACTION" };
  }
  type Action = Action.TODO_ACTION;
  module BasicLayout {
    namespace Action {
      type CHANGE_COLLAPSED = { type: "CHANGE_COLLAPSED"; payload: boolean };
      type CHANGE_SETTINGS = {
        type: "CHANGE_SETTINGS";
        payload: SettingDrawerProps["settings"];
      };
    }
    type Action = Action.CHANGE_COLLAPSED | Action.CHANGE_SETTINGS;
    type State = {
      collapsed: boolean;
      settings?: SettingDrawerProps["settings"];
    };
    type Dispatch = (a: Action) => void;
    interface Interface {
      state: State;
      dispatch: Dispatch;
    }
  }

  type StringObject = { [key: string]: string };
}
