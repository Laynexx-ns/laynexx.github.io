import React from 'react';
import './App.css';
import './AppStyle.css'
import MainText from "./MainText/MainText";
import MyLinks from "./Links/MyLinks";
import MyStack from "./Links/MyStack";
import myLogo from './images/logo.png'
import FavoriteMusic from "./Links/FavoriteMusic";



function App() {
  return (

      <div className={"full-back"}>
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
                  <div className="my-music">
                      <FavoriteMusic/>
                  </div>
              </div>
          </div>


      </div>


  );
}

export default App;
