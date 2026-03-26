import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import ProjectCard from './ProjectCard'
import { portfolioData } from '../../data/portfolioData'

export default function Showcase() {
  const { projects } = portfolioData

  return (
    <div className="relative z-10 h-full w-full px-8 py-10 md:px-12">
      <h2 className="mb-8 text-3xl font-bold tracking-widest">
        FEATURED PROJECTS
      </h2>

      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        grabCursor={true}
      >
        {projects.map((project) => (
          <SwiperSlide
            key={project.id}
            className="flex w-[80%] md:w-[400px]"
          >
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

