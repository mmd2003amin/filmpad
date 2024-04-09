import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri:import.meta.env.VITE_HYGRAPH_URI,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
