import * as React from "react";
import { Route } from "typings";
import {
  NoFoundPage,
  Welcome,
  TableListPage,
  BigDataTableListPage
} from "@/pages";

export const route: Route = {
  path: "/",
  routes: [
    {
      path: "/welcome",
      nameKey: "welcome",
      icon: "smile",
      component: <Welcome />
    },
    {
      path: "/global",
      nameKey: "global.title",
      icon: "global",
      children: [
        {
          path: "/global/404",
          nameKey: "global.404",
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
          icon: "solution",
          path: "/list/table-list",
          component: <TableListPage />
        },
        {
          nameKey: "list.customListTable",
          icon: "cloud-server",
          path: "/list/big-data-table-list",
          component: <BigDataTableListPage />
        }
      ]
    }
  ]
};
