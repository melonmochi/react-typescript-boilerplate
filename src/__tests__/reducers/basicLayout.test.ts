import { reducers } from "@/reducers/basicLayout";

describe("basicLayout reducers", () => {
  const defaultState = {
    collapsed: false
  };
  test("case CHANGE_COLLAPSED", () => {
    expect(
      reducers(defaultState, { type: "CHANGE_COLLAPSED", payload: true })
    ).toEqual({ ...defaultState, collapsed: true });
  });
  test("case CHANGE_SETTINGS", () => {
    const mockSettings = {};
    expect(
      reducers(defaultState, { type: "CHANGE_SETTINGS", payload: mockSettings })
    ).toEqual({ ...defaultState, settings: mockSettings });
  });
});
