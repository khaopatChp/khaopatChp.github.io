import React from "react";
import './About.css';

function About() {
    return (
        <div className="About" id="about-me">
            <div className="title">
                <h1>About me</h1>
            </div>
            <div>
                <h1>Education</h1>
            </div>
            <div className="education">
                <div className="education-img">
                    <img src="./KMUTT.png" width="100%"/>
                </div>
                <div className="education-element">
                    <h1>Bachelor's of Control system and Instrumentation Engineering</h1>
                    <h2>King Mongkut's University of Technology Thonburi, Bangkok</h2>
                </div>
            </div>
        </div>
    )
}

export default About;