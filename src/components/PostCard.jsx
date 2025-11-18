import React from 'react'

export default function PostCard({ post }) {
  const date = post.created_at ? new Date(post.created_at) : null
  return (
    <article className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-5 backdrop-blur-md">
      {post.cover_image && (
        <div className="relative mb-4 overflow-hidden rounded-xl">
          <img src={post.cover_image} alt={post.title} className="w-full h-48 object-cover transition-transform group-hover:scale-[1.03]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"/>
        </div>
      )}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-white">{post.title}</h3>
        {post.subtitle && <p className="text-violet-200/80 text-sm">{post.subtitle}</p>}
        <div className="flex flex-wrap gap-2 mt-2">
          {(post.tags || []).map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-violet-500/15 text-violet-200 border border-violet-400/20">{t}</span>
          ))}
        </div>
        <div className="mt-3 text-xs text-violet-300/70">
          {post.author && <span>By {post.author}</span>}
          {date && <span className="ml-2">• {date.toLocaleDateString()}</span>}
        </div>
      </div>
    </article>
  )
}
