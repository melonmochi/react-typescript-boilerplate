declare module "*.png";

declare module "typings" {
  namespace Action {
    export type TODO_ACTION = { type: "TODO_ACTION" };
  }
  type Action = Action.TODO_ACTION;
}
