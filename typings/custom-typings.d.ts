declare module "*.png";

declare module "typings" {
  namespace Action {
    type TODO_ACTION = { type: "TODO_ACTION" };
  }
  type Action = Action.TODO_ACTION;
  module BasicLayout {
    namespace Action {
      type CHANGE_COLLAPSED = { type: "CHANGE_COLLAPSED"; payload: boolean };
    }
    type Action = Action.CHANGE_COLLAPSED;
    type State = {
      collapsed: boolean;
    };
    type Dispatch = (a: Action) => void;
    interface Interface {
      state: State;
      dispatch: Dispatch;
    }
  }
}
