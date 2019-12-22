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
      name: "Welcome",
      icon: "smile",
      component: <Welcome />
    },
    {
      path: "/global",
      name: "Global",
      icon: "global",
      children: [
        {
          path: "/global/404",
          name: "404",
          icon: "warning",
          component: <NoFoundPage />
        }
      ]
    },
    {
      path: "/list",
      name: "List",
      icon: "unordered-list",
      children: [
        {
          name: "Table List",
          icon: "solution",
          path: "/list/table-list",
          component: <TableListPage />
        },
        {
          name: "Big Data Table List",
          icon: "cloud-server",
          path: "/list/big-data-table-list",
          component: <BigDataTableListPage />
        }
      ]
    }
  ]
};
