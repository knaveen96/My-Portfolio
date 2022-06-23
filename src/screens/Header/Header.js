import React from "react";
import Typed from 'react-typed';
import './header.css'

const Header = () => {
    return (
        <div className="main-info">
            <h1>What am I?</h1>
            <Typed
                strings={[
                    " ",
                    "A Software Developer",
                    "A Full Stack Developer",
                    "Purdue University - Computer Science Graduate Student",
                    "Purdue University - Research Assistant",
                    "A Coder",
                    " ",
                    " "]}
                typeSpeed={30}
                backSpeed={30}
                loop >
            </Typed>
        </div>
    )
}

export default Header