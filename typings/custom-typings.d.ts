declare module "*.png";
declare module "*.less";

declare interface GlobalFetch {
  fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
}

// real node-fetch types clash with apollo-link-http, so manually define it as globalfetch here.
declare module "node-fetch" {
  const fetch: GlobalFetch["fetch"];
  export default fetch;
}

declare module "typings" {
  export { BasicLayout } from "typings/basicLayout";
  export { Route, ConnectProps } from "typings/connect";
  export * from "typings/common";
}
