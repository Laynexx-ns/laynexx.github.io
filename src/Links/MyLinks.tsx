import React from "react";
import './MyLinks.css'
import telega from '../images/mylinks/Frame 2.png'
import github from '../images/mylinks/ghlogo.png'
import dslogo from '../images/mylinks/dslogo.png'
import {Image} from "antd";

const MyLinks: React.FC = () =>{
    return(
        <div className="back-box">
            <div className="links-text">
                <h1>
                    MyLinks:
                </h1>

            </div>
            <div className="images-links">
                <a href={"https://t.me/exldlxx_bezdarnost"}>
                    <img className={"logo"} src={telega} alt="Telegram Logo"/>
                </a>
                <a href={"https://github.com/Laynexx-ns"}>
                    <img className={"logo"} src={github} alt="GitHub Logo"/>
                </a>
                <a href={"https://github.com/Laynexx-ns"}>
                    <img className={"logo"} src={dslogo} alt={"Discord Logo"}/>
                </a>

            </div>
        </div>
    )
}

export default MyLinks;