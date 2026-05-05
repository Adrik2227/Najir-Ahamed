import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#experience', label: 'Experience' },
        { href: '#contact', label: 'Contact' },
    ]

    const handleNavClick = (e, href) => {
        e.preventDefault()
        setMenuOpen(false)
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
            <div className="container navbar__inner">
                <a href="#hero" className="navbar__logo" onClick={(e) => handleNavClick(e, '#hero')} aria-label="Najir Ahamed - Home">
                    <span className="navbar__logo-icon">N</span>
                    <span className="navbar__logo-text">Najir Ahamed</span>
                </a>

                <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`} aria-label="Main navigation">
                    <ul className="navbar__links">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="navbar__link"
                                    onClick={(e) => handleNavClick(e, link.href)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="#contact"
                        className="navbar__cta-btn"
                        onClick={(e) => handleNavClick(e, '#contact')}
                    >
                        Get In Touch
                    </a>
                </nav>

                <button
                    className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </header>
    )
}

export default Navbar
