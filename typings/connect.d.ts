import {
  RouteComponentProps as BasicRouteProps,
  RouteProps,
  match
} from "react-router-dom";
import { MenuDataItem } from "@ant-design/pro-layout";

type IncludeRoute = "component" | "exact" | "path";
type RouteType = Pick<RouteProps, IncludeRoute>;
interface RouterTypes<T extends Object = {}, P = {}> extends BasicRouteProps {
  computedMatch?: match<P>;
  route?: RouteType & T;
}

export interface Route extends MenuDataItem {
  routes?: Route[];
}

/**
 * @type T: Params matched in dynamic routing
 */
export interface ConnectProps<T = {}> extends Partial<RouterTypes<Route, T>> {}
