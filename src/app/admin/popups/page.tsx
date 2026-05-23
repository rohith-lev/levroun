'use client';

import { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2, ToggleLeft, ToggleRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Modal from '@/components/admin/Modal';
import ConfirmDialog from '@/components/admin/ConfirmDialog';
import StatusBadge from '@/components/admin/StatusBadge';
import toast from 'react-hot-toast';

interface Popup {
  _id: string; title: string; type: string; content: string;
  ctaText: string; ctaUrl: string; imageUrl?: string;
  isActive: boolean; trigger: string; pages: string;
  startDate?: string; endDate?: string; frequency: string;
  timerDelay?: number;
}

const EMPTY: Omit<Popup, '_id'> = {
  title: '', type: 'internship', content: '', ctaText: '', ctaUrl: '',
  isActive: false, trigger: 'timed', pages: 'all', frequency: 'once', timerDelay: 3000,
};

const TYPE_COLORS: Record<string, string> = {
  internship: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  admission: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  webinar: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  discount: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
};

export default function PopupsPage() {
  const [popups, setPopups] = useState<Popup[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Popup | null>(null);
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  async function fetchPopups() {
    setLoading(true);
    const res = await fetch('/api/admin/popups');
    const data = await res.json();
    setPopups(data.popups ?? []);
    setLoading(false);
  }

  useEffect(() => { fetchPopups(); }, []);

  function openCreate() { setEditing(null); setForm(EMPTY); setModalOpen(true); }
  function openEdit(p: Popup) { setEditing(p); setForm({ ...p }); setModalOpen(true); }

  async function handleSave() {
    setSaving(true);
    try {
      if (editing) {
        const res = await fetch(`/api/admin/popups/${editing._id}`, {
          method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form),
        });
        const data = await res.json();
        setPopups(prev => prev.map(p => p._id === editing._id ? data.popup : p));
        toast.success('Campaign updated');
      } else {
        const res = await fetch('/api/admin/popups', {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form),
        });
        const data = await res.json();
        setPopups(prev => [data.popup, ...prev]);
        toast.success('Campaign created');
      }
      setModalOpen(false);
    } catch { toast.error('Save failed'); }
    setSaving(false);
  }

  async function toggleActive(p: Popup) {
    const res = await fetch(`/api/admin/popups/${p._id}`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ isActive: !p.isActive }),
    });
    const data = await res.json();
    setPopups(prev => prev.map(x => x._id === p._id ? data.popup : x));
    toast.success(data.popup.isActive ? 'Campaign activated' : 'Campaign deactivated');
  }

  async function handleDelete() {
    if (!deleteTarget) return;
    setDeleting(true);
    await fetch(`/api/admin/popups/${deleteTarget}`, { method: 'DELETE' });
    setPopups(prev => prev.filter(p => p._id !== deleteTarget));
    setDeleteTarget(null); setDeleting(false);
    toast.success('Campaign deleted');
  }

  const field = (key: keyof typeof form, label: string, type = 'text', opts?: string[]) => (
    <div className="space-y-1.5">
      <label className="text-xs font-medium text-slate-400">{label}</label>
      {opts ? (
        <select value={String(form[key])} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
          className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-orange-500/40">
          {opts.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input type={type} value={String(form[key] ?? '')} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
          className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-orange-500/40" />
      )}
    </div>
  );

  return (
    <div className="space-y-5 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <p className="text-xs text-slate-500">{popups.length} campaign{popups.length !== 1 ? 's' : ''}</p>
        <button onClick={openCreate}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
          <Plus className="w-4 h-4" /> New Campaign
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-16"><div className="w-8 h-8 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" /></div>
      ) : popups.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-3">
            <Plus className="w-6 h-6 text-slate-500" />
          </div>
          <p className="text-slate-500 text-sm">No campaigns yet. Create your first popup!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {popups.map((p, i) => (
            <motion.div key={p._id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="bg-[#0D1117] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <span className={`inline-flex px-2 py-0.5 rounded-full text-[11px] font-medium border ${TYPE_COLORS[p.type] ?? ''}`}>
                  {p.type}
                </span>
                <div className="flex items-center gap-1">
                  <button onClick={() => toggleActive(p)} className="text-slate-500 hover:text-white transition-colors" title="Toggle">
                    {p.isActive ? <ToggleRight className="w-5 h-5 text-orange-400" /> : <ToggleLeft className="w-5 h-5" />}
                  </button>
                  <button onClick={() => openEdit(p)} className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/10 transition-colors"><Pencil className="w-3.5 h-3.5" /></button>
                  <button onClick={() => setDeleteTarget(p._id)} className="p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
                </div>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">{p.title}</h3>
              <p className="text-xs text-slate-500 line-clamp-2 mb-3">{p.content}</p>
              <div className="flex items-center gap-2 flex-wrap">
                <StatusBadge status={p.isActive ? 'active' : 'inactive'} />
                <span className="text-[11px] text-slate-600 bg-white/5 px-2 py-0.5 rounded-full">{p.trigger}</span>
                <span className="text-[11px] text-slate-600 bg-white/5 px-2 py-0.5 rounded-full">{p.pages}</span>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Create/Edit Modal */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? 'Edit Campaign' : 'New Campaign'} size="lg">
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {field('title', 'Title *')}
          {field('type', 'Type', 'text', ['internship', 'admission', 'webinar', 'discount'])}
          <div className="col-span-full space-y-1.5">
            <label className="text-xs font-medium text-slate-400">Content *</label>
            <textarea value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))} rows={3}
              className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-orange-500/40 resize-none" />
          </div>
          {field('ctaText', 'CTA Button Text *')}
          {field('ctaUrl', 'CTA URL *')}
          {field('imageUrl', 'Image URL (optional)')}
          {field('trigger', 'Trigger', 'text', ['timed', 'exit_intent', 'immediate'])}
          {field('pages', 'Show On', 'text', ['all', 'homepage'])}
          {field('frequency', 'Frequency', 'text', ['once', 'daily', 'always'])}
          {form.trigger === 'timed' && (
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-400">Delay (ms)</label>
              <input type="number" value={form.timerDelay ?? 3000} onChange={e => setForm(f => ({ ...f, timerDelay: Number(e.target.value) }))}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-orange-500/40" />
            </div>
          )}
          {field('startDate', 'Start Date', 'date')}
          {field('endDate', 'End Date', 'date')}
          <div className="col-span-full flex items-center justify-between pt-2 border-t border-white/10">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={form.isActive} onChange={e => setForm(f => ({ ...f, isActive: e.target.checked }))}
                className="w-4 h-4 rounded accent-orange-500" />
              <span className="text-sm text-slate-300">Active</span>
            </label>
            <div className="flex gap-2">
              <button onClick={() => setModalOpen(false)} className="px-4 py-2 rounded-xl bg-white/5 text-slate-300 text-sm hover:bg-white/10 transition-colors">Cancel</button>
              <button onClick={handleSave} disabled={saving}
                className="px-4 py-2 rounded-xl bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors disabled:opacity-60 min-w-[80px]">
                {saving ? <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : 'Save'}
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <ConfirmDialog open={!!deleteTarget} onCancel={() => setDeleteTarget(null)} onConfirm={handleDelete}
        loading={deleting} title="Delete campaign?" description="This popup campaign will be permanently removed." />
    </div>
  );
}
