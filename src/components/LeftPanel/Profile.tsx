import { portfolioData } from '../../data/portfolioData'

export default function Profile() {
  const { personalInfo } = portfolioData

  return (
    <section className="flex flex-col items-center gap-5 md:items-start">
      <img
        src={personalInfo.avatarPath}
        alt={personalInfo.name}
        loading="lazy"
        className="h-24 w-24 rounded-full object-cover ring-1 ring-white/20"
      />

      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <h2 className="text-4xl font-bold leading-tight md:text-5xl">
          {personalInfo.name}
        </h2>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-gray-400 md:justify-start md:text-base">
          <span>{personalInfo.age}</span>
          <span className="text-white/20">•</span>
          <span>{personalInfo.basedIn}</span>
          <span className="text-white/20">•</span>
          <span>{personalInfo.role}</span>
        </div>
      </div>
    </section>
  )
}

