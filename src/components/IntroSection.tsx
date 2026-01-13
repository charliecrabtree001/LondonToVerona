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
    text: "Hey, I'm Charlie.",
    photo: "IMG_8906"
  },
  {
    text: "Last summer I cycled from London, England to Verona, Italy without spending a penny on accommodation.",
    photo: "IMG_8906"
  },
  {
    text: "I had no camping experience and very little cycling experience.",
    photo: "IMG_9133"
  },
  {
    text: "I'll show you how I pulled it off, and how you can do the same.",
    photo: "IMG_9232"
  },
  {
    text: "A quick shout out to Cliff Weitzman. An audiobook on his Speechify app gave me the inspiration for the trip.",
    photo: "IMG_9275"
  },
  {
    text: "He later challenged me to set up this web page…",
    photo: "IMG_9275"
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

  // Background opacity
  const bgOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
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
        <p className={`scroll-text ${index === 0 ? 'scroll-text-hero' : ''}`}>
          {text}
        </p>
      </motion.div>
    </div>
  );
}

export default function IntroSection() {
  return (
    <section className="intro-section">
      {/* Hero title */}
      <div className="hero-block">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          London to Verona
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          2025
        </motion.p>
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
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
