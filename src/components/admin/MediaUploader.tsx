'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X } from 'lucide-react';

interface Props {
  onUpload: (url: string) => void;
  accept?: Record<string, string[]>;
  label?: string;
}

export default function MediaUploader({
  onUpload,
  accept = {
    'image/jpeg': ['.jpg', '.jpeg'],
    'image/png': ['.png'],
    'image/webp': ['.webp'],
    'video/mp4': ['.mp4'],
  },
  label = 'Drop files here or click to upload',
}: Props) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(
    async (files: File[]) => {
      const file = files[0];
      if (!file) return;

      setError(null);
      setUploading(true);

      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => setPreview(reader.result as string);
        reader.readAsDataURL(file);
      }

      try {
        const form = new FormData();
        form.append('file', file);

        const res = await fetch('/api/admin/media', { method: 'POST', body: form });
        const data = await res.json();

        if (!res.ok) throw new Error(data.error ?? 'Upload failed');

        onUpload(data.asset.url);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Upload failed');
        setPreview(null);
      } finally {
        setUploading(false);
      }
    },
    [onUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept, maxFiles: 1 });

  return (
    <div className="space-y-2">
      <div
        {...getRootProps()}
        className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200 ${
          isDragActive
            ? 'border-orange-500/70 bg-orange-500/5'
            : 'border-white/15 hover:border-white/30 bg-white/3'
        }`}
      >
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
            <p className="text-sm text-slate-300 font-medium">
              {isDragActive ? 'Drop it here!' : label}
            </p>
            <p className="text-xs text-slate-500 mt-1">JPG, PNG, WEBP, MP4 · max 50MB</p>
          </div>
        </div>
      </div>

      {preview && (
        <div className="relative w-full h-40 rounded-xl overflow-hidden border border-white/10 transition-all duration-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={preview} alt="Preview" className="w-full h-full object-cover" />
          <button
            onClick={() => setPreview(null)}
            className="absolute top-2 right-2 p-1 rounded-md bg-black/60 text-white hover:bg-black/80"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}
      {error && (
        <p className="text-xs text-red-400 px-1 transition-opacity duration-200">{error}</p>
      )}
    </div>
  );
}
