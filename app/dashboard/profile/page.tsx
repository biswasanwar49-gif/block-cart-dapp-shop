import Link from 'next/link';

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-8 shadow-soft">
          <h1 className="text-2xl font-semibold text-slate-900">Profile</h1>
          <p className="mt-3 text-sm text-slate-600">Manage your personal details and account settings.</p>

          <form className="mt-6 grid gap-4 max-w-md">
            <input placeholder="Full name" className="rounded-lg border border-slate-200 px-4 py-3 outline-none" />
            <input placeholder="Email address" className="rounded-lg border border-slate-200 px-4 py-3 outline-none" />
            <input placeholder="Phone" className="rounded-lg border border-slate-200 px-4 py-3 outline-none" />
            <div className="flex gap-3">
              <button className="rounded-full bg-bengal-blue px-4 py-2 text-white">Save</button>
              <Link href="/dashboard" className="text-sm font-semibold text-slate-700">Cancel</Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
