import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const pizzas = [
    {
        id: 1,
        name: 'The Margherita',
        desc: 'San Marzano tomato, buffalo mozzarella, fresh basil, EVOO.',
        price: '₺320',
        img: '/images/menu-1.jpg'
    },
    {
        id: 2,
        name: 'Spicy Diavola',
        desc: 'Tomato base, spicy salami, chili flakes, hot honey drizzle.',
        price: '₺360',
        img: '/images/menu-2.jpg'
    },
    {
        id: 3,
        name: 'Truffle Funghi',
        desc: 'White base, wild mushrooms, truffle oil, thyme, parmesan.',
        price: '₺390',
        img: '/images/menu-3.jpg'
    }
];

const MenuHighlight = () => {
    return (
        <section className="py-24 bg-white text-[#222]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[#E2725B] font-bold tracking-widest uppercase text-sm block mb-2">Our Favorites</span>
                    <h2 className="text-5xl md:text-6xl font-heading uppercase">
                        Top Picks
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {pizzas.map((pizza, index) => (
                        <motion.div
                            key={pizza.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group cursor-pointer"
                        >
                            <div className="overflow-hidden mb-6 rounded-lg relative aspect-square">
                                <img
                                    src={pizza.img}
                                    alt={pizza.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            </div>

                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-2xl font-heading uppercase group-hover:text-[#E2725B] transition-colors">{pizza.name}</h3>
                                <span className="font-bold text-lg font-body">{pizza.price}</span>
                            </div>
                            <p className="text-[#555] mb-4 font-light">{pizza.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link to="/menu" className="btn btn text-lg px-10 py-4 uppercase hover:bg-[#222] hover:text-white transition-colors">
                        View Full Menu
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MenuHighlight;
