import TopNav from './components/Layout/TopNav'
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'

export default function App() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#0a0a0a] text-white">
      <TopNav />
      <div className="flex h-full flex-col md:flex-row">
        <LeftPanel />
        <main className="min-h-0 min-w-0 flex-1 md:ml-[40%]">
          <RightPanel />
        </main>
      </div>
    </div>
  )
}