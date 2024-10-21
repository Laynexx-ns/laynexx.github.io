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

function App() {
  return (
      <div>
          <FullBack>
              <MainBack>
                  <MainText/>
                  <MyLinks/>
                  <MyStack/>
              </MainBack>
          </FullBack>


      </div>



  );
}

export default App;
