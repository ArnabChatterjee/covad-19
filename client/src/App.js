import React from 'react';
import './App.css';
import Header from './components/header';
import Search from './components/search';
import Location from './components/location';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
      <Search />
      <Location />
      </div>
    </div>
  );
}

export default App;
