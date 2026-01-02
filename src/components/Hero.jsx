function Hero() {
    return (
        <section id="hero" className="hero">
            {/* Background Image */}
            <div className="hero__background">
                <img
                    src="/images/hero-bg.jpg"
                    alt="Tok Pizza"
                    className="hero__bg-image"
                    loading="eager"
                    decoding="async"
                    onError={(e) => {
                        // Fallback to a solid color if image fails
                        e.target.parentElement.style.background = 'linear-gradient(135deg, #1D1D1B 0%, #2D2D2B 100%)';
                    }}
                />
                <div className="hero__overlay"></div>
            </div>

            {/* Content */}
            <div className="hero__content">
                <img
                    src="/images/logo.png"
                    alt="Tok Pizza Logo"
                    className="hero__logo fade-in-up"
                    loading="eager"
                    decoding="async"
                    onError={(e) => {
                        e.target.style.display = 'none';
                    }}
                />
                <p className="hero__tagline fade-in-up">
                    Gerçek Hamur. Gerçek Pizza.
                </p>
                <div className="hero__buttons fade-in-up">
                    <a href="#gallery" className="btn btn-primary">Galeriyi Keşfet</a>
                    <a href="#contact" className="btn btn-outline btn-outline--light">Bize Ulaşın</a>
                </div>
            </div>


        </section>
    );
}

export default Hero;
