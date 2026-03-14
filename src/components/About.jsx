import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
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
