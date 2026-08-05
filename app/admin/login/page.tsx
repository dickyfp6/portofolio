'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, ArrowRight, Home } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push('/admin');
        router.refresh();
      } else {
        setError('Incorrect password');
      }
    } catch (err) {
      setError('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md p-8 rounded-[2rem] bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-xl relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex justify-between items-center mb-8 relative z-10">
          <div className="p-3 rounded-2xl bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark w-fit">
            <Lock className="w-6 h-6" />
          </div>
          <Link href="/" className="p-2 rounded-xl text-foreground-light/50 hover:text-foreground-light dark:text-foreground-dark/50 dark:hover:text-foreground-dark hover:bg-muted-light dark:hover:bg-muted-dark transition-all">
            <Home className="w-5 h-5" />
          </Link>
        </div>

        <h1 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-2 relative z-10">
          Admin Access
        </h1>
        <p className="text-foreground-light/70 dark:text-foreground-dark/70 mb-8 relative z-10">
          Enter your secret password to access the project management dashboard.
        </p>

        <form onSubmit={handleLogin} className="space-y-4 relative z-10">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
              className="w-full px-4 py-3 rounded-xl bg-muted-light dark:bg-muted-dark border border-border-light dark:border-border-dark focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark transition-all text-foreground-light dark:text-foreground-dark"
              required
            />
          </div>
          
          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
          
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-foreground-light dark:bg-foreground-dark text-background-light dark:text-background-dark font-semibold hover:bg-accent-light dark:hover:bg-accent-dark transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
          >
            {loading ? 'Authenticating...' : 'Enter Dashboard'}
            {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
          </button>
        </form>
      </div>
    </div>
  );
}
