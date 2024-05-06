import React from "react";
import './intro.css';
import bg from '../../assets/profile.png';
import btnImg from '../../assets/hireMe.png';
import { Link } from "react-scroll";


const Intro = () =>{
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introtext">I'm <span className="introName">Parth</span><br/>Technical Support Specialist</span>
                <p className="intropara">Empowering your technology journey, <br/> one solution at a time.</p>
                <Link><button className="btn"><img src={btnImg} alt="hire me" className="btnImg" />Hire Me</button></Link>
            </div>
            <img src={bg} alt="profile photo" className="bg"></img>
        </section>
    )
}

export default Intro;