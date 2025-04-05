import "../styles/Projects.css";

const projects = [
    {
        title: "Wanderlust",
        description: "A travel booking website with interactive UI and search features.",
        technologies: ["Express", "Node.js", "MongoDB"],
        link: "https://github.com/uttakarsh-baranwal/WanderLust"
    },
    {
        title: "TypeMeter",
        description: "A python project which measures the typing speed of the user.",
        technologies: ["Python", "Time Module", "Keyboard Module"],
        link: "https://github.com/uttakarsh-baranwal/typemeter"
    },
    {
        title: "FlappyBird WebGame",
        description: "A flappy bird game which is made on react.",
        technologies: ["React", "CSS"],
        link: "https://github.com/uttakarsh-baranwal/FlappyBird"
    },
    {
        title: "Project 4",
        description: "Project 4 Description",
        technologies: ["Skill1", "Skill2", "Skill3"],
        link: "#"
    }
];

export default function Projects() {
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div className="tech-stack">
                            {project.technologies.map((tech, idx) => (
                                <span key={idx} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Repository</a>
                    </div>
                ))}
            </div>
        </div>
    );
}
