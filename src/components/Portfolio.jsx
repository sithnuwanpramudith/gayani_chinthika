import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const projects = [
        {
            title: "E-Commerce Beauty Store",
            description: "A full-stack web application with cart functionality, secure checkout, and a beautifully designed UI using React and Node.js.",
            tags: ["React", "Node.js", "MongoDB", "CSS"],
            image: "linear-gradient(135deg, #ff2a85 0%, #9d4edd 100%)", // placeholder
            github: "#",
            demo: "#"
        },
        {
            title: "Student Management Portal",
            description: "A comprehensive dashboard for managing student records, attendance, and grades, featuring animated charts and data tables.",
            tags: ["React", "Firebase", "Framer Motion", "Tailwind"],
            image: "linear-gradient(135deg, #9d4edd 0%, #ff9e00 100%)", // placeholder
            github: "#",
            demo: "#"
        },
        {
            title: "Task Organizer App",
            description: "A sleek and intuitive task management application with drag-and-drop functionality and local storage persistence.",
            tags: ["JavaScript", "HTML/CSS", "LocalStorage"],
            image: "linear-gradient(135deg, #ff9e00 0%, #ff2a85 100%)", // placeholder
            github: "#",
            demo: "#"
        }
    ];

    return (
        <section id="portfolio" className="section-padding">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <h2>My Portfolio</h2>
                    <div className="header-underline"></div>
                </motion.div>

                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card glass-panel"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.2 } }
                            }}
                            whileHover={{ y: -10 }}
                        >
                            <div
                                className="project-image"
                                style={{ background: project.image }}
                            >
                                <div className="project-overlay">
                                    <a href={project.demo} className="project-link" aria-label="Live Demo">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.github} className="project-link" aria-label="GitHub Repo">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
