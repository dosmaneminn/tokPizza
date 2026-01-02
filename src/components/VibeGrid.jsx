import React from 'react';
import { motion } from 'framer-motion';

const images = [
    { src: '/images/vibe-1.jpg', alt: 'Friends eating', span: 'col-span-2 row-span-2' },
    { src: '/images/vibe-3.jpg', alt: 'Neon Sign', span: 'col-span-1 row-span-1' },
    { src: '/images/vibe-2.jpg', alt: 'Pizza Slice', span: 'col-span-1 row-span-1' },
    { src: '/images/vibe-6.jpg', alt: 'Chef Tossing Dough', span: 'col-span-1 row-span-2' },
    { src: '/images/vibe-5.jpg', alt: 'Wine and Pizza', span: 'col-span-1 row-span-1' },
    { src: '/images/vibe-4.jpg', alt: 'Pizza Boxes', span: 'col-span-2 row-span-1' },
];

const VibeGrid = () => {
    return (
        <div className="bg-[#F9F7F2] py-20 px-4 md:px-8">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[#E2725B] font-bold tracking-widest uppercase text-sm block mb-2">The Atmosphere</span>
                    <h2 className="text-5xl md:text-7xl font-heading text-[#222]">
                        EAT. DRINK. <span className="italic font-light">CHILL.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[300px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            className={`relative overflow-hidden group ${img.span}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="w-full h-full overflow-hidden">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VibeGrid;
