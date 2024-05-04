import React from "react";
import './intro.css';
import bg from '../../assets/profile.png';
const Intro = () =>{
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introtext">I'm <span className="introName">Parth</span><br/>Technical Support Specialist</span>



            </div>
            <img src={bg} alt="profile photo" className="bg"></img>
        </section>
    )
}

export default Intro;