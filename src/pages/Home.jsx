import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MenuHighlight from '../components/MenuHighlight';
import VibeGrid from '../components/VibeGrid';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="bg-[#F9F7F2] min-h-screen">
            <Navbar />
            <Hero />

            {/* Introduction */}
            <section className="py-24 px-6 container mx-auto text-center max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-heading uppercase leading-tight mb-8">
                    We don't just make pizza. <br />
                    <span className="text-[#E2725B]">We craft an experience.</span>
                </h2>
                <p className="text-xl md:text-2xl font-light text-[#555] leading-relaxed">
                    Tok Pizza is where artisanal tradition meets modern street culture.
                    Sourced locally, fired globally, and served with a vibe you won't find anywhere else.
                </p>
            </section>

            <MenuHighlight />
            <VibeGrid />

            {/* Location / About Teaser */}
            <section className="relative h-[600px] flex items-center justify-center text-white text-center">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <img src="/images/about-bg.jpg" alt="About" className="absolute inset-0 w-full h-full object-cover" />

                <div className="relative z-20 max-w-2xl px-6">
                    <h2 className="text-5xl md:text-7xl font-heading uppercase mb-6">Come Hang Out</h2>
                    <p className="text-xl mb-8 font-light">
                        Good tunes, cold drinks, and hot slices. <br />
                        No reservations needed. Just pull up.
                    </p>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn bg-white text-black border-white hover:bg-[#E2725B] hover:border-[#E2725B] hover:text-white">
                        Get Directions
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
