import { useEffect, useRef } from 'react'
import './About.css'

const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '2+', label: 'Companies' },
    { value: '100%', label: 'Dedication' },
]

const About = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.anim-item').forEach((el, i) => {
                            el.style.animationDelay = `${i * 0.12}s`
                            el.classList.add('anim-item--visible')
                        })
                    }
                })
            },
            { threshold: 0.15 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="about" className="about section" ref={sectionRef} aria-labelledby="about-heading">
            <div className="container about__inner">
                <div className="about__visual anim-item">
                    <div className="about__avatar-wrap">
                        <div className="about__avatar" aria-label="Najir Ahamed avatar">
                            <img src="/najir-ahamed.jpg" alt="Najir Ahamed" className="about__avatar-img" />
                            <div className="about__avatar-ring" />
                        </div>
                    </div>

                    <ul className="about__stats" aria-label="Quick statistics">
                        {stats.map((stat) => (
                            <li key={stat.label} className="about__stat">
                                <span className="about__stat-value">{stat.value}</span>
                                <span className="about__stat-label">{stat.label}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="about__tag about__tag--1" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                        Marketing Expert
                    </div>
                    <div className="about__tag about__tag--2" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        Business Growth
                    </div>
                </div>

                <div className="about__text">
                    <p className="section-label anim-item">About Me</p>
                    <h2 id="about-heading" className="section-title anim-item">
                        Driven by Purpose,<br />
                        <span>Powered by Growth</span>
                    </h2>

                    <p className="about__bio anim-item">
                        Hi, I'm <strong>Najir Ahamed</strong>. I love marketing, building businesses, and exploring the fast-paced world of digital finance. For me, it's not just about doing a job—it's about making a real impact, growing meaningful brands, and helping businesses reach their true potential.
                    </p>

                    <p className="about__bio anim-item">
                        Right now, I work in the <strong>Marketing Department</strong> of an international company, focusing on strategies that genuinely connect with people. I'm also deeply involved with <strong>Micro Logic LTD</strong>, working alongside our <em>Micro Logic Shop BD</em> (e-commerce) and <em>Micro Logic IT</em> teams to drive steady growth and better operations.
                    </p>

                    <p className="about__bio anim-item">
                        When I'm not focused on traditional marketing, I spend my time exploring <strong>DeFi</strong> (Decentralized Finance). I find it fascinating how blockchain is fundamentally changing the financial landscape, and I make it a point to stay ahead of these new digital opportunities.
                    </p>

                    <div className="about__highlights anim-item">
                        {[
                            'Strategic Marketing & Brand Building',
                            'Business Development & Growth',
                            'Decentralized Finance (DeFi)',
                            'E-commerce & Digital Operations',
                        ].map((item) => (
                            <div key={item} className="about__highlight">
                                <span className="about__highlight-dot" aria-hidden="true" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
