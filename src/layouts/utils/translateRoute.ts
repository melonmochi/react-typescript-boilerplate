import { TFunction } from "i18next";
import { Route } from "typings";

export const translateRoute: (t: TFunction, route: Route) => Route = (
  t,
  route
) => ({
  ...route,
  routes: translateRoutes(t, route.routes)
});

const translateRoutes: (t: TFunction, routes: Route[]) => Route[] = (
  t,
  routes
) =>
  routes.map(route => ({
    ...route,
    name: t(route.nameKey),
    children: route.children && translateRoutes(t, route.children)
  }));
