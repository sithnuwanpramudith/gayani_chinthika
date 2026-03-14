import { motion } from 'framer-motion';
import { Code2, Database, Layout, Smartphone, Palette, Terminal } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const skillItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const skillsData = [
        { name: 'JavaScript / ES6+', icon: <Code2 size={32} />, level: 90, color: '#F7DF1E' },
        { name: 'React.js', icon: <Layout size={32} />, level: 85, color: '#61DAFB' },
        { name: 'C# / .NET', icon: <Terminal size={32} />, level: 80, color: '#68217A' },
        { name: 'PHP', icon: <Code2 size={32} />, level: 75, color: '#777BB4' },
        { name: 'Database (SQL/Mongo)', icon: <Database size={32} />, level: 85, color: '#336791' },
        { name: 'UI/UX Design', icon: <Palette size={32} />, level: 80, color: '#FF61F6' },
        { name: 'Responsive Design', icon: <Smartphone size={32} />, level: 95, color: '#00D8FF' },
    ];

    return (
        <section id="skills" className="section-padding" style={{ background: 'linear-gradient(180deg, var(--color-bg) 0%, #fff0f5 100%)' }}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <h2>My Skills</h2>
                    <div className="header-underline"></div>
                </motion.div>

                <motion.div
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skill-card glass-panel"
                            variants={skillItemVariants}
                            whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(230, 168, 215, 0.3)' }}
                        >
                            <div className="skill-icon-wrapper" style={{ color: skill.color }}>
                                {skill.icon}
                            </div>
                            <h4 className="skill-name">{skill.name}</h4>
                            <div className="skill-progress-bg">
                                <motion.div
                                    className="skill-progress-bar"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
