import { useEffect, useRef } from 'react'
import './Experience.css'

const experiences = [
    {
        id: 'intl',
        period: '2023 – Present',
        role: 'Marketing Specialist',
        company: 'International Company',
        type: 'Full-time',
        badge: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
        color: '#6c63ff',
        description:
            'Leading marketing initiatives in an international setting. I focus on comprehensive go-to-market strategies and managing our digital presence to ensure our campaigns actually connect with the right global audience and drive real results.',
        items: [
            'Developed and executed data-driven marketing strategies',
            'Managed cross-channel digital marketing campaigns',
            'Analyzed market trends and competitor landscapes',
            'Coordinated brand communication across platforms',
        ],
    },
    {
        id: 'ml',
        period: '2022 – Present',
        role: 'Business Development Associate',
        company: 'Micro Logic LTD',
        type: 'Core Team',
        badge: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
        color: '#00d4aa',
        description:
            'Working as a core team member to shape the business strategy and operations. I help identify new areas where we can expand and make sure we have the right organizational framework to support that growth long-term.',
        items: [
            'Strategic planning and business growth initiatives',
            'Cross-divisional coordination and team leadership',
            'Partnership development and stakeholder management',
            'Operational efficiency and process optimization',
        ],
    },
    {
        id: 'mlshop',
        period: '2022 – Present',
        role: 'E-commerce Operations',
        company: 'Micro Logic Shop BD',
        type: 'Division',
        badge: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>,
        color: '#f59e0b',
        description:
            'Handling the hands-on operations for our e-commerce division. This involves product marketing, improving the digital storefront, and finding smarter ways to acquire and keep customers happy, so they keep coming back.',
        items: [
            'E-commerce marketing and product listing optimization',
            'Customer acquisition and retention strategies',
            'Digital storefront management and UX improvements',
            'Sales performance tracking and reporting',
        ],
    },
    {
        id: 'mlit',
        period: '2022 – Present',
        role: 'Technology & IT Relations',
        company: 'Micro Logic IT',
        type: 'Division',
        badge: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
        color: '#ec4899',
        description:
            'Connecting the dots between technology and our business goals. I support digital transformation efforts and make sure our technical solutions and marketing assets align perfectly with what our clients actually need.',
        items: [
            'Technology marketing and client-facing communication',
            'Digital transformation support and strategy',
            'IT service presentation and business proposals',
            'Coordinating between tech and marketing teams',
        ],
    },
]

const ExperienceCard = ({ exp, index }) => {
    const cardRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('exp-card--visible')
                    }
                })
            },
            { threshold: 0.15 }
        )
        if (cardRef.current) observer.observe(cardRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <article
            className="exp-card"
            ref={cardRef}
            style={{ '--delay': `${index * 0.12}s`, '--accent': exp.color }}
        >
            <div className="exp-card__side">
                <div className="exp-card__badge" aria-hidden="true">{exp.badge}</div>
                <div className="exp-card__line" aria-hidden="true" />
            </div>

            <div className="exp-card__body">
                <div className="exp-card__top">
                    <div>
                        <div className="exp-card__period">{exp.period}</div>
                        <h3 className="exp-card__role">{exp.role}</h3>
                        <div className="exp-card__company">
                            <span>{exp.company}</span>
                            <span className="exp-card__type">{exp.type}</span>
                        </div>
                    </div>
                </div>

                <p className="exp-card__desc">{exp.description}</p>

                <ul className="exp-card__items" aria-label={`Key responsibilities at ${exp.company}`}>
                    {exp.items.map((item) => (
                        <li key={item} className="exp-card__item">
                            <span className="exp-card__item-dot" aria-hidden="true" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

const Experience = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.exp__header-item').forEach((el, i) => {
                            el.style.animationDelay = `${i * 0.15}s`
                            el.classList.add('exp__header-item--visible')
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
        <section id="experience" className="experience section" ref={sectionRef} aria-labelledby="experience-heading">
            <div className="container">
                <div className="exp__header">
                    <p className="section-label exp__header-item">Career Journey</p>
                    <h2 id="experience-heading" className="section-title exp__header-item">
                        Professional <span>Experience</span>
                    </h2>
                    <p className="section-subtitle exp__header-item">
                        A track record of meaningful contributions across marketing,
                        business development, and technology-driven organizations.
                    </p>
                </div>

                <div className="exp__list" role="list">
                    {experiences.map((exp, i) => (
                        <ExperienceCard key={exp.id} exp={exp} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
