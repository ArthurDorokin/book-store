import React from 'react';
import './App.css';
import Header from "./components/header";
import Content from "./components/content";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="main">
      <div className="container">
          <Header />
          <div className="wrap-content">
              <Content />
              <Sidebar />
          </div>
      </div>
    </div>
  );
}

export default App;
