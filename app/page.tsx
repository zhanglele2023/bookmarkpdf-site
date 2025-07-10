import Link from 'next/link'

export default function Component() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/api/background')",
      }}
    >
      <div className="bg-black/20 p-8 rounded-lg backdrop-blur-sm text-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-8 drop-shadow-lg">Welcome to my site</h1>
        <Link 
          href="/ai-innovation"
          className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105 drop-shadow-lg"
        >
          Get Started
        </Link>
      </div>
    </div>
  )
}
