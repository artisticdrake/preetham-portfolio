import { FaGithub } from 'react-icons/fa'
import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'
import SectionHeading from '../ui/SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
      <SectionHeading
        index="02"
        title="Projects"
        right={
          <a
            href="https://github.com/artisticdrake"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-brand-secondary hover:text-brand-cyan transition-colors"
          >
            <FaGithub size={13} />
            all on GitHub →
          </a>
        }
      />

      {/* Bento grid — each card reveals as it scrolls into view */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            className={project.size === 'large' ? 'md:col-span-2' : undefined}
          />
        ))}
      </div>
    </section>
  )
}
