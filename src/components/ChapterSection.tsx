import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ChapterSection.css';

const BASE_PATH = import.meta.env.BASE_URL;

interface TextBlock {
  text: string;
  photo?: string;
}

interface ChapterProps {
  chapterNumber: number;
  title: string;
  content: TextBlock[];
}

function ScrollBlock({
  text,
  photo,
}: {
  text: string;
  photo?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0, 1, 1, 1, 0]
  );

  const bgOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [60, 0, 0, -60]
  );

  const photoUrl = photo ? `${BASE_PATH}media/${photo}.jpg` : undefined;

  return (
    <div ref={ref} className="scroll-block">
      {photoUrl && (
        <motion.div
          className="scroll-background"
          style={{
            backgroundImage: `url(${photoUrl})`,
            opacity: bgOpacity
          }}
        />
      )}

      <motion.div
        className="scroll-text-container"
        style={{ opacity: textOpacity, y }}
      >
        <p className="scroll-text">{text}</p>
      </motion.div>
    </div>
  );
}

export default function ChapterSection({ chapterNumber, title, content }: ChapterProps) {
  const headerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"]
  });

  const headerOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );

  const headerY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [40, 0, 0, -40]
  );

  return (
    <section className="chapter-section">
      {/* Chapter header */}
      <div ref={headerRef} className="chapter-header">
        <motion.div
          className="chapter-header-content"
          style={{ opacity: headerOpacity, y: headerY }}
        >
          <span className="chapter-number">Chapter {chapterNumber}</span>
          <h2 className="chapter-title">{title}</h2>
        </motion.div>
      </div>

      {/* Scrollytelling blocks */}
      {content.map((block, index) => (
        <ScrollBlock
          key={index}
          text={block.text}
          photo={block.photo}
        />
      ))}
    </section>
  );
}
