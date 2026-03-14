import { motion } from 'framer-motion';
import { Heart, Star, Sparkles } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import './About.css';

const About = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="about" className="section-padding">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <h2>About Me</h2>
                    <div className="header-underline"></div>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-image-side"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <div className="about-image-wrapper">
                            <div className="about-image-bg"></div>
                            <div className="about-image glass-panel">
                                <img src={profileImg} alt="Profile" className="about-profile-img" />
                            </div>

                            <motion.div
                                className="floating-badge badge-1 glass-panel"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Heart size={20} className="badge-icon" />
                                <span>Passionate Coder</span>
                            </motion.div>

                            <motion.div
                                className="floating-badge badge-2 glass-panel"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <Star size={20} className="badge-icon" />
                                <span>Creative Thinker</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-text-side"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <h3 className="about-subtitle">Hi, I&#39;m Gayani!</h3>
                        <p>
                            I am an Information Technology Undergraduate with a deep love for creating beautiful and functional web applications.
                            My journey in tech is driven by a desire to blend logic with creativity, building experiences that are not only powerful under the hood but also visually delightful to the user.
                        </p>
                        <p>
                            With a keen eye for aesthetics, I believe that great design is just as important as clean code. I specialize in front-end development, focusing on responsive designs, smooth animations, and intuitive user interfaces.
                        </p>

                        <div className="about-stats mt-4">
                            <div className="stat-item">
                                <span className="stat-number gradient-text">3+</span>
                                <span className="stat-label">Years of<br />Learning</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number gradient-text">10+</span>
                                <span className="stat-label">Projects<br />Completed</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number gradient-text">100%</span>
                                <span className="stat-label">Dedication to<br />Excellence</span>
                            </div>
                        </div>

                        <a href="#contact" className="btn-primary mt-4" style={{ marginTop: '2rem' }}>
                            Let&#39;s Talk <Heart size={16} fill="white" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
