import { useEffect, useRef, useState } from 'react'
import './Contact.css'

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
)

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
)

const socialLinks = [
    {
        id: 'facebook',
        label: 'Facebook',
        handle: '@nojir.ahamed.5891',
        url: 'https://www.facebook.com/nojir.ahamed.5891',
        icon: <FacebookIcon />,
        color: '#1877F2',
        hoverGlow: 'rgba(24, 119, 242, 0.3)',
        description: 'Connect with me on Facebook',
    },
    {
        id: 'instagram',
        label: 'Instagram',
        handle: '@n4jir_alive',
        url: 'https://www.instagram.com/n4jir_alive',
        icon: <InstagramIcon />,
        color: '#E1306C',
        hoverGlow: 'rgba(225, 48, 108, 0.3)',
        description: 'Follow me on Instagram',
    },
]

const Contact = () => {
    const sectionRef = useRef(null)
    const [copiedEmail, setCopiedEmail] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.contact-anim').forEach((el, i) => {
                            el.style.animationDelay = `${i * 0.12}s`
                            el.classList.add('contact-anim--visible')
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
        <section id="contact" className="contact section" ref={sectionRef} aria-labelledby="contact-heading">
            <div className="contact__orb" aria-hidden="true" />
            <div className="container contact__inner">
                <div className="contact__text">
                    <p className="section-label contact-anim">Get In Touch</p>
                    <h2 id="contact-heading" className="section-title contact-anim">
                        Let's <span>Connect</span>
                    </h2>
                    <p className="section-subtitle contact-anim">
                        Whether you're looking to collaborate, discuss an opportunity, or simply
                        say hello — I'm always open to meaningful conversations. Reach out through
                        any of my social platforms.
                    </p>

                    <div className="contact__tagline contact-anim">
                        <div className="contact__tagline-icon" aria-hidden="true">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                        </div>
                        <div>
                            <div className="contact__tagline-title">Open to Opportunities</div>
                            <div className="contact__tagline-sub">
                                Always open to discussing marketing roles, new business partnerships, and interesting DeFi collaborations.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact__cards">
                    {socialLinks.map((social, i) => (
                        <a
                            key={social.id}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-card contact-anim"
                            style={{
                                '--social-color': social.color,
                                '--social-glow': social.hoverGlow,
                                animationDelay: `${(i + 4) * 0.12}s`,
                            }}
                            aria-label={`${social.description} — ${social.handle}`}
                        >
                            <div className="contact-card__icon-wrap">
                                {social.icon}
                            </div>
                            <div className="contact-card__info">
                                <div className="contact-card__platform">{social.label}</div>
                                <div className="contact-card__handle">{social.handle}</div>
                            </div>
                            <div className="contact-card__arrow" aria-hidden="true">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Contact
