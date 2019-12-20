import * as React from "react";
import { Route } from "@/models/connect";
import { NoFoundPage, Welcome, TableListPage } from "@/pages";

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
        }
      ]
    }
  ]
};
