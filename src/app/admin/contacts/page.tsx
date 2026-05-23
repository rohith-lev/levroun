'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Search, Download, Trash2, Eye, Check, X, Mail, Phone, Clock } from 'lucide-react';
import StatusBadge from '@/components/admin/StatusBadge';
import Modal from '@/components/admin/Modal';
import ConfirmDialog from '@/components/admin/ConfirmDialog';
import toast from 'react-hot-toast';

interface Contact {
  _id: string; name: string; email: string; phone?: string;
  message: string; status: 'read' | 'unread'; submittedAt: string;
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Contact | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const limit = 15;

  const fetchContacts = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({ search, status: statusFilter, page: String(page), limit: String(limit) });
    const res = await fetch(`/api/admin/contacts?${params}`);
    const data = await res.json();
    setContacts(data.contacts ?? []);
    setTotal(data.total ?? 0);
    setLoading(false);
  }, [search, statusFilter, page]);

  useEffect(() => { fetchContacts(); }, [fetchContacts]);

  async function updateStatus(id: string, status: 'read' | 'unread') {
    await fetch(`/api/admin/contacts/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status }) });
    setContacts(prev => prev.map(c => c._id === id ? { ...c, status } : c));
    toast.success(`Marked as ${status}`);
  }

  async function handleDelete() {
    if (!deleteTarget) return;
    setDeleting(true);
    await fetch(`/api/admin/contacts/${deleteTarget}`, { method: 'DELETE' });
    setContacts(prev => prev.filter(c => c._id !== deleteTarget));
    setTotal(t => t - 1);
    setDeleteTarget(null); setDeleting(false);
    toast.success('Submission deleted');
  }

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="space-y-5 max-w-7xl mx-auto">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input type="text" placeholder="Search by name, email, message…" value={search}
            onChange={e => { setSearch(e.target.value); setPage(1); }}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#0D1117] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-orange-500/40 transition-colors" />
        </div>
        <select value={statusFilter} onChange={e => { setStatusFilter(e.target.value); setPage(1); }}
          className="px-4 py-2.5 rounded-xl bg-[#0D1117] border border-white/10 text-sm text-slate-300 focus:outline-none focus:border-orange-500/40">
          <option value="">All status</option>
          <option value="unread">Unread</option>
          <option value="read">Read</option>
        </select>
        <a href="/api/admin/contacts/export"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium hover:bg-orange-500/20 transition-colors">
          <Download className="w-4 h-4" /> Export CSV
        </a>
      </div>
      <p className="text-xs text-slate-500">{total} total submission{total !== 1 ? 's' : ''}</p>

      {/* Table */}
      <div className="bg-[#0D1117] border border-white/10 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                {['Name','Email','Phone','Message','Status','Date','Actions'].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={7} className="text-center py-16">
                  <div className="inline-block w-6 h-6 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" />
                </td></tr>
              ) : contacts.length === 0 ? (
                <tr><td colSpan={7} className="text-center py-16 text-slate-600 text-sm">No submissions found</td></tr>
              ) : contacts.map((c, i) => (
                <motion.tr key={c._id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.03 }}
                  className="border-b border-white/5 hover:bg-white/3 transition-colors">
                  <td className="px-4 py-3 font-medium text-white whitespace-nowrap">{c.name}</td>
                  <td className="px-4 py-3 text-slate-400 whitespace-nowrap">{c.email}</td>
                  <td className="px-4 py-3 text-slate-500 whitespace-nowrap">{c.phone ?? '—'}</td>
                  <td className="px-4 py-3 text-slate-400 max-w-[200px]"><p className="truncate">{c.message}</p></td>
                  <td className="px-4 py-3"><StatusBadge status={c.status} /></td>
                  <td className="px-4 py-3 text-slate-500 whitespace-nowrap text-xs">{new Date(c.submittedAt).toLocaleDateString()}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <button onClick={() => setSelected(c)} className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/10 transition-colors" title="View"><Eye className="w-3.5 h-3.5" /></button>
                      <button onClick={() => updateStatus(c._id, c.status === 'read' ? 'unread' : 'read')} className="p-1.5 rounded-lg text-slate-500 hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors" title="Toggle status">
                        {c.status === 'read' ? <X className="w-3.5 h-3.5" /> : <Check className="w-3.5 h-3.5" />}
                      </button>
                      <button onClick={() => setDeleteTarget(c._id)} className="p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-500/10 transition-colors" title="Delete"><Trash2 className="w-3.5 h-3.5" /></button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-white/10">
            <p className="text-xs text-slate-500">Page {page} of {totalPages}</p>
            <div className="flex gap-2">
              <button disabled={page <= 1} onClick={() => setPage(p => p - 1)} className="px-3 py-1 rounded-lg text-xs text-slate-400 bg-white/5 hover:bg-white/10 disabled:opacity-40 transition-colors">← Prev</button>
              <button disabled={page >= totalPages} onClick={() => setPage(p => p + 1)} className="px-3 py-1 rounded-lg text-xs text-slate-400 bg-white/5 hover:bg-white/10 disabled:opacity-40 transition-colors">Next →</button>
            </div>
          </div>
        )}
      </div>

      {/* View Modal */}
      <Modal open={!!selected} onClose={() => setSelected(null)} title="Contact Submission" size="md">
        {selected && (
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div><p className="text-xs text-slate-500 mb-1">Name</p><p className="text-sm text-white font-medium">{selected.name}</p></div>
              <div><p className="text-xs text-slate-500 mb-1">Status</p><StatusBadge status={selected.status} /></div>
              <div><p className="text-xs text-slate-500 mb-1 flex items-center gap-1"><Mail className="w-3 h-3" />Email</p><p className="text-sm text-white">{selected.email}</p></div>
              <div><p className="text-xs text-slate-500 mb-1 flex items-center gap-1"><Phone className="w-3 h-3" />Phone</p><p className="text-sm text-white">{selected.phone ?? '—'}</p></div>
              <div className="col-span-2"><p className="text-xs text-slate-500 mb-1 flex items-center gap-1"><Clock className="w-3 h-3" />Submitted</p><p className="text-sm text-white">{new Date(selected.submittedAt).toLocaleString()}</p></div>
            </div>
            <div><p className="text-xs text-slate-500 mb-1">Message</p>
              <div className="p-4 rounded-xl bg-white/3 border border-white/10 text-sm text-slate-300 leading-relaxed">{selected.message}</div>
            </div>
            <div className="flex gap-2 pt-2">
              <button onClick={() => { updateStatus(selected._id, selected.status === 'read' ? 'unread' : 'read'); setSelected(null); }}
                className="flex-1 py-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium hover:bg-orange-500/20 transition-colors">
                Mark as {selected.status === 'read' ? 'Unread' : 'Read'}
              </button>
              <button onClick={() => { setDeleteTarget(selected._id); setSelected(null); }}
                className="px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium hover:bg-red-500/20 transition-colors">Delete</button>
            </div>
          </div>
        )}
      </Modal>

      <ConfirmDialog open={!!deleteTarget} onCancel={() => setDeleteTarget(null)} onConfirm={handleDelete}
        loading={deleting} title="Delete submission?" description="This will permanently remove the contact submission." />
    </div>
  );
}
