'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, Edit2, Loader2, Save, X, Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';

interface Testimonial {
  _id: string;
  name: string;
  role: string;
  story: string;
  image: string;
  isVisible: boolean;
  order: number;
}

export default function TestimonialsAdmin() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [form, setForm] = useState({ name: '', role: '', story: '', image: '', isVisible: true, order: 0 });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  async function fetchTestimonials() {
    try {
      const res = await fetch('/api/admin/testimonials');
      const data = await res.json();
      setTestimonials(Array.isArray(data) ? data : []);
    } catch {
      toast.error('Failed to load testimonials');
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const url = isEditing ? `/api/admin/testimonials/${isEditing}` : '/api/admin/testimonials';
      const method = isEditing ? 'PUT' : 'POST';
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Failed to save');
      
      toast.success(`Testimonial ${isEditing ? 'updated' : 'created'}`);
      setIsCreating(false);
      setIsEditing(null);
      fetchTestimonials();
    } catch {
      toast.error('Something went wrong');
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;
    try {
      const res = await fetch(`/api/admin/testimonials/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');
      toast.success('Deleted successfully');
      fetchTestimonials();
    } catch {
      toast.error('Failed to delete');
    }
  }

  async function toggleVisibility(id: string, current: boolean) {
    try {
      const res = await fetch(`/api/admin/testimonials/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isVisible: !current }),
      });
      if (!res.ok) throw new Error('Failed to update');
      fetchTestimonials();
    } catch {
      toast.error('Failed to update visibility');
    }
  }

  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Testimonials</h1>
          <p className="text-sm text-slate-400">Manage student reviews and feedback.</p>
        </div>
        <button
          onClick={() => {
            setForm({ name: '', role: '', story: '', image: '', isVisible: true, order: testimonials.length });
            setIsCreating(true);
            setIsEditing(null);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Testimonial
        </button>
      </div>

      <AnimatePresence>
        {(isCreating || isEditing) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4 mb-8">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold text-white">{isEditing ? 'Edit' : 'Create'} Testimonial</h2>
                <button type="button" onClick={() => { setIsCreating(false); setIsEditing(null); }} className="text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-slate-400">Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#0D1117] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-slate-400">Role</label>
                  <input
                    required
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="w-full bg-[#0D1117] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-slate-400">Image URL</label>
                  <input
                    required
                    value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    className="w-full bg-[#0D1117] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-slate-400">Order</label>
                  <input
                    type="number"
                    value={form.order}
                    onChange={(e) => setForm({ ...form, order: parseInt(e.target.value) || 0 })}
                    className="w-full bg-[#0D1117] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-xs text-slate-400">Story</label>
                <textarea
                  required
                  rows={3}
                  value={form.story}
                  onChange={(e) => setForm({ ...form, story: e.target.value })}
                  className="w-full bg-[#0D1117] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="isVisible"
                  checked={form.isVisible}
                  onChange={(e) => setForm({ ...form, isVisible: e.target.checked })}
                  className="rounded border-white/10 bg-[#0D1117] text-orange-500 focus:ring-orange-500"
                />
                <label htmlFor="isVisible" className="text-sm text-slate-300">Visible on website</label>
              </div>

              <div className="flex justify-end pt-4">
                <button type="submit" className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors">
                  <Save className="w-4 h-4" /> {isEditing ? 'Save Changes' : 'Create'}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 text-orange-500 animate-spin" /></div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t._id} className={`p-5 rounded-2xl border transition-all ${t.isVisible ? 'bg-white/5 border-white/10' : 'bg-white/5 border-red-500/30 opacity-70'}`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {t.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-white/20" />
                  )}
                  <div>
                    <h3 className="font-semibold text-white text-sm">{t.name}</h3>
                    <p className="text-xs text-orange-400">{t.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button onClick={() => toggleVisibility(t._id, t.isVisible)} className={`p-1.5 rounded-lg transition-colors ${t.isVisible ? 'text-slate-400 hover:text-white hover:bg-white/10' : 'text-red-400 hover:text-red-300 hover:bg-red-500/10'}`}>
                    {t.isVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                  <button onClick={() => { setForm(t); setIsEditing(t._id); setIsCreating(false); window.scrollTo(0, 0); }} className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(t._id)} className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <p className="text-sm text-slate-300 line-clamp-3 italic">&quot;{t.story}&quot;</p>
            </div>
          ))}
          {testimonials.length === 0 && (
            <div className="col-span-full py-12 text-center text-slate-400 bg-white/5 rounded-2xl border border-white/10">
              No testimonials yet. Add one to get started!
            </div>
          )}
        </div>
      )}
    </div>
  );
}
