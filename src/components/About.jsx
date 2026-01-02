function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about__grid">
                    {/* Image Side */}
                    <div className="about__image-wrapper">
                        <div className="about__image">
                            <img
                                src="/images/about-bg.jpg"
                                alt="Tok Pizza Hakkımızda"
                                className="about__image-img"
                                loading="lazy"
                                decoding="async"
                                onError={(e) => {
                                    e.target.style.background = 'linear-gradient(135deg, #E5E1D8 0%, #D5D1C8 100%)';
                                }}
                            />
                        </div>
                        <div className="about__image-accent"></div>
                    </div>

                    {/* Content Side */}
                    <div className="about__content">
                        <span className="about__label">Hakkımızda</span>
                        <h2 className="about__title">
                            Gerçek<br />
                            <span className="accent-text">Pizza Sanatı</span>
                        </h2>
                        <p className="about__text">
                            Tok Pizza, geleneksel İtalyan pizza yapım sanatını modern ve özgün
                            bir yaklaşımla buluşturan, şehrin en otantik pizza deneyimini sunar.
                        </p>
                        <p className="about__text">
                            Ekşi mayalı hamurumuz 48 saat dinlendirilerek hazırlanır.
                            Her pizza, odun ateşinde özenle pişirilir ve en taze malzemelerle
                            servis edilir.
                        </p>
                        <div className="about__features">
                            <div className="about__feature">
                                <span className="about__feature-number">01</span>
                                <div>
                                    <h4>Ekşi Maya</h4>
                                    <p>48 saat dinlendirilmiş doğal ekşi maya hamuru</p>
                                </div>
                            </div>
                            <div className="about__feature">
                                <span className="about__feature-number">02</span>
                                <div>
                                    <h4>Odun Ateşi</h4>
                                    <p>Geleneksel taş fırında, odun ateşinde pişirim</p>
                                </div>
                            </div>
                            <div className="about__feature">
                                <span className="about__feature-number">03</span>
                                <div>
                                    <h4>Taze Malzeme</h4>
                                    <p>Günlük tedarik edilen premium kalite malzemeler</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
