'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Copy, Check, Film, ImageIcon, Upload } from 'lucide-react';
import ConfirmDialog from '@/components/admin/ConfirmDialog';
import toast from 'react-hot-toast';
import { useDropzone } from 'react-dropzone';

interface Asset {
  _id: string; filename: string; originalName: string;
  url: string; mimeType: string; size: number; uploadedAt: string;
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

export default function MediaPage() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  async function fetchAssets() {
    setLoading(true);
    const res = await fetch('/api/admin/media');
    const data = await res.json();
    setAssets(data.assets ?? []);
    setLoading(false);
  }

  useEffect(() => { fetchAssets(); }, []);

  const onDrop = useCallback(async (files: File[]) => {
    setUploading(true);
    const results: Asset[] = [];
    for (const file of files) {
      const form = new FormData();
      form.append('file', file);
      try {
        const res = await fetch('/api/admin/media', { method: 'POST', body: form });
        const data = await res.json();
        if (res.ok) results.push(data.asset);
        else toast.error(`${file.name}: ${data.error}`);
      } catch { toast.error(`Failed to upload ${file.name}`); }
    }
    if (results.length) {
      setAssets(prev => [...results, ...prev]);
      toast.success(`${results.length} file${results.length > 1 ? 's' : ''} uploaded`);
    }
    setUploading(false);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/jpeg': ['.jpg','.jpeg'], 'image/png': ['.png'], 'image/webp': ['.webp'], 'video/mp4': ['.mp4'] },
    maxSize: 50 * 1024 * 1024,
  });

  function copyUrl(url: string) {
    navigator.clipboard.writeText(window.location.origin + url);
    setCopied(url);
    setTimeout(() => setCopied(null), 2000);
    toast.success('URL copied!');
  }

  async function handleDelete() {
    if (!deleteTarget) return;
    setDeleting(true);
    await fetch(`/api/admin/media/${deleteTarget}`, { method: 'DELETE' });
    setAssets(prev => prev.filter(a => a._id !== deleteTarget));
    setDeleteTarget(null); setDeleting(false);
    toast.success('File deleted');
  }

  return (
    <div className="space-y-5 max-w-7xl mx-auto">
      {/* Drop Zone */}
      <div {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${isDragActive ? 'border-orange-500/70 bg-orange-500/5' : 'border-white/15 hover:border-white/25 bg-white/3'}`}>
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-3">
          {uploading ? (
            <div className="w-8 h-8 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" />
          ) : (
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
              <Upload className="w-5 h-5 text-slate-400" />
            </div>
          )}
          <div>
            <p className="text-sm text-slate-300 font-medium">{isDragActive ? 'Drop files here!' : 'Drop files or click to upload'}</p>
            <p className="text-xs text-slate-500 mt-1">JPG · PNG · WEBP · MP4 · max 50MB per file</p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <p className="text-xs text-slate-500">{assets.length} file{assets.length !== 1 ? 's' : ''} in library</p>

      {/* Grid */}
      {loading ? (
        <div className="flex justify-center py-16"><div className="w-8 h-8 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" /></div>
      ) : assets.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-slate-600 text-sm">
          No files uploaded yet
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
          <AnimatePresence>
            {assets.map((a, i) => (
              <motion.div key={a._id}
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.02 }}
                className="group bg-[#0D1117] border border-white/10 rounded-xl overflow-hidden hover:border-white/25 transition-all">
                {/* Thumbnail */}
                <div className="relative h-36 bg-white/3">
                  {a.mimeType.startsWith('image/') ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={a.url} alt={a.originalName} className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Film className="w-8 h-8 text-slate-600" />
                    </div>
                  )}
                  {/* Overlay actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button onClick={() => copyUrl(a.url)}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors" title="Copy URL">
                      {copied === a.url ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                    <button onClick={() => setDeleteTarget(a._id)}
                      className="p-2 rounded-lg bg-red-500/20 hover:bg-red-500/40 text-red-400 transition-colors" title="Delete">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {/* Type badge */}
                  <div className="absolute top-2 left-2">
                    <span className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-black/70 text-[10px] text-slate-300">
                      {a.mimeType.startsWith('video/') ? <Film className="w-2.5 h-2.5" /> : <ImageIcon className="w-2.5 h-2.5" />}
                      {a.mimeType.split('/')[1].toUpperCase()}
                    </span>
                  </div>
                </div>
                {/* Info */}
                <div className="p-2.5">
                  <p className="text-xs text-white truncate font-medium">{a.originalName}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{formatBytes(a.size)}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      <ConfirmDialog open={!!deleteTarget} onCancel={() => setDeleteTarget(null)} onConfirm={handleDelete}
        loading={deleting} title="Delete file?" description="This will permanently delete the file from disk and the media library." />
    </div>
  );
}
