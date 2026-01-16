import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './IntroSection.css';

const BASE_PATH = import.meta.env.BASE_URL;

interface TextBlock {
  text: string;
  photo?: string;
}

const introContent: TextBlock[] = [
  {
    text: "Last summer I cycled from London to Verona without spending a penny on accommodation.",
    photo: "london-photo"
  },
  {
    text: "I had no camping experience and little cycling experience.",
    photo: "cycling-in-england"
  },
  {
    text: "I figured that I would combine my thoughts and the photos.",
    photo: "IMG_8917"
  },
  {
    text: "Thank Cliff Weitzman for the idea…",
    photo: "IMG_8934"
  }
];

function ScrollBlock({
  text,
  photo,
  index
}: {
  text: string;
  photo?: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Text fades in as it enters viewport, fades out as it leaves
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0, 1, 1, 1, 0]
  );

  // Background opacity - smoother fade for crossfade effect
  const bgOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0]
  );

  // Subtle upward movement as text appears
  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [60, 0, 0, -60]
  );

  const photoUrl = photo ? `${BASE_PATH}media/${photo}.jpg` : undefined;

  return (
    <div ref={ref} className="scroll-block">
      {/* Background image - fixed and full screen */}
      {photoUrl && (
        <motion.div
          className="scroll-background"
          style={{
            backgroundImage: `url(${photoUrl})`,
            opacity: bgOpacity
          }}
        />
      )}

      {/* Text overlay */}
      <motion.div
        className="scroll-text-container"
        style={{ opacity: textOpacity, y }}
      >
        <p className="scroll-text">
          {text}
        </p>
      </motion.div>
    </div>
  );
}

export default function IntroSection() {
  const heroPhotoUrl = `${BASE_PATH}media/IMG_9209.jpg`;

  return (
    <section className="intro-section">
      {/* Hero title */}
      <div className="hero-block">
        <div
          className="hero-background"
          style={{ backgroundImage: `url(${heroPhotoUrl})` }}
        />
        <div className="hero-overlay" />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            London to Verona
          </motion.h1>
          <motion.div
            className="hero-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
          />
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            2025
          </motion.p>
        </motion.div>
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span>Scroll to begin</span>
          <motion.div
            className="scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>

      {/* Scrollytelling blocks */}
      {introContent.map((block, index) => (
        <ScrollBlock
          key={index}
          text={block.text}
          photo={block.photo}
          index={index}
        />
      ))}
    </section>
  );
}
