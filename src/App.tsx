import React from 'react';
import logo from './logo.svg';
import './App.css';
import ActionButton from "antd/es/_util/ActionButton";
import {Button, Space} from "antd";
import './AppStyle.css'

import MainText from "./MainText/MainText";
import MainBack from "./MainBack/MainBack";
import MyLinks from "./Links/MyLinks";
import MyStack from "./Links/MyStack";
import FullBack from "./MainBack/fullBack";
import myLogo from './images/logo.png'

function App() {
  return (
      <div>
          <div className="container">
              <div className="left-section">
                  <MainText/>
                  <img src={myLogo} className="my-logo"/>
              </div>
              <div className="right-section">
                  <div className="my-links">
                      <MyLinks/>
                  </div>
                  <div className="my-stack">
                      <MyStack/>
                  </div>
              </div>
          </div>


      </div>


  );
}

export default App;
