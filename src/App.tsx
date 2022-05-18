import { useState } from "react";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import Login from "./components/Login";
import Navigate from "./components/Navigate";
import Router from "./components/routes/routes";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Navigate />
        <Router />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
