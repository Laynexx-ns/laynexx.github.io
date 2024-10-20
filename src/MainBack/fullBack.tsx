import React from "react";
import './fullBack.css';

const FullBack: React.FC<React.PropsWithChildren> = ({children}) =>{
    return (
        <div className="full-back">
            {children}
        </div>
    );
};

export default FullBack;