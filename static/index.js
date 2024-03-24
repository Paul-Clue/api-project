import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { ApolloProvider } from '@apollo/client';
import GraphQLProvider from '../components/GraphQLProvider';
import App from '../components/App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  // <ApolloProvider client={client}>
    <GraphQLProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GraphQLProvider>
  // </ApolloProvider>
);

// ReactDOM.render(<h1>Hello world!</h1>, document.getElementById("root"))
