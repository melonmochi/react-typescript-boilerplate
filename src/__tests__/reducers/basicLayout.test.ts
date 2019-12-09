import { reducers } from "@/reducers/basicLayout";
import { BasicLayout as BasicLayoutType, BasicLayout } from "typings";

describe("basicLayout reducers", () => {
  test("case CHANGE_COLLAPSED", () => {
    expect(
      reducers(
        { collapsed: false },
        { type: "CHANGE_COLLAPSED", payload: true }
      )
    ).toEqual({ collapsed: true });
  });
});
