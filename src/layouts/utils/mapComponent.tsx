import { Route } from "typings";

const parsePath = (pathname: string) => {
  const pathArr = pathname.split("/").splice(1);
  return { menu: pathArr[0], submenu: pathArr[1] };
};

export default (path: string, routes: Route[]): JSX.Element => {
  const { menu, submenu } = parsePath(path);
  const route = routes.find(route => parsePath(route.path).menu === menu);
  if (submenu) {
    return route.children.find(
      route => parsePath(route.path).submenu === submenu
    ).component;
  }
  return route.component;
};
