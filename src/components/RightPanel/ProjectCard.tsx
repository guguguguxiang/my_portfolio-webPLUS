import { CheckCircle } from 'lucide-react'
import type { Project } from '../../data/portfolioData'

export type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="h-[500px] w-[420px] max-w-full overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-white/0 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10">
      <div className="flex h-full flex-col">
        <div className="h-1/2 w-full">
          <img
            src={project.screenshotPath}
            alt={project.nameCn}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col px-6 py-5">
          <div>
            <h3 className="text-2xl font-bold text-white">{project.nameCn}</h3>
            <p className="mt-3 text-gray-300">{project.description}</p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <span
                key={t}
                className="rounded bg-white/5 px-2 py-1 text-sm text-white/80"
              >
                {t}
              </span>
            ))}
          </div>

          <footer className="mt-auto pt-6">
            <div className="flex items-center justify-between gap-4 text-sm text-gray-200/80">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">{project.date}</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-white/80" aria-hidden />
                <span className="text-gray-300">{project.status}</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </article>
  )
}

