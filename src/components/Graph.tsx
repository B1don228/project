import React from "react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";
import GetUsers from "./GetUsers";

const errorLink = onError(({ grapghqlErrors, networkError }: any) => {
  if (grapghqlErrors) {
    grapghqlErrors.map(({ message, location, path }: any) => {
      alert(`GraphQL error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

const Graph = () => {
  return (
    <ApolloProvider client={client}>
      <GetUsers />
    </ApolloProvider>
  );
};

export default Graph;
