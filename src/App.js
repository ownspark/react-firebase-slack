import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/login/Login';

function App() {
  const [user, setUser] = useState(null);





  return (
    // BEM naming convention
    <div className="app">
      <Router>
        {!user ? (
                  <Login/>
                  ) : (
            <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path='/room/:roomId'>
                  <Chat/> 
                </Route>
                <Route path='/'>
                  <h1>Welcome</h1>
                </Route>

              </Switch>
            </div>  
            </>
          )}

      </Router>
    </div>
  );
}

export default App;
