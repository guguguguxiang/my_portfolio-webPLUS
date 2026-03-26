import { useState } from 'react'
import { portfolioData } from '../../data/portfolioData'
import Background from './Background'
import Showcase from './Showcase'

export default function RightPanel() {
  // 保留 useState 以支持后续可扩展的背景切换（目前 UI 视觉上不展示下拉框）
  const { backgrounds } = portfolioData
  const [activeBgIndex] = useState(0)

  return (
    <section className="relative flex-1 overflow-hidden w-full md:h-screen">
      <Background src={backgrounds[activeBgIndex]} />
      <Showcase />
    </section>
  )
}

