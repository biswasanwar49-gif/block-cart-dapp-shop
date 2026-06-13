import Link from 'next/link';
import { CreditCard, Heart, ShieldCheck, UserCircle } from 'lucide-react';

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-soft">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">My Account</p>
              <h1 className="mt-3 text-3xl font-semibold text-slate-950">Account overview</h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                Manage your profile, orders, wallet access, and security settings from one place.
              </p>
            </div>
            <Link href="/dashboard/profile" className="inline-flex items-center gap-2 rounded-full bg-bengal-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-bengal-blue-soft">
              <UserCircle className="h-4 w-4" />
              Go to profile
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 text-slate-700">
                <UserCircle className="h-5 w-5 text-bengal-blue" />
                <p className="font-medium">Account details</p>
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <p>Name: Amina Hasan</p>
                <p>Email: amina@example.com</p>
                <p>Member since: Feb 2026</p>
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 text-slate-700">
                <CreditCard className="h-5 w-5 text-bengal-blue" />
                <p className="font-medium">Payment & security</p>
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <p>Wallet connected: BlockCart Wallet</p>
                <p>Escrow protection: enabled</p>
                <p>2FA: off</p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 text-slate-700">
                <Heart className="h-5 w-5 text-bengal-blue" />
                <p className="font-medium">Favorites</p>
              </div>
              <p className="mt-4 text-sm text-slate-600">Save items to your wishlist for easy checkout later.</p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 text-slate-700">
                <ShieldCheck className="h-5 w-5 text-bengal-blue" />
                <p className="font-medium">Security</p>
              </div>
              <p className="mt-4 text-sm text-slate-600">Review your login and transaction settings to keep your account safe.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
