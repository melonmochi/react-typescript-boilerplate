import ApolloClient from "apollo-boost";
import fetch from "node-fetch";
import { InMemoryCache } from "apollo-cache-inmemory";
import { service } from "@/config";

const uri = `${service.serviceUrl}/graphql`;

export const client = new ApolloClient({
  uri,
  fetch,
  cache: new InMemoryCache()
});

type PageInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string;
  endCursor?: string;
};

interface ConnectionEdge<T> {
  cursor: string;
  node: T;
}

export interface ConnectionType<T> {
  pageInfo: PageInfo;
  edges: ConnectionEdge<T>[];
}

export * from "./employees";
