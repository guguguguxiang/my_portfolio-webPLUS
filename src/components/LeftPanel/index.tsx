import Profile from './Profile'
import HeroText from './HeroText'
import StatsBlock from './StatsBlock'

export default function LeftPanel() {
  return (
    <aside className="w-full bg-[#1b2028] md:fixed md:left-0 md:top-0 md:h-screen md:w-[40%]">
      <div className="flex h-full flex-col px-6 pb-8 pt-24 md:overflow-hidden md:px-10">
        <Profile />
        <HeroText />
        <StatsBlock />
      </div>
    </aside>
  )
}

