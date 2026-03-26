export default function TopNav() {
  const navItems = ['Work', 'About', 'Contact']

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex h-16 w-full items-center justify-between px-6 md:px-10">
        <div className="text-lg font-extrabold tracking-[0.2em] text-white">
          PORTFOLIO
        </div>
        <ul className="flex items-center gap-6 text-sm font-medium text-gray-300 md:text-base">
          {navItems.map((item) => (
            <li key={item} className="transition-colors hover:text-white">
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

