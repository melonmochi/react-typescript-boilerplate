import ApolloClient from "apollo-boost";
import fetch from "node-fetch";
import { InMemoryCache } from "apollo-cache-inmemory";
import { service } from "@/config";

const uri = `${service.serviceUrl}/graphql`;

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  fetch,
  uri
});

type PageInfo = {
  hasNextPage: boolean;
  endCursor?: string;
};

interface ConnectionEdge<T> {
  cursor: string;
  node: T;
}

export interface ConnectionType<T> {
  [x: string]: any;
  totalCount: number;
  pageInfo: PageInfo;
  edges: ConnectionEdge<T>[];
}

export * from "./employees";
