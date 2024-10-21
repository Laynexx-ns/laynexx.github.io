import React from 'react';
import './MainText.css'; // Здесь будут стили
import myLogo from '../images/logo.png'


const MainText: React.FC = () => {

    return (
        <div className="main-text-section">

            <div className="intro-text">
                <h1>

                    <span className="HI-text">HI</span>
                    <span className="MyNameIs-text">my <br/> name <br/> is</span>

                    <br/>
                    <span className="Laynexx-text">Laynexx</span>
                </h1>

                <p className="description-text">
                    I'm a junior Go/C# developer from Russia. Now I am engaged in frontend. Love to make different
                    designs for programs or other things. I also like physics and math.
                </p>

            </div>

        </div>
    );
};

export default MainText;
