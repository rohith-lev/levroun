interface Props {
  status: 'read' | 'unread' | 'active' | 'inactive' | string;
}

const map: Record<string, { label: string; className: string }> = {
  unread: { label: 'Unread', className: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
  read: { label: 'Read', className: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  active: { label: 'Active', className: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  inactive: { label: 'Inactive', className: 'bg-slate-500/20 text-slate-400 border-slate-500/30' },
};

export default function StatusBadge({ status }: Props) {
  const config = map[status] ?? { label: status, className: 'bg-slate-500/20 text-slate-400 border-slate-500/30' };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium border ${config.className}`}>
      {config.label}
    </span>
  );
}
