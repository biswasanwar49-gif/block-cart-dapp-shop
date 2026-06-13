import Link from 'next/link';

export default function WishlistPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-8 shadow-soft">
          <h1 className="text-2xl font-semibold text-slate-900">Wishlist</h1>
          <p className="mt-3 text-sm text-slate-600">Items you've saved to review or buy later.</p>

          <ul className="mt-6 space-y-4">
            <li className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
              <div>
                <p className="font-medium">Aurora Smart Speaker</p>
                <p className="text-sm text-slate-500">$159</p>
              </div>
              <div className="flex gap-2">
                <Link href="/shop" className="text-sm text-bengal-blue">View</Link>
                <button className="text-sm text-slate-600">Remove</button>
              </div>
            </li>
          </ul>

          <div className="mt-6">
            <Link href="/dashboard" className="text-sm font-semibold text-bengal-blue">Back to dashboard</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
