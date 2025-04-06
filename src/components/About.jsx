import "../styles/About.css";

import main_img from "../assets/man-thinking.svg";

export default function About() {
    return (
        <div className="about-container">
            <h1>About Me</h1>

            <div className="about-section">
                <h2>Who I Am</h2>
                <div className="about-right">
                    <img src={main_img} alt="Programmer doing coding" />
                </div>
                <p>
                    Hi, I'm an enthusiastic learner passionate about technology and innovation.
                    Currently, I'm diving deep into <strong>Web Development</strong> and <strong>Data Structures & Algorithms (DSA)</strong>
                    to enhance my problem-solving skills and build dynamic web applications.
                </p>
                <p>
                    I believe in continuous growth and adaptability, always eager to explore new horizons.
                    My journey is fueled by curiosity and a desire to turn ideas into impactful digital solutions.
                </p>
            </div>

            <div className="about-section">
                <h2>My Mission</h2>
                <p>
                    My mission is to keep learning and evolving in the field of technology. Whether it's building interactive websites,
                    solving algorithmic problems, or exploring the vast world of data, I strive to grow with every experience.
                </p>
                <ul>
                    <li>💻 Developing efficient and user-friendly web applications</li>
                    <li>🧠 Mastering core concepts of DSA for better problem-solving</li>
                    <li>🚀 Staying updated with the latest technologies</li>
                </ul>
            </div>

            <div className="about-section">
                <h2>My Vision</h2>
                <p>
                    I envision a future where technology makes life easier, smarter, and more connected.
                    As I continue my journey, I aim to leverage my skills to create solutions that make a difference.
                </p>
                <p>
                    With a growing interest in <strong>Machine Learning</strong>, I aspire to blend data-driven insights with web development
                    to innovate and solve real-world problems.
                </p>
            </div>

            <div className="about-section">
                <h2>Why I Love What I Do</h2>
                <p>
                    For me, coding is more than just writing lines of code; it's about creativity, logic, and the joy of solving problems.
                    Whether it's debugging a complex algorithm or designing an engaging user interface, I thrive on the thrill of learning something new.
                </p>
                <ul>
                    <li>📚 Passionate about continuous learning</li>
                    <li>💡 Driven by curiosity and innovation</li>
                    <li>🌍 Motivated to make a meaningful impact</li>
                </ul>
            </div>

            <div className="about-section">
                <h2>What's Next?</h2>
                <p>
                    As I continue my journey, I plan to delve deeper into <strong>Machine Learning</strong>,
                    exploring how data can drive smarter decision-making.
                    By combining web development with intelligent algorithms, I aspire to build innovative solutions that solve real-world challenges.
                </p>
            </div>

            <div className="about-section">
                <h2>Let's Connect</h2>
                <p>
                    If you'd like to collaborate, discuss ideas, or simply connect, feel free to reach out!
                    I'm always excited to meet fellow learners and explore new opportunities.
                </p>
            </div>
        </div>
    );
}
