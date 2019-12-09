import { BasicLayout } from "typings";

export const reducers = (
  state: BasicLayout.State,
  action: BasicLayout.Action
) => {
  switch (action.type) {
    case "CHANGE_COLLAPSED":
      return ChangeCollapsed(state, action);
  }
};

const ChangeCollapsed = (
  state: BasicLayout.State,
  action: BasicLayout.Action.CHANGE_COLLAPSED
) => {
  return { ...state, collapsed: action.payload };
};
