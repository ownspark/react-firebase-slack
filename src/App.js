import React from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';

function App() {
  return (
    // BEM naming convention
    <div className="app">
     <h1>Build the slack clone. </h1>
      <Header />
      <div className="app__body">
        <Sidebar />
        {/* React-Router -> Chat Screen */}
      </div>
      
    
    </div>
  );
}

export default App;
