import Profile from './Profile'
import HeroText from './HeroText'
import StatsBlock from './StatsBlock'

export default function LeftPanel() {
  return (
    <aside className="w-full md:h-screen md:w-[35%] md:fixed md:left-0 md:top-0">
      <div className="flex h-full flex-col px-6 py-10 md:overflow-hidden">
        <Profile />
        <HeroText />
        <StatsBlock />
      </div>
    </aside>
  )
}

