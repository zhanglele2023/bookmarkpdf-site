'use client'

import * as React from 'react'

export default function Component() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/api/background')",
      }}
    >
      <div className="bg-black/20 p-8 rounded-lg backdrop-blur-sm">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg">欢迎来到我的网站</h1>
      </div>
    </div>
  )
}
