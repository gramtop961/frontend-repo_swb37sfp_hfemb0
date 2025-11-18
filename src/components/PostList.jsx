import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function PostList() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API_BASE}/api/posts`)
        const data = await res.json()
        setPosts(data.items || [])
      } catch (e) {
        setError('Could not load posts')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <p className="text-violet-200/80">Loading posts...</p>
  if (error) return <p className="text-rose-300">{error}</p>

  return (
    <section id="posts" className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Latest posts</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
        {posts.length === 0 && (
          <div className="col-span-full text-center text-violet-200/80">
            No posts yet. Use the form below to create the first one.
          </div>
        )}
      </div>
    </section>
  )
}
