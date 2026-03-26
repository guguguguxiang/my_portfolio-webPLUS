import Background from './Background'
import Showcase from './Showcase'

export default function RightPanel() {
  return (
    <section className="relative h-screen w-full overflow-hidden md:flex-1 md:h-screen">
      <Background />
      <Showcase />
    </section>
  )
}

