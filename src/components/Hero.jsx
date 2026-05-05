import { useEffect, useRef } from 'react'
import './Hero.css'

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
)

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
)

const Hero = () => {
    const heroRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('hero--visible')
                    }
                })
            },
            { threshold: 0.1 }
        )
        if (heroRef.current) observer.observe(heroRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="hero" className="hero" ref={heroRef} aria-label="Hero section">
            {/* Animated background orbs */}
            <div className="hero__orb hero__orb--1" aria-hidden="true" />
            <div className="hero__orb hero__orb--2" aria-hidden="true" />
            <div className="hero__orb hero__orb--3" aria-hidden="true" />
            <div className="hero__grid" aria-hidden="true" />

            <div className="container hero__content">
                <div className="hero__badge">
                    <span className="hero__badge-dot" />
                    <span>Open to Opportunities</span>
                </div>

                <h1 className="hero__name">
                    Najir<br />
                    <span className="hero__name-accent">Ahamed</span>
                </h1>

                <p className="hero__role">Marketing &amp; Business Development Enthusiast</p>

                <p className="hero__description">
                    I'm a young marketing and business development professional driven by real results. I work with international teams and <strong>Micro Logic LTD</strong> to build brands, expand operations, and explore the future of decentralized finance.
                </p>

                <div className="hero__actions">
                    <a href="#contact" className="hero__btn hero__btn--primary" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                        <span>Get In Touch</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a href="#about" className="hero__btn hero__btn--secondary" onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) }}>
                        View Profile
                    </a>
                </div>

                <div className="hero__socials">
                    <span className="hero__socials-label">Follow me</span>
                    <a
                        href="https://www.facebook.com/nojir.ahamed.5891"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero__social-link"
                        aria-label="Najir Ahamed on Facebook"
                    >
                        <FacebookIcon />
                    </a>
                    <a
                        href="https://www.instagram.com/n4jir_alive"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero__social-link"
                        aria-label="Najir Ahamed on Instagram"
                    >
                        <InstagramIcon />
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="hero__scroll-indicator" aria-hidden="true">
                <div className="hero__scroll-line" />
                <span>Scroll</span>
            </div>
        </section>
    )
}

export default Hero
