import * as React from "react";
import { Route } from "typings";
import {
  CustomTableListPage,
  NoFoundPage,
  TableListPage,
  Welcome
} from "@/pages";

export const route: Route = {
  path: "/",
  routes: [
    {
      path: "/welcome",
      nameKey: "welcome.title",
      icon: "smile",
      component: <Welcome />
    },
    {
      path: "/global",
      nameKey: "global.title",
      icon: "html5",
      children: [
        {
          path: "/global/404",
          nameKey: "global.404.title",
          icon: "warning",
          component: <NoFoundPage />
        }
      ]
    },
    {
      path: "/list",
      nameKey: "list.title",
      icon: "unordered-list",
      children: [
        {
          nameKey: "list.listTable",
          icon: "cloud-server",
          path: "/list/list-table",
          component: <TableListPage />
        },
        {
          nameKey: "list.customListTable",
          icon: "solution",
          path: "/list/custom-list-table",
          component: <CustomTableListPage />
        }
      ]
    }
  ]
};
