import { reducers } from "@/reducers/basicLayout";

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
