import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/motion'
import SectionHeading from '../ui/SectionHeading'

const articles = [
  {
    title: 'Are LLMs Actually AGI?',
    description:
      'Exploring the fundamental differences between LLMs and Artificial General Intelligence, and why that distinction matters for how we build, deploy, and think about AI systems.',
    date: 'Jan 2025',
    readTime: '8 min',
    tags: ['AI', 'LLM', 'AGI'],
    link: 'https://medium.com/@prathipatipreetham/why-large-language-models-are-not-agi-and-why-that-matters-bb831369e8e0',
  },
]

export default function Writing() {
  return (
    <section id="writing" className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
      <SectionHeading index="07" title="Writing" />

      <motion.div
        className="max-w-2xl space-y-px"
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {articles.map((article, i) => (
          <motion.a
            key={i}
            variants={fadeUp}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="article-click"
            data-umami-event-title={article.title}
            className="group flex items-start justify-between gap-6 py-5 border-b border-white/[0.06] hover:border-brand-cyan/20 transition-colors"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-brand-muted font-mono text-xs">{article.date}</span>
                <span className="text-brand-muted text-xs">·</span>
                <span className="text-brand-muted font-mono text-xs">{article.readTime} read</span>
              </div>
              <h3 className="text-brand-primary font-sans font-medium group-hover:text-brand-cyan transition-colors mb-1.5">
                {article.title}
              </h3>
              <p className="text-sm text-brand-secondary leading-relaxed">{article.description}</p>
              <div className="flex gap-1.5 mt-2.5 flex-wrap">
                {article.tags.map(tag => (
                  <span key={tag} className="text-[11px] font-mono text-brand-muted px-1.5 py-0.5 rounded bg-brand-elevated">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <ExternalLink
              size={14}
              className="text-brand-muted group-hover:text-brand-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1"
            />
          </motion.a>
        ))}

        <motion.div variants={fadeUp} className="pt-5">
          <a
            href="https://medium.com/@prathipatipreetham"
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="article-click"
            data-umami-event-title="Medium profile"
            className="text-xs font-mono text-brand-secondary hover:text-brand-cyan transition-colors"
          >
            More articles coming · View on Medium →
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
