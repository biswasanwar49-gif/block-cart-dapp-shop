import Link from 'next/link';
import { Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-2xl bg-white p-8 shadow-soft">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-bengal-blue/10 p-3 text-bengal-blue">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-slate-900">About BlockCart</h1>
              <p className="mt-2 text-sm text-slate-600">A decentralized storefront built for modern buyers and admins.</p>
            </div>
          </div>

          <div className="mt-8 space-y-6 text-slate-700">
            <p>
              BlockCart is an experimental ecommerce DApp focused on fast discovery, wallet-friendly checkout, and simple admin controls for inventory and delivery.
            </p>
            <p>
              We believe commerce should be secure, transparent, and delightful. Our product pages, shop, and tools are designed to make browsing and buying effortless while giving admins clear control over listings and orders.
            </p>
            <p>
              Want to collaborate or learn more? Reach out via the contact page or connect a wallet to try a demo checkout flow.
            </p>

            <div className="mt-6">
              <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-bengal-blue px-4 py-2 text-sm font-semibold text-white">
                Back to home
              </Link>
              <Link href="/contact" className="ml-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
