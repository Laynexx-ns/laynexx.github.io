import React from "react";
import './MainBack.css'
import backImage from 'src/images/c7620d2178798e91a7ee2db16c6a8774.jpg'

const MainBack: React.FC<React.PropsWithChildren> = ( {children }) => {
    return(
        <div className="main-back">
            <div className={"box"}>
                {children}
            </div>
        </div>
    );
};

export default MainBack;