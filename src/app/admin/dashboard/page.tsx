'use client';

import { useEffect, useState } from 'react';
import {
  Users, MessageSquare, Megaphone, Building2,
  TrendingUp, Eye, Mail,
} from 'lucide-react';
import StatsCard from '@/components/admin/StatsCard';
import StatusBadge from '@/components/admin/StatusBadge';
import { motion } from 'framer-motion';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, BarChart, Bar,
  PieChart, Pie, Cell, Legend,
} from 'recharts';

interface DashboardData {
  stats: {
    totalVisitors: number;
    todayVisitors: number;
    uniqueVisitors: number;
    totalContacts: number;
    unreadContacts: number;
    activePopups: number;
    infraSections: number;
  };
  charts: {
    dailyVisitors: { _id: string; count: number }[];
    topPages: { _id: string; count: number }[];
    deviceStats: { _id: string; count: number }[];
  };
  recentContacts: {
    _id: string;
    name: string;
    email: string;
    message: string;
    status: string;
    submittedAt: string;
  }[];
}

const DEVICE_COLORS = ['#f97316', '#3b82f6', '#10b981', '#8b5cf6'];

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: { value: number }[]; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1a2235] border border-white/10 rounded-lg px-3 py-2 text-xs">
        <p className="text-slate-400">{label}</p>
        <p className="text-white font-semibold mt-0.5">{payload[0].value} visits</p>
      </div>
    );
  }
  return null;
};

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/dashboard')
      .then((r) => r.json())
      .then((d) => { setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" />
      </div>
    );
  }

  const stats = data?.stats;
  const charts = data?.charts;
  const recentContacts = data?.recentContacts ?? [];

  const dailyData = (charts?.dailyVisitors ?? []).map((d) => ({
    date: d._id.slice(5),
    visits: d.count,
  }));

  const pageData = (charts?.topPages ?? []).map((p) => ({
    page: p._id,
    visits: p.count,
  }));

  const deviceData = (charts?.deviceStats ?? []).map((d) => ({
    name: d._id,
    value: d.count,
  }));

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Total Visitors" value={stats?.totalVisitors ?? 0} icon={Users} delay={0} />
        <StatsCard title="Today's Visitors" value={stats?.todayVisitors ?? 0} icon={Eye} iconColor="text-blue-400" delay={0.05} />
        <StatsCard title="Total Contacts" value={stats?.totalContacts ?? 0} delta={`${stats?.unreadContacts ?? 0} unread`} deltaPositive={false} icon={MessageSquare} iconColor="text-emerald-400" delay={0.1} />
        <StatsCard title="Active Campaigns" value={stats?.activePopups ?? 0} icon={Megaphone} iconColor="text-purple-400" delay={0.15} />
        <StatsCard title="Unique Visitors" value={stats?.uniqueVisitors ?? 0} icon={TrendingUp} delay={0.2} />
        <StatsCard title="Infra Sections" value={stats?.infraSections ?? 0} icon={Building2} iconColor="text-teal-400" delay={0.25} />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Line chart */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 bg-[#0D1117] border border-white/10 rounded-xl p-5"
        >
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Daily Visitors — Last 7 Days
          </h3>
          {dailyData.length > 0 ? (
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={dailyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="date" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="visits"
                  stroke="#f97316"
                  strokeWidth={2}
                  dot={{ fill: '#f97316', r: 3 }}
                  activeDot={{ r: 5, fill: '#f97316' }}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex items-center justify-center h-[200px] text-slate-600 text-sm">
              No visitor data yet
            </div>
          )}
        </motion.div>

        {/* Pie chart */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="bg-[#0D1117] border border-white/10 rounded-xl p-5"
        >
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Device Breakdown
          </h3>
          {deviceData.length > 0 ? (
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="45%"
                  innerRadius={50}
                  outerRadius={75}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {deviceData.map((_, index) => (
                    <Cell key={index} fill={DEVICE_COLORS[index % DEVICE_COLORS.length]} />
                  ))}
                </Pie>
                <Legend
                  iconType="circle"
                  iconSize={8}
                  formatter={(v) => <span style={{ color: '#94a3b8', fontSize: 11 }}>{v}</span>}
                />
                <Tooltip
                  contentStyle={{ background: '#1a2235', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, fontSize: 12 }}
                  labelStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex items-center justify-center h-[200px] text-slate-600 text-sm">
              No device data yet
            </div>
          )}
        </motion.div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Top Pages bar chart */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#0D1117] border border-white/10 rounded-xl p-5"
        >
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Top Pages
          </h3>
          {pageData.length > 0 ? (
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={pageData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={false} />
                <XAxis type="number" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis dataKey="page" type="category" tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} width={80} />
                <Tooltip
                  contentStyle={{ background: '#1a2235', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, fontSize: 12 }}
                  cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                />
                <Bar dataKey="visits" fill="#f97316" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex items-center justify-center h-[180px] text-slate-600 text-sm">
              No page data yet
            </div>
          )}
        </motion.div>

        {/* Recent Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="bg-[#0D1117] border border-white/10 rounded-xl p-5"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Recent Submissions
            </h3>
            <a href="/admin/contacts" className="text-xs text-orange-400 hover:text-orange-300 transition-colors">
              View all →
            </a>
          </div>
          {recentContacts.length > 0 ? (
            <div className="space-y-3">
              {recentContacts.map((c) => (
                <div key={c._id} className="flex items-start gap-3 p-3 rounded-lg bg-white/3 hover:bg-white/5 transition-colors">
                  <div className="w-7 h-7 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-3.5 h-3.5 text-orange-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-medium text-white truncate">{c.name}</p>
                      <StatusBadge status={c.status} />
                    </div>
                    <p className="text-[11px] text-slate-500 truncate mt-0.5">{c.message}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-[160px] text-slate-600 text-sm">
              No submissions yet
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
