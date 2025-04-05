import "../styles/Home.css";
import main_img from "../assets/Home_Main.svg";
import Typed from "typed.js";
import { useEffect, useRef } from 'react';

export default function Home() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Coder', 'Programmer', 'Developer', 'Freelancer'],
            typeSpeed: 150,
            backSpeed: 100,
            loop: true,
            backDelay: 1000,
            smartBackspace: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);



    return (
        <>
            <div className="Home-Container">
                <div className="Home-First">
                    <div className="first-left">
                        <h1>Hi, <span className="wave">👋🏻</span></h1>
                        <h1>I am <span className="dev_name">Uttakarsh Barnwal</span></h1>
                        <br /><br />
                        <h2>I am a <span className="typed_words" ref={el} /></h2>
                    </div>
                    <div className="first-right">
                        <img src={main_img} alt="Programmer doing coding" />
                    </div>
                </div>

                <div className="Home-Second">
                    <h2>Let me introduce myself</h2>
                    <p>
                        I’m a passionate Coder, Programmer, and Developer
                        with a knack for turning ideas into reality through clean and efficient code.
                        Whether it's web development or problem-solving,
                        I love exploring the intersection of creativity and technology.
                        I’m a lifelong learner, constantly evolving with the latest tech trends.
                        My goal is to create impactful solutions that not only work but inspire.
                    </p>
                    <ul>
                        <li>👨‍💻 Web Development (React, Node.js, Express)</li>
                        <li>💻 Database Management (MySQL, MongoDB)</li>
                        <li>🚀 Problem Solving (C++, Java, DSA)</li>
                        <li>🎨 UI/UX Design (Moderate Level Designs)</li>
                    </ul>
                </div>

                <div className="Home-Third">
                    <h2>My Skills</h2>
                    <div className="skills-container">
                        <div className="skill-card">JavaScript</div>
                        <div className="skill-card">React</div>
                        <div className="skill-card">Node.js</div>
                        <div className="skill-card">MySQL</div>
                        <div className="skill-card">MongoDB</div>
                        <div className="skill-card">EJS</div>
                        <div className="skill-card">C++</div>
                        <div className="skill-card">Java</div>
                    </div>
                </div>
            </div>
        </>
    )
}