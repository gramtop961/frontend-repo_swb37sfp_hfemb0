import React from 'react'
import Hero from './components/Hero'
import PostList from './components/PostList'
import CreatePost from './components/CreatePost'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Background grain */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(124,58,237,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(139,92,246,0.15),transparent_45%)]"/>

      {/* Navbar */}
      <header className="relative z-20">
        <nav className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 shadow-lg shadow-violet-900/40" />
            <span className="font-semibold tracking-tight">SE Blog</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#posts" className="text-violet-200/80 hover:text-white">Posts</a>
            <a href="#create" className="text-violet-200/80 hover:text-white">Write</a>
          </div>
        </nav>
      </header>

      {/* Hero with Spline */}
      <Hero />

      {/* Posts */}
      <PostList />

      {/* Create */}
      <CreatePost />

      {/* Footer */}
      <footer className="border-t border-white/10 mt-8">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-violet-200/70">
          Built with a purple, futuristic vibe.
        </div>
      </footer>
    </div>
  )
}

export default App
