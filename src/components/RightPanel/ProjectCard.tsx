import { Check } from 'lucide-react'
import type { Project } from '../../data/portfolioData'

export type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const stages = ['To Do', 'In Progress', 'Done'] as const

  return (
    // 卡片主容器：保持 h-full 继承父级 SwiperSlide 的精确空间
    <article className="relative flex flex-col w-full h-full max-w-full overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-white/10">
      
      {/* 图片区：保持响应式固定高度，防止在宽屏下过度膨胀 */}
      <div className="shrink-0 h-[260px] sm:h-[340px] w-full p-3 pb-0">
        {/* bg-black/20 很重要，它作为“画布”填补图片显示不全的空白区域 */}
        <div className="h-full w-full rounded-t-2xl overflow-hidden bg-black/20 flex items-center justify-center">
          <img
            src={project.screenshotPath}
            alt={project.nameCn}
            loading="lazy"
            // 核心修复：换回 object-contain ！！！
            // 这个属性保证图片显示完全，绝不裁剪任何一部分！
            className="max-h-full max-w-full object-contain" 
          />
        </div>
      </div>

      {/* 文字内容滚动区：保持 overflow-y-auto 保证任何屏幕下底部不溢出 */}
      <div className="min-h-0 flex flex-1 flex-col overflow-y-auto px-6 py-5 custom-scrollbar">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-bold text-white">
              {project.nameCn}
            </h3>
            <span className="shrink-0 text-sm text-gray-300">
              {project.date}
            </span>
          </div>
          <p className="text-sm text-gray-200 md:text-base">
            {project.description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((t) => (
            <span
              key={t}
              className="rounded-lg bg-white/40 px-2 py-1 text-xs text-white"
            >
              {t}
            </span>
          ))}
        </div>

        {/* 底部状态区域：永远锁定在卡片最底部可见 */}
        <footer className="mt-auto shrink-0 pt-5">
          <div className="grid grid-cols-3 gap-2">
            {stages.map((stage) => {
              const active = stage === project.currentStage
              return (
                <div
                  key={stage}
                  className={
                    active
                      ? 'flex items-center justify-center gap-1 rounded-lg bg-blue-500 px-2 py-2 text-xs text-white'
                      : 'flex items-center justify-center gap-1 rounded-lg bg-white/35 px-2 py-2 text-xs text-white'
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
    </article>
  )
}