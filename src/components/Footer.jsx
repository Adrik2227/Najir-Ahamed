import './Footer.css'

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
)

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
)

const Footer = () => {
    const year = new Date().getFullYear()

    const handleNavClick = (e, href) => {
        e.preventDefault()
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <footer className="footer" role="contentinfo">
            <div className="footer__top-border" />
            <div className="container footer__inner">
                <div className="footer__brand">
                    <a href="#hero" className="footer__logo" onClick={(e) => handleNavClick(e, '#hero')} aria-label="Back to top">
                        <span className="footer__logo-icon">N</span>
                        <span className="footer__logo-text">Najir Ahamed</span>
                    </a>
                    <p className="footer__tagline">
                        Marketing &amp; Business Development Enthusiast.<br />
                        Building brands. Growing businesses.
                    </p>
                    <div className="footer__socials" aria-label="Social media links">
                        <a href="https://www.facebook.com/nojir.ahamed.5891" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Facebook">
                            <FacebookIcon />
                        </a>
                        <a href="https://www.instagram.com/n4jir_alive" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Instagram">
                            <InstagramIcon />
                        </a>
                    </div>
                </div>

                <nav className="footer__nav" aria-label="Footer navigation">
                    <h3 className="footer__nav-title">Navigation</h3>
                    <ul className="footer__nav-links">
                        {[
                            { href: '#about', label: 'About' },
                            { href: '#skills', label: 'Skills' },
                            { href: '#experience', label: 'Experience' },
                            { href: '#contact', label: 'Contact' },
                        ].map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="footer__nav-link" onClick={(e) => handleNavClick(e, link.href)}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="footer__companies">
                    <h3 className="footer__nav-title">Affiliations</h3>
                    <ul className="footer__company-list">
                        {[
                            'International Company',
                            'Micro Logic LTD',
                            'Micro Logic Shop BD',
                            'Micro Logic IT',
                        ].map((name) => (
                            <li key={name} className="footer__company-item">
                                <span className="footer__company-dot" aria-hidden="true" />
                                {name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="container footer__bottom">
                <p className="footer__copyright">
                    &copy; {year} <strong>Najir Ahamed</strong>. All rights reserved.
                </p>
                <p className="footer__built">
                    Build By <strong>Micro Logic IT</strong>
                </p>
            </div>
        </footer>
    )
}

export default Footer
