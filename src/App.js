import React, { useState, useEffect } from 'react';
import SideBar from './Components/SideBar';
import { BrowserRoutes } from './Routes/BrowserRoutes';
import Nav from './Components/Nav'
import { BrowserRouter as Router } from "react-router-dom";

export const App = (props) => {
  const [token] = useState(localStorage.getItem('token'));
  const [renderSideBar, setRenderSideBar] = useState(false);

  useEffect(() => {
    if (token) {
      setRenderSideBar(true)
    }

  }, [token, renderSideBar])


  return (
    <Router>
      <div style={{ display: "flex", flexDirection: 'column' }} >
        {
          token ? <Nav /> : null
        }
        <div >
          {
            token ? <SideBar /> : null
          }
          <div>
            <BrowserRoutes />
          </div>
        </div>
      </div>
    </Router>
  );
}

