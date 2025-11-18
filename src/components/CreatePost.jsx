import React, { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function CreatePost() {
  const [form, setForm] = useState({ title: '', subtitle: '', content: '', author: '', cover_image: '', tags: '' })
  const [status, setStatus] = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  async function submit(e) {
    e.preventDefault()
    setStatus('')
    const payload = {
      title: form.title,
      subtitle: form.subtitle || undefined,
      content: form.content,
      author: form.author,
      cover_image: form.cover_image || undefined,
      tags: form.tags ? form.tags.split(',').map(t => t.trim()).filter(Boolean) : [],
      published: true,
    }
    try {
      const res = await fetch(`${API_BASE}/api/posts`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if (!res.ok) throw new Error('Failed')
      await res.json()
      setStatus('Post created! Refreshing list...')
      setForm({ title: '', subtitle: '', content: '', author: '', cover_image: '', tags: '' })
    } catch (e) {
      setStatus('Could not create post')
    }
  }

  return (
    <section id="create" className="max-w-3xl mx-auto px-6 pb-16">
      <h3 className="text-xl font-semibold text-white mb-4">Create a new post</h3>
      <form onSubmit={submit} className="grid gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
        <input className="rounded-lg bg-slate-900/60 border border-white/10 px-4 py-2 text-white placeholder:text-violet-300/40 focus:outline-none focus:ring-2 focus:ring-violet-500/50" name="title" placeholder="Title" value={form.title} onChange={onChange} required />
        <input className="rounded-lg bg-slate-900/60 border border-white/10 px-4 py-2 text-white placeholder:text-violet-300/40 focus:outline-none focus:ring-2 focus:ring-violet-500/50" name="subtitle" placeholder="Subtitle (optional)" value={form.subtitle} onChange={onChange} />
        <textarea rows={6} className="rounded-lg bg-slate-900/60 border border-white/10 px-4 py-2 text-white placeholder:text-violet-300/40 focus:outline-none focus:ring-2 focus:ring-violet-500/50" name="content" placeholder="Markdown content" value={form.content} onChange={onChange} required />
        <div className="grid sm:grid-cols-2 gap-4">
          <input className="rounded-lg bg-slate-900/60 border border-white/10 px-4 py-2 text-white placeholder:text-violet-300/40 focus:outline-none focus:ring-2 focus:ring-violet-500/50" name="author" placeholder="Author" value={form.author} onChange={onChange} required />
          <input className="rounded-lg bg-slate-900/60 border border-white/10 px-4 py-2 text-white placeholder:text-violet-300/40 focus:outline-none focus:ring-2 focus:ring-violet-500/50" name="cover_image" placeholder="Cover image URL (optional)" value={form.cover_image} onChange={onChange} />
        </div>
        <input className="rounded-lg bg-slate-900/60 border border-white/10 px-4 py-2 text-white placeholder:text-violet-300/40 focus:outline-none focus:ring-2 focus:ring-violet-500/50" name="tags" placeholder="Tags, comma separated (e.g., react, algorithms)" value={form.tags} onChange={onChange} />
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-violet-200/70">Your post will publish immediately.</p>
          <button type="submit" className="rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 text-white px-5 py-2.5 shadow-lg shadow-violet-900/40">
            Publish
          </button>
        </div>
        {status && <p className="text-sm text-violet-200/80">{status}</p>}
      </form>
    </section>
  )
}
