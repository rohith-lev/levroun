'use client';

import { useState, FormEvent } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { GraduationCap, Eye, EyeOff, AlertCircle, Loader2 } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError('Invalid email or password. Please try again.');
    } else {
      // Hard redirect to ensure session cookie is committed before page loads
      window.location.href = '/admin/dashboard';
    }
  }

  return (
    <div className="min-h-screen bg-[#080C14] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-sm"
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30 mb-4"
          >
            <GraduationCap className="w-6 h-6 text-white" />
          </motion.div>
          <h1 className="text-xl font-bold text-white">Admin Portal</h1>
          <p className="text-sm text-slate-500 mt-1">Inzovate Technologies CMS</p>
        </div>

        {/* Card */}
        <div className="bg-[#0D1117]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Error */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs"
              >
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                {error}
              </motion.div>
            )}

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-400">Email address</label>
              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@inzovate.com"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all"
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-400">Password</label>
              <div className="relative">
                <input
                  id="admin-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 pr-12 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <motion.button
              id="admin-login-submit"
              type="submit"
              disabled={loading}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-200 disabled:opacity-60 flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Signing in…
                </>
              ) : (
                'Sign in to CMS'
              )}
            </motion.button>
          </form>
        </div>

        <p className="text-center text-xs text-slate-600 mt-6">
          Protected admin area · Inzovate Technologies
        </p>
      </motion.div>
    </div>
  );
}
