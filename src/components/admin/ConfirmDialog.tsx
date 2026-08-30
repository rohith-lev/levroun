'use client';

import { AlertTriangle } from 'lucide-react';

interface Props {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title?: string;
  description?: string;
  confirmLabel?: string;
  loading?: boolean;
}

export default function ConfirmDialog({
  open,
  onConfirm,
  onCancel,
  title = 'Are you sure?',
  description = 'This action cannot be undone.',
  confirmLabel = 'Delete',
  loading = false,
}: Props) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        onClick={onCancel}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-sm bg-[#0D1117] border border-white/15 rounded-2xl p-6 shadow-2xl transition-all duration-200">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/15 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">{title}</h3>
            <p className="text-xs text-slate-400 mt-1">{description}</p>
          </div>
        </div>
        <div className="flex gap-2 mt-6 justify-end">
          <button
            onClick={onCancel}
            disabled={loading}
            className="px-4 py-2 rounded-lg text-xs font-medium text-slate-300 bg-white/5 hover:bg-white/10 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="px-4 py-2 rounded-lg text-xs font-medium text-white bg-red-500 hover:bg-red-600 transition-colors disabled:opacity-50 min-w-[80px]"
          >
            {loading ? (
              <span className="inline-block w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              confirmLabel
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
