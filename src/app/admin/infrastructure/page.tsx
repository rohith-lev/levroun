'use client';

import { useEffect, useState } from 'react';
import { Plus, Pencil, Eye, EyeOff, GripVertical, Save } from 'lucide-react';
import { motion } from 'framer-motion';
import Modal from '@/components/admin/Modal';
import MediaUploader from '@/components/admin/MediaUploader';
import toast from 'react-hot-toast';

interface Section {
  _id: string; section: string; title: string; description: string;
  images: string[]; videoUrl?: string; order: number; isVisible: boolean;
}

const EMPTY_SECTION: Omit<Section, '_id'> = {
  section: '', title: '', description: '', images: [], videoUrl: '', order: 0, isVisible: true,
};

export default function InfrastructurePage() {
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Section | null>(null);
  const [form, setForm] = useState<Omit<Section, '_id'>>(EMPTY_SECTION);
  const [saving, setSaving] = useState(false);
  const [dragIdx, setDragIdx] = useState<number | null>(null);

  async function fetch() {
    setLoading(true);
    const res = await window.fetch('/api/admin/infrastructure');
    const data = await res.json();
    setSections(data.sections ?? []);
    setLoading(false);
  }

  useEffect(() => { fetch(); }, []);

  function openCreate() { setEditing(null); setForm({ ...EMPTY_SECTION, order: sections.length }); setModalOpen(true); }
  function openEdit(s: Section) { setEditing(s); setForm({ section: s.section, title: s.title, description: s.description, images: s.images, videoUrl: s.videoUrl ?? '', order: s.order, isVisible: s.isVisible }); setModalOpen(true); }

  async function handleSave() {
    if (!form.section || !form.title) { toast.error('Section key and title are required'); return; }
    setSaving(true);
    try {
      const res = await window.fetch('/api/admin/infrastructure', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form),
      });
      const data = await res.json();
      setSections(prev => {
        const exists = prev.find(s => s._id === data.section._id);
        return exists ? prev.map(s => s._id === data.section._id ? data.section : s) : [data.section, ...prev];
      });
      toast.success(editing ? 'Section updated' : 'Section created');
      setModalOpen(false);
    } catch { toast.error('Save failed'); }
    setSaving(false);
  }

  async function toggleVisible(s: Section) {
    const res = await window.fetch('/api/admin/infrastructure', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...s, isVisible: !s.isVisible }),
    });
    const data = await res.json();
    setSections(prev => prev.map(x => x._id === s._id ? data.section : x));
    toast.success(data.section.isVisible ? 'Section visible' : 'Section hidden');
  }

  function onDragStart(i: number) { setDragIdx(i); }
  function onDragOver(e: React.DragEvent, i: number) {
    e.preventDefault();
    if (dragIdx === null || dragIdx === i) return;
    const updated = [...sections];
    const [moved] = updated.splice(dragIdx, 1);
    updated.splice(i, 0, moved);
    const reordered = updated.map((s, idx) => ({ ...s, order: idx }));
    setSections(reordered);
    setDragIdx(i);
  }
  async function onDragEnd() {
    setDragIdx(null);
    await window.fetch('/api/admin/infrastructure', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reorder: sections.map((s, i) => ({ id: s._id, order: i })) }),
    });
    toast.success('Order saved');
  }

  function addImageUrl(url: string) { setForm(f => ({ ...f, images: [...f.images, url] })); }
  function removeImage(idx: number) { setForm(f => ({ ...f, images: f.images.filter((_, i) => i !== idx) })); }

  return (
    <div className="space-y-5 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <p className="text-xs text-slate-500">{sections.length} section{sections.length !== 1 ? 's' : ''} · drag to reorder</p>
        <button onClick={openCreate}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
          <Plus className="w-4 h-4" /> Add Section
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-16"><div className="w-8 h-8 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" /></div>
      ) : sections.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-slate-500 text-sm">No infrastructure sections yet.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {sections.map((s, i) => (
            <motion.div key={s._id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
              draggable onDragStart={() => onDragStart(i)} onDragOver={e => onDragOver(e, i)} onDragEnd={onDragEnd}
              className={`bg-[#0D1117] border rounded-xl p-4 flex items-center gap-4 cursor-grab active:cursor-grabbing transition-all ${dragIdx === i ? 'border-orange-500/40 shadow-lg shadow-orange-500/10' : 'border-white/10 hover:border-white/20'}`}>
              <GripVertical className="w-4 h-4 text-slate-600 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs text-slate-600 font-mono bg-white/5 px-2 py-0.5 rounded">{s.section}</span>
                  <span className={`text-[11px] px-2 py-0.5 rounded-full border ${s.isVisible ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' : 'text-slate-500 bg-white/5 border-white/10'}`}>
                    {s.isVisible ? 'Visible' : 'Hidden'}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-white truncate">{s.title}</h3>
                <p className="text-xs text-slate-500 truncate mt-0.5">{s.description}</p>
                <div className="flex gap-1 mt-2 flex-wrap">
                  {s.images.slice(0, 3).map((img, j) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={j} src={img} alt="" className="w-10 h-10 rounded-lg object-cover border border-white/10" />
                  ))}
                  {s.images.length > 3 && <span className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs text-slate-500">+{s.images.length - 3}</span>}
                </div>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0">
                <button onClick={() => toggleVisible(s)} className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/10 transition-colors" title="Toggle visibility">
                  {s.isVisible ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                </button>
                <button onClick={() => openEdit(s)} className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/10 transition-colors"><Pencil className="w-3.5 h-3.5" /></button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Edit/Create Modal */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? 'Edit Section' : 'New Section'} size="lg">
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-400">Section Key *</label>
              <input value={form.section} onChange={e => setForm(f => ({ ...f, section: e.target.value }))} placeholder="e.g. labs, library"
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-orange-500/40" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-400">Title *</label>
              <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-orange-500/40" />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-400">Description</label>
            <textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} rows={3}
              className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-orange-500/40 resize-none" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-400">Video URL (YouTube embed or direct)</label>
            <input value={form.videoUrl ?? ''} onChange={e => setForm(f => ({ ...f, videoUrl: e.target.value }))}
              className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-orange-500/40" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-400">Upload Images</label>
            <MediaUploader onUpload={addImageUrl} label="Drop image here or click" accept={{ 'image/jpeg': ['.jpg','.jpeg'], 'image/png': ['.png'], 'image/webp': ['.webp'] }} />
            {form.images.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {form.images.map((img, j) => (
                  <div key={j} className="relative group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt="" className="w-16 h-16 rounded-lg object-cover border border-white/10" />
                    <button onClick={() => removeImage(j)}
                      className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">✕</button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={form.isVisible} onChange={e => setForm(f => ({ ...f, isVisible: e.target.checked }))} className="w-4 h-4 rounded accent-orange-500" />
            <span className="text-sm text-slate-300">Visible on website</span>
          </label>
          <div className="flex gap-2 pt-2 border-t border-white/10">
            <button onClick={() => setModalOpen(false)} className="px-4 py-2 rounded-xl bg-white/5 text-slate-300 text-sm hover:bg-white/10 transition-colors">Cancel</button>
            <button onClick={handleSave} disabled={saving}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors disabled:opacity-60">
              {saving ? <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><Save className="w-3.5 h-3.5" />Save</>}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
