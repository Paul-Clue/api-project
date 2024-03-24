import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache()
});

const GraphQLProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GraphQLProvider;
