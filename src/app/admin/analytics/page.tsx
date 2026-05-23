'use client';

import { useEffect, useState } from 'react';
import { Users, TrendingUp, Eye } from 'lucide-react';
import StatsCard from '@/components/admin/StatsCard';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Legend } from 'recharts';
import { motion } from 'framer-motion';

const COLORS = ['#f97316', '#3b82f6', '#10b981', '#8b5cf6'];

export default function AnalyticsPage() {
  const [data, setData] = useState<{
    daily: { _id: string; count: number }[];
    topPages: { _id: string; count: number }[];
    deviceStats: { _id: string; count: number }[];
    totalVisitors: number;
    uniqueVisitors: number;
  } | null>(null);
  const [days, setDays] = useState(30);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/admin/visitors?days=${days}`)
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, [days]);

  const daily = (data?.daily ?? []).map(d => ({ date: d._id.slice(5), visits: d.count }));
  const pages = (data?.topPages ?? []).map(p => ({ page: p._id, visits: p.count }));
  const devices = (data?.deviceStats ?? []).map(d => ({ name: d._id, value: d.count }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tip = ({ active, payload, label }: any) =>
    active && payload?.length ? (
      <div className="bg-[#1a2235] border border-white/10 rounded-lg px-3 py-2 text-xs">
        <p className="text-slate-400">{label}</p>
        <p className="text-white font-semibold">{payload[0].value}</p>
      </div>
    ) : null;

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatsCard title="Total Visits" value={data?.totalVisitors ?? 0} icon={Eye} delay={0} />
        <StatsCard title="Unique Visitors" value={data?.uniqueVisitors ?? 0} icon={Users} iconColor="text-blue-400" delay={0.05} />
        <StatsCard title="Top Page Visits" value={data?.topPages[0]?.count ?? 0} icon={TrendingUp} iconColor="text-emerald-400" delay={0.1} />
      </div>

      {/* Date Range Filter */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-slate-500">Date range:</span>
        {[7, 14, 30, 90].map(d => (
          <button key={d} onClick={() => setDays(d)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${days === d ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-transparent'}`}>
            {d}d
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center py-16"><div className="w-8 h-8 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" /></div>
      ) : (
        <div className="space-y-4">
          {/* Line Chart */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-[#0D1117] border border-white/10 rounded-xl p-5">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Daily Visitors</h3>
            {daily.length > 0 ? (
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={daily}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="date" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip content={tip} />
                  <Line type="monotone" dataKey="visits" stroke="#f97316" strokeWidth={2} dot={{ fill: '#f97316', r: 3 }} activeDot={{ r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            ) : <p className="text-center py-16 text-slate-600 text-sm">No visitor data for this period</p>}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Top Pages */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="bg-[#0D1117] border border-white/10 rounded-xl p-5">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Top Pages</h3>
              {pages.length > 0 ? (
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={pages} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={false} />
                    <XAxis type="number" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis dataKey="page" type="category" tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} width={90} />
                    <Tooltip content={tip} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                    <Bar dataKey="visits" fill="#f97316" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              ) : <p className="text-center py-16 text-slate-600 text-sm">No page data</p>}
            </motion.div>

            {/* Device Breakdown */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              className="bg-[#0D1117] border border-white/10 rounded-xl p-5">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Device Types</h3>
              {devices.length > 0 ? (
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie data={devices} cx="50%" cy="45%" innerRadius={50} outerRadius={75} paddingAngle={3} dataKey="value">
                      {devices.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                    </Pie>
                    <Legend iconType="circle" iconSize={8} formatter={v => <span style={{ color: '#94a3b8', fontSize: 11 }}>{v}</span>} />
                    <Tooltip contentStyle={{ background: '#1a2235', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, fontSize: 12 }} />
                  </PieChart>
                </ResponsiveContainer>
              ) : <p className="text-center py-16 text-slate-600 text-sm">No device data</p>}
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}
