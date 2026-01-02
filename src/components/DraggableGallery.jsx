import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

function DraggableGallery() {
    const constraintsRef = useRef(null);
    const x = useMotionValue(0);
    const [isDragging, setIsDragging] = useState(false);
    const [currentX, setCurrentX] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Pizza gallery items
    const originalItems = [
        { id: 1, title: 'Margherita' },
        { id: 2, title: 'Pepperoni' },
        { id: 3, title: 'Quattro Formaggi' },
        { id: 4, title: 'Diavola' },
        { id: 5, title: 'Funghi' },
        { id: 6, title: 'Prosciutto' },
        { id: 7, title: 'Vegetariana' },
        { id: 8, title: 'Special' },
    ];

    // Create infinite loop by tripling the items
    const galleryItems = [...originalItems, ...originalItems, ...originalItems];
    const itemCount = originalItems.length;

    // Check if mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Card dimensions
    const getCardWidth = useCallback(() => {
        if (typeof window === 'undefined') return 360;

        if (window.innerWidth < 768) {
            return Math.floor(window.innerWidth / 2.9);
        }
        return 360;
    }, []);

    const [cardWidth, setCardWidth] = useState(getCardWidth());
    const cardGap = isMobile ? 12 : 2;
    const totalCardWidth = cardWidth + cardGap;
    const oneSetWidth = itemCount * totalCardWidth;

    // Update card width on resize
    useEffect(() => {
        const handleResize = () => {
            setCardWidth(getCardWidth());
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [getCardWidth]);

    // Center offset calculation
    const getCenterOffset = useCallback(() => {
        if (typeof window === 'undefined') return 0;
        return window.innerWidth / 2 - cardWidth / 2;
    }, [cardWidth]);

    // Start position (middle set, first card centered)
    const getStartOffset = useCallback(() => {
        return -(itemCount * totalCardWidth) + getCenterOffset();
    }, [itemCount, totalCardWidth, getCenterOffset]);

    // Initialize position
    useEffect(() => {
        const startOffset = getStartOffset();
        x.set(startOffset);
        setCurrentX(startOffset);
    }, [cardWidth, getStartOffset, x, cardGap]);

    // Infinite loop boundary check
    const checkBounds = useCallback(() => {
        const currentPos = x.get();
        const centerOffset = getCenterOffset();
        const setWidth = itemCount * totalCardWidth;

        const currentIndex = Math.round((centerOffset - currentPos) / totalCardWidth);

        if (currentIndex < 4) {
            x.set(currentPos - setWidth);
        } else if (currentIndex > itemCount * 2 + 3) {
            x.set(currentPos + setWidth);
        }
    }, [x, getCenterOffset, itemCount, totalCardWidth]);

    // Track position changes
    useEffect(() => {
        const unsubscribe = x.on('change', (latest) => {
            setCurrentX(latest);
        });
        return () => unsubscribe();
    }, [x]);

    // Snap to specific index
    const snapToIndex = useCallback((targetIndex) => {
        const centerOffset = getCenterOffset();
        const clampedIndex = Math.max(0, Math.min(targetIndex, itemCount * 3 - 1));
        const snapX = centerOffset - clampedIndex * totalCardWidth;

        animate(x, snapX, {
            type: 'spring',
            stiffness: 400,
            damping: 35,
            onComplete: checkBounds
        });
    }, [getCenterOffset, itemCount, totalCardWidth, x, checkBounds]);

    // Handle drag end
    const handleDragEnd = useCallback(() => {
        setIsDragging(false);
        const currentXValue = x.get();
        const velocity = x.getVelocity();
        const centerOffset = getCenterOffset();

        const closestIndex = Math.round((centerOffset - currentXValue) / totalCardWidth);
        let targetIndex = closestIndex;

        const swipeThreshold = isMobile ? 300 : 500;

        if (velocity < -swipeThreshold) {
            targetIndex = closestIndex + 1;
        } else if (velocity > swipeThreshold) {
            targetIndex = closestIndex - 1;
        }

        snapToIndex(targetIndex);
    }, [x, getCenterOffset, totalCardWidth, isMobile, snapToIndex]);

    // Handle card tap
    const handleCardClick = useCallback((index) => {
        if (!isDragging) {
            snapToIndex(index);
        }
    }, [isDragging, snapToIndex]);

    return (
        <section id="gallery" className="gallery">
            <div className="gallery__wrapper" ref={constraintsRef}>
                <motion.div
                    className="gallery__track"
                    style={{ x, gap: `${cardGap}px` }}
                    drag="x"
                    dragConstraints={{ left: -Infinity, right: Infinity }}
                    dragElastic={0.1}
                    dragTransition={{ bounceStiffness: 400, bounceDamping: 40 }}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={handleDragEnd}
                >
                    {galleryItems.map((item, index) => (
                        <GalleryCard
                            key={`${item.id}-${index}`}
                            item={item}
                            index={index}
                            currentX={currentX}
                            totalCardWidth={totalCardWidth}
                            cardWidth={cardWidth}
                            isDragging={isDragging}
                            isMobile={isMobile}
                            onCardClick={() => handleCardClick(index)}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function GalleryCard({ item, index, currentX, totalCardWidth, cardWidth, isDragging, isMobile, onCardClick }) {
    const screenCenter = typeof window !== 'undefined' ? window.innerWidth / 2 : 500;

    const cardCenterOnScreen = currentX + (index * totalCardWidth) + (cardWidth / 2);
    const distanceFromCenter = Math.abs(cardCenterOnScreen - screenCenter);
    const normalizedDistance = distanceFromCenter / totalCardWidth;

    const scaleReduction = Math.min(normalizedDistance * 0.1, 0.22);
    const scale = 1 - scaleReduction;

    const opacityReduction = Math.min(normalizedDistance * 0.15, 0.4);
    const opacity = 1 - opacityReduction;

    const zIndex = Math.max(1, Math.round(10 - normalizedDistance));
    const cardHeight = isMobile ? cardWidth * 1.4 : 480;

    return (
        <motion.div
            className="gallery__card"
            animate={{
                scale: scale,
                opacity: opacity,
            }}
            transition={{
                duration: isDragging ? 0.05 : 0.3,
                ease: 'easeOut',
            }}
            style={{
                zIndex,
                width: cardWidth,
                height: cardHeight,
            }}
            onTap={onCardClick}
            whileTap={{ scale: scale * 0.98 }}
        >
            <div className="gallery__card-image">
                <img
                    src={`/images/gallery-${item.id}.jpg`}
                    alt={item.title}
                    className="gallery__image"
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                        // Fallback placeholder
                        e.target.style.background = 'linear-gradient(135deg, #2D2D2B 0%, #1D1D1B 100%)';
                        e.target.style.display = 'flex';
                        e.target.style.alignItems = 'center';
                        e.target.style.justifyContent = 'center';
                    }}
                />
            </div>
        </motion.div>
    );
}

export default DraggableGallery;
