import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-background">
                {/* Soft decorative blur circles */}
                <div className="blur-circle circle-1"></div>
                <div className="blur-circle circle-2"></div>
            </div>

            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.span
                        className="hero-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        Hello, I am
                    </motion.span>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Gayani Chinthika
                        <span className="block text-primary gradient-text" style={{ display: 'block', marginTop: '0.5rem' }}>
                            IT Undergraduate
                        </span>
                    </motion.h1>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                    >
                        Passionate about crafting beautiful, elegant, and user-centric digital experiences.
                        Transforming ideas into seamless web applications.
                    </motion.p>

                    <motion.div
                        className="hero-cta"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.5 }}
                    >
                        <a href="#portfolio" className="btn-primary">
                            View My Work <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="btn-outline">
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                >
                    <div className="hero-image-container glass-panel">
                        {/* Using a placeholder gradient/abstract shape for elegant feminine vibe, but it can be replaced with a real photo */}
                        <div className="hero-image-placeholder">
                            <span className="sparkle ✨">✨</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
