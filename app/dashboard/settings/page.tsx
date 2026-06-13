import Link from 'next/link';

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-8 shadow-soft">
          <h1 className="text-2xl font-semibold text-slate-900">Settings</h1>
          <p className="mt-3 text-sm text-slate-600">Manage account preferences and security settings.</p>

          <div className="mt-6 grid gap-4 max-w-md">
            <label className="flex items-center gap-3">
              <input type="checkbox" />
              <span className="text-sm">Enable promotional emails</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" />
              <span className="text-sm">Two-factor authentication</span>
            </label>

            <div className="flex gap-3">
              <button className="rounded-full bg-bengal-blue px-4 py-2 text-white">Save</button>
              <Link href="/dashboard" className="text-sm font-semibold text-slate-700">Cancel</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
