import { useState, useEffect } from 'react';

function BottomNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Hide nav when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMenuOpen]);

    const navLinks = [
        { href: '#hero', label: 'Ana Sayfa' },
        { href: '#gallery', label: 'Galeri' },
        { href: '#about', label: 'Hakkımızda' },
        { href: '#contact', label: 'İletişim' },
    ];

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Bottom Navigation Bar */}
            <nav className={`bottom-nav ${isHidden ? 'bottom-nav--hidden' : ''}`}>
                <div className="bottom-nav__container">
                    {/* Hamburger Menu Button */}
                    <button
                        className={`bottom-nav__menu-btn ${isMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menü"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* Center Logo */}
                    <a href="#hero" className="bottom-nav__logo">
                        <img
                            src="/images/logo.png"
                            alt="Tok Pizza"
                            className="bottom-nav__logo-img"
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                        />
                    </a>

                    {/* Order Button */}
                    <a href="#contact" className="btn btn-primary bottom-nav__order-btn">
                        Sipariş Ver
                    </a>
                </div>
            </nav>

            {/* Full Screen Menu Overlay */}
            <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="menu-overlay__link"
                        onClick={handleLinkClick}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </>
    );
}

export default BottomNav;
