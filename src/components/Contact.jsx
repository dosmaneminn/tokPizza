function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact__grid">
                    {/* Info Side */}
                    <div className="contact__info">
                        <span className="contact__label">İletişim</span>
                        <h2 className="contact__title">
                            Bizi<br />
                            <span className="accent-text">Ziyaret Edin</span>
                        </h2>

                        <div className="contact__details">
                            <div className="contact__item">
                                <div className="contact__icon">📍</div>
                                <div>
                                    <h4>Adres</h4>
                                    <p>Şeyh Mahallesi, Kocahan Sokak 7/1</p>
                                    <p>Muğla 48000</p>
                                </div>
                            </div>

                            <div className="contact__item">
                                <div className="contact__icon">🕐</div>
                                <div>
                                    <h4>Çalışma Saatleri</h4>
                                    <p>Pazartesi - Cumartesi: 12:00 - 23:00</p>
                                    <p>Pazar: Kapalı</p>
                                </div>
                            </div>

                            <div className="contact__item">
                                <div className="contact__icon">📱</div>
                                <div>
                                    <h4>Sosyal Medya</h4>
                                    <a
                                        href="https://www.instagram.com/tokpizzaa/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="contact__social-link"
                                    >
                                        @tokpizzaa
                                    </a>
                                </div>
                            </div>
                        </div>

                        <a href="tel:+905555555555" className="btn btn-primary contact__cta">
                            Sipariş Ver
                        </a>
                    </div>

                    {/* Map Side */}
                    <div className="contact__map-wrapper">
                        <div className="contact__map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.2882351461635!2d28.362192075665433!3d37.21713197213123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bf6db64e485fab%3A0x70a360c21425eb17!2sTOK%20P%C4%B0ZZA!5e0!3m2!1str!2str!4v1767356559841!5m2!1str!2str"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="TOK PIZZA Konum"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
