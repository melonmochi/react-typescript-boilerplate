import { SettingDrawerProps } from "@ant-design/pro-layout";

export module BasicLayout {
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
    globalRef?: React.MutableRefObject<HTMLDivElement>;
  }
}
