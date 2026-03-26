import { Check } from 'lucide-react'
import type { Project } from '../../data/portfolioData'

export type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const stages = ['To Do', 'In Progress', 'Done'] as const

  return (
    <article className="relative h-[520px] w-[420px] max-w-full overflow-hidden rounded-3xl bg-white/30 backdrop-blur-xl border border-white/40 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10">
      <div className="flex h-full flex-col">
        <div className="h-1/2 w-full p-3 pb-0">
          <img
            src={project.screenshotPath}
            alt={project.nameCn}
            loading="lazy"
            className="h-full w-full rounded-t-2xl object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col px-6 py-5">
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-bold text-gray-800">
                {project.nameCn}
              </h3>
              <span className="shrink-0 text-sm text-gray-700">
                {project.date}
              </span>
            </div>
            <p className="text-sm text-gray-800 md:text-base">
              {project.description}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <span
                key={t}
                className="rounded-lg bg-white/40 px-2 py-1 text-xs text-gray-800"
              >
                {t}
              </span>
            ))}
          </div>

          <footer className="mt-auto pt-5">
            <div className="grid grid-cols-3 gap-2">
              {stages.map((stage) => {
                const active = stage === project.currentStage
                return (
                  <div
                    key={stage}
                    className={
                      active
                        ? 'flex items-center justify-center gap-1 rounded-lg bg-blue-500 px-2 py-2 text-xs text-white'
                        : 'flex items-center justify-center gap-1 rounded-lg bg-white/35 px-2 py-2 text-xs text-gray-800'
                    }
                  >
                    {active && <Check className="h-3.5 w-3.5" />}
                    <span>{stage}</span>
                  </div>
                )
              })}
            </div>
          </footer>
        </div>
      </div>
    </article>
  )
}

