import React from "react";
import Layout from "./Layout";
import { Route } from 'react-router-dom'
import HomePage from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Layout>
      <Route exact path="/" component={HomePage} />
    </Layout>
  );
}

export default App;
