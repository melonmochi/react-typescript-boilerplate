import { BasicLayout } from "typings";

export const reducers = (
  state: BasicLayout.State,
  action: BasicLayout.Action
) => {
  switch (action.type) {
    case "CHANGE_COLLAPSED":
      return ChangeCollapsed(state, action);
    case "CHANGE_SETTINGS":
      return ChangeSettings(state, action);
  }
};

const ChangeCollapsed = (
  state: BasicLayout.State,
  action: BasicLayout.Action.CHANGE_COLLAPSED
) => {
  return { ...state, collapsed: action.payload };
};

const ChangeSettings = (
  state: BasicLayout.State,
  action: BasicLayout.Action.CHANGE_SETTINGS
) => {
  return { ...state, settings: action.payload };
};
