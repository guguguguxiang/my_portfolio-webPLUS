import { portfolioData } from '../../data/portfolioData'

export default function Background() {
  const bg = portfolioData.backgrounds[0]

  return (
    <div className="absolute inset-0">
      <img
        src={bg}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover"
      />
      {/* 遮罩层：确保后续文字/卡片可读 */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
    </div>
  )
}

