import { portfolioData } from '../../data/portfolioData'

type BackgroundProps = {
  src?: string
}

export default function Background({ src }: BackgroundProps) {
  const bg = src ?? portfolioData.backgrounds[0]

  return (
    <div className="absolute inset-0 z-0">
      <img
        src={bg}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-slate-900/55 to-black/70 backdrop-blur-[2px]" />
    </div>
  )
}

