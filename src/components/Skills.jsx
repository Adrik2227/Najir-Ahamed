import { useEffect, useRef } from 'react'
import './Skills.css'

const skills = [
    {
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" /></svg>,
        title: 'Marketing',
        level: 90,
        color: '#6c63ff',
        description:
            'Creating strong digital campaigns, defining brand strategy, and engaging target audiences. I know how to turn creative ideas into real growth.',
        tags: ['Brand Strategy', 'Digital Marketing', 'Content Creation', 'Analytics'],
    },
    {
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>,
        title: 'Business Development',
        level: 85,
        color: '#00d4aa',
        description:
            'Finding new opportunities and building partnerships that matter. I focus on expanding the business and making sure that growth is sustainable.',
        tags: ['Growth Strategy', 'Partnerships', 'Market Research', 'Scaling'],
    },
    {
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>,
        title: 'DeFi & Web3',
        level: 75,
        color: '#f59e0b',
        description:
            'Actively exploring decentralized finance and blockchain technology. I stay updated on digital assets to understand what the future of finance looks like.',
        tags: ['DeFi Protocols', 'Blockchain', 'Tokenomics', 'Web3'],
    },
]

const SkillCard = ({ skill, index }) => {
    const cardRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('skill-card--visible')
                    }
                })
            },
            { threshold: 0.2 }
        )
        if (cardRef.current) observer.observe(cardRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <article
            className="skill-card"
            ref={cardRef}
            style={{ '--delay': `${index * 0.15}s`, '--accent': skill.color }}
        >
            <div className="skill-card__header">
                <div className="skill-card__icon" aria-hidden="true">{skill.icon}</div>
                <div className="skill-card__meta">
                    <h3 className="skill-card__title">{skill.title}</h3>
                    <span className="skill-card__percent">{skill.level}%</span>
                </div>
            </div>

            <div className="skill-card__bar-wrap" role="progressbar" aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100" aria-label={`${skill.title} proficiency: ${skill.level}%`}>
                <div
                    className="skill-card__bar"
                    style={{ '--width': `${skill.level}%`, '--color': skill.color }}
                />
            </div>

            <p className="skill-card__desc">{skill.description}</p>

            <div className="skill-card__tags">
                {skill.tags.map((tag) => (
                    <span key={tag} className="skill-card__tag">{tag}</span>
                ))}
            </div>
        </article>
    )
}

const Skills = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.skills__header-item').forEach((el, i) => {
                            el.style.animationDelay = `${i * 0.15}s`
                            el.classList.add('skills__header-item--visible')
                        })
                    }
                })
            },
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="skills" className="skills section" ref={sectionRef} aria-labelledby="skills-heading">
            <div className="skills__bg-accent" aria-hidden="true" />
            <div className="container">
                <div className="skills__header">
                    <p className="section-label skills__header-item">Core Skills</p>
                    <h2 id="skills-heading" className="section-title skills__header-item">
                        Areas of <span>Expertise</span>
                    </h2>
                    <p className="section-subtitle skills__header-item">
                        A focused skill set built through hands-on experience in high-growth
                        professional environments and self-directed learning.
                    </p>
                </div>

                <div className="skills__grid">
                    {skills.map((skill, i) => (
                        <SkillCard key={skill.title} skill={skill} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
