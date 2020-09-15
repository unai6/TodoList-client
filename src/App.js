import React, { useState, useEffect } from 'react';
import SideBar from './Components/SideBar';
import { BrowserRoutes } from './Routes/BrowserRoutes';
import Nav from './Components/Nav'

export const App = (props) => {
  const [token] = useState(localStorage.getItem('token'));
  const [renderSideBar, setRenderSideBar] = useState(false);

  useEffect(() => {
    if (token) {
      setRenderSideBar(true)
    }

  }, [token, renderSideBar])


  return (
    <div style={{ display: "flex", flexDirection: 'column' }} >
      {
        token ? <Nav /> : null
      }
      <div style={{ display: "flex" }}>
        {
          token ? <SideBar /> : null
        }
        <div>
          <BrowserRoutes/>
        </div>
      </div>
    </div>
  );
}

