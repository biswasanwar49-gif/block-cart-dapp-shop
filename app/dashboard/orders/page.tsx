import Link from 'next/link';

export default function OrdersPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-8 shadow-soft">
          <h1 className="text-2xl font-semibold text-slate-900">Your Orders</h1>
          <p className="mt-3 text-sm text-slate-600">Track recent orders and view order details.</p>

          <div className="mt-6 space-y-4">
            <div className="rounded-lg border border-slate-200 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Order #1245</p>
                  <p className="text-sm text-slate-500">Placed 3 days ago</p>
                </div>
                <div className="text-sm text-slate-700">Shipped</div>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Order #1231</p>
                  <p className="text-sm text-slate-500">Placed 2 weeks ago</p>
                </div>
                <div className="text-sm text-slate-700">Delivered</div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Link href="/dashboard" className="text-sm font-semibold text-bengal-blue">Back to dashboard</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
