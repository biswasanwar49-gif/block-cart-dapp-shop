import Link from 'next/link';
import { CreditCard, Heart, ShieldCheck, Truck, UserCircle, Box, MapPin, CheckCircle2, Clock3, FileText } from 'lucide-react';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <aside className="space-y-6 rounded-[2rem] bg-white p-6 shadow-soft">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-4">
                <div className="grid h-16 w-16 place-items-center rounded-3xl bg-bengal-blue text-white shadow-soft">
                  <UserCircle className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Member</p>
                  <h2 className="text-xl font-semibold text-slate-950">Amina Hasan</h2>
                  <p className="text-sm text-slate-500">Premium shopper</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 rounded-[1.75rem] bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-slate-700">
                    <Heart className="h-5 w-5 text-bengal-cyan" />
                    <span className="text-sm">Wishlists</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">5</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-slate-700">
                    <Truck className="h-5 w-5 text-bengal-cyan" />
                    <span className="text-sm">Active orders</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">2</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-slate-700">
                    <ShieldCheck className="h-5 w-5 text-bengal-cyan" />
                    <span className="text-sm">Escrow secure</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">Yes</span>
                </div>
              </div>

              <div className="mt-6 rounded-[1.75rem] bg-bengal-blue p-5 text-white shadow-soft">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-200">Next delivery</p>
                <p className="mt-3 text-lg font-semibold">Order #1245</p>
                <p className="mt-2 text-sm text-slate-200">Expected in 3 days</p>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Dashboard menu</p>
              <nav className="mt-4 flex flex-col gap-2 text-sm">
                <Link href="/dashboard" className="rounded-2xl px-4 py-3 text-slate-700 transition hover:bg-slate-100">Overview</Link>
                <Link href="/dashboard/orders" className="rounded-2xl px-4 py-3 text-slate-700 transition hover:bg-slate-100">Orders</Link>
                <Link href="/dashboard/tracking" className="rounded-2xl bg-bengal-blue px-4 py-3 text-white transition hover:bg-bengal-blue-soft">Tracking</Link>
                <Link href="/dashboard/wishlist" className="rounded-2xl px-4 py-3 text-slate-700 transition hover:bg-slate-100">Wishlist</Link>
                <Link href="/dashboard/profile" className="rounded-2xl px-4 py-3 text-slate-700 transition hover:bg-slate-100">Profile</Link>
                <Link href="/dashboard/settings" className="rounded-2xl px-4 py-3 text-slate-700 transition hover:bg-slate-100">Settings</Link>
              </nav>
            </div>
          </aside>

          <section className="space-y-6">
            <div className="rounded-[2rem] bg-white p-8 shadow-soft">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Dashboard overview</p>
                  <h1 className="mt-3 text-3xl font-semibold text-slate-950">Multi-panel order management</h1>
                </div>
                <div className="space-y-3 rounded-[1.75rem] bg-slate-50 p-4 text-sm text-slate-700">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium">Escrow status</span>
                    <span className="rounded-full bg-white px-3 py-1 text-slate-900">Protected</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium">Delivery</span>
                    <span className="rounded-full bg-white px-3 py-1 text-slate-900">In transit</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.75rem] border border-slate-200 p-5">
                  <p className="text-sm text-slate-500">Order value</p>
                  <p className="mt-3 text-2xl font-semibold text-slate-950">$529</p>
                </div>
                <div className="rounded-[1.75rem] border border-slate-200 p-5">
                  <p className="text-sm text-slate-500">Escrow transactions</p>
                  <p className="mt-3 text-2xl font-semibold text-slate-950">3</p>
                </div>
                <div className="rounded-[1.75rem] border border-slate-200 p-5">
                  <p className="text-sm text-slate-500">Support messages</p>
                  <p className="mt-3 text-2xl font-semibold text-slate-950">1</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.9fr_0.7fr]">
              <div className="rounded-[2rem] bg-white p-8 shadow-soft">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Your orders</p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-950">Master-detail list</h2>
                  </div>
                  <Link href="/dashboard/orders" className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200">See all orders</Link>
                </div>

                <div className="mt-8 space-y-4">
                  <article className="rounded-[1.75rem] border border-slate-200 p-5 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-slate-950">Order #1245</p>
                        <p className="text-sm text-slate-500">Smart Speaker x1 · $159</p>
                      </div>
                      <span className="rounded-full bg-bengal-blue/10 px-3 py-1 text-sm text-bengal-blue">In transit</span>
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-sm text-slate-500">Placed</p>
                        <p className="mt-1 font-semibold text-slate-900">3 days ago</p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-sm text-slate-500">Delivery</p>
                        <p className="mt-1 font-semibold text-slate-900">Jul 17</p>
                      </div>
                    </div>
                  </article>

                  <article className="rounded-[1.75rem] border border-slate-200 p-5 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-slate-950">Order #1231</p>
                        <p className="text-sm text-slate-500">Streetwear Jacket · $128</p>
                      </div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">Delivered</span>
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-sm text-slate-500">Placed</p>
                        <p className="mt-1 font-semibold text-slate-900">2 weeks ago</p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-sm text-slate-500">Delivered</p>
                        <p className="mt-1 font-semibold text-slate-900">4 days ago</p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>

              <div className="rounded-[2rem] bg-white p-8 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="rounded-3xl bg-bengal-blue/10 p-3 text-bengal-blue">
                    <Box className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Delivery timeline</p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-950">Order #1245</h2>
                  </div>
                </div>

                <div className="mt-8 space-y-6">
                  <div className="relative pl-6">
                    <span className="absolute left-3 top-0 h-full w-0.5 bg-slate-200"></span>
                    <div className="relative flex items-start gap-4">
                      <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-bengal-blue text-white">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-950">Payment confirmed</p>
                        <p className="mt-1 text-sm text-slate-500">Funds secured in escrow contract.</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative pl-6">
                    <div className="relative flex items-start gap-4">
                      <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500">
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-950">Escrow created</p>
                        <p className="mt-1 text-sm text-slate-500">Smart contract now holds payment until delivery.</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative pl-6">
                    <div className="relative flex items-start gap-4">
                      <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-slate-500">
                        <Truck className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-950">Shipped</p>
                        <p className="mt-1 text-sm text-slate-500">Courier has picked up the package.</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative pl-6">
                    <div className="relative flex items-start gap-4">
                      <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-950">Out for delivery</p>
                        <p className="mt-1 text-sm text-slate-500">Estimated to arrive today.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Escrow transactions</p>
                  <ul className="mt-4 space-y-4 text-sm text-slate-700">
                    <li className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-semibold text-slate-950">Escrow deposit</span>
                        <span className="text-xs uppercase tracking-[0.24em] text-slate-500">Tx confirmed</span>
                      </div>
                      <p className="mt-2 text-slate-500">0x9b...fa1c · 0.159 ETH</p>
                    </li>
                    <li className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-semibold text-slate-950">Seller approval</span>
                        <span className="text-xs uppercase tracking-[0.24em] text-slate-500">Pending</span>
                      </div>
                      <p className="mt-2 text-slate-500">0xad...4e22 · escrow release waiting</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
