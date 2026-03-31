import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import ProjectCard from './ProjectCard'
import { portfolioData } from '../../data/portfolioData'

export default function Showcase() {
  const { projects } = portfolioData

  return (
    // 外层容器：使用h-full继承父层高度，避免重复锁死高度
    <div className="relative z-10 flex h-full w-full flex-col overflow-hidden px-6 md:px-12 pt-24 pb-8">
      
      {/* 标题部分：shrink-0保证高度不被压缩 */}
      <h2 className="mb-6 shrink-0 text-center text-3xl font-bold tracking-widest text-white">
        FEATURED PROJECTS
      </h2>

      {/* 轮播图区域：flex-1 min-h-0精确占用剩余空间 */}
      <div className="flex-1 min-h-0 w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          centeredSlides={true}
          slidesPerView={'auto'}
          spaceBetween={30}
          grabCursor={true}
          className="h-full w-full"
          navigation={{
            prevEl: '.custom-swiper-prev',
            nextEl: '.custom-swiper-next',
          }}
          pagination={{
            clickable: true,
            el: '.custom-swiper-pagination',
            bulletClass: 'custom-bullet',
            bulletActiveClass: 'custom-bullet-active',
          }}
          breakpoints={{
            320: { spaceBetween: 20 },
            768: { spaceBetween: 25 },
            1024: { spaceBetween: 30 },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide
              key={project.id}
              // Slide设置：h-full继承高度，响应式宽度确保自然缩放
              className="flex h-full items-center justify-center w-[84vw] sm:w-[72vw] lg:w-[min(36vw,480px)] xl:w-[min(32vw,520px)] py-4"
            >
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 底部按钮：shrink-0 保证按钮区域高度不被压缩，同时保留了之前的间距修复逻辑 */}
      <div className="mt-4 shrink-0 flex justify-center">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="custom-swiper-prev flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/70 bg-white/20 text-white backdrop-blur-md transition-all hover:bg-white/30"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* 覆盖Swiper默认样式的核心修复 */}
          <div className="custom-swiper-pagination !static !w-auto flex items-center justify-center gap-2 px-1" />

          <button
            type="button"
            className="custom-swiper-next flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/70 bg-white/20 text-white backdrop-blur-md transition-all hover:bg-white/30"
            aria-label="Next project"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}