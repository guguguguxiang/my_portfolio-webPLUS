import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'

export default function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#0a0a0a] text-white">
      <LeftPanel />
      <main className="min-h-screen md:flex-1 md:ml-[35%]">
        <RightPanel />
      </main>
    </div>
  )
}
