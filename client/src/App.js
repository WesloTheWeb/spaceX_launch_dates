import React from 'react';
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import Header from './components/Header/Header';
import Launches from './components/Launches/Launches';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
