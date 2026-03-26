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
    <div className="relative z-10 flex h-full w-full flex-col overflow-hidden px-6 md:px-12 pt-24">
      <h2 className="mb-8 text-center text-3xl font-bold tracking-widest text-gray-900">
        FEATURED PROJECTS
      </h2>

      <div className="flex-1 min-h-0">
        <Swiper
          modules={[Navigation, Pagination]}
          centeredSlides={true}
          slidesPerView={'auto'}
          spaceBetween={30}
          grabCursor={true}
          className="h-full"
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
        >
          {projects.map((project) => (
            <SwiperSlide
              key={project.id}
              className="flex w-[80%] justify-center md:w-[420px]"
            >
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4 pb-8">
        <button
          type="button"
          className="custom-swiper-prev flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-white/20 text-white backdrop-blur-md"
          aria-label="Previous project"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="custom-swiper-pagination flex items-center gap-2" />

        <button
          type="button"
          className="custom-swiper-next flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-white/20 text-white backdrop-blur-md"
          aria-label="Next project"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

