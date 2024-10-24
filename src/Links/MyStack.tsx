import React from "react";
import './MyStack.css'
import csharp from '../images/mystack/csharplogo.png'
import golang from '../images/mystack/golang.png'
import ts from '../images/mystack/tslogo.png'
import godot from '../images/mystack/godotlogo.png'

const MyStack = () => {
    return(
        <div className={"MyStack"}>
            <div className={"stack-text"}>
                <h1>
                    MyStack:
                </h1>
            </div>
            <div className="images-stack">
                <img className={"stack-logo"} src={csharp}/>
                <img className={"stack-logo"} src={golang}/>
                <img className={"stack-logo"} src={ts}/>
                <img className={"stack-logo"} src={godot}/>
            </div>
        </div>
    );
}

export default MyStack;