import React from "react";
import { mapComponent } from "@/layouts/utils";
import { route } from "@/Routes";
import { Welcome } from "@/pages";

describe("mapComponent", () => {
  const path = "/welcome";
  const routes = route.routes;
  test("Return expected value", () => {
    expect(mapComponent(path, routes)).toEqual(<Welcome />);
  });
});
