import Link from 'next/link';
import { CheckCircle2, CreditCard, MapPin, ShieldCheck, Truck, FileText } from 'lucide-react';

const trackingSteps = [
  {
    title: 'Payment confirmed',
    description: 'Funds are secured by the smart contract escrow.',
    icon: CheckCircle2,
    status: 'completed',
  },
  {
    title: 'Escrow created',
    description: 'Contract transaction awaits seller confirmation.',
    icon: CreditCard,
    status: 'completed',
  },
  {
    title: 'Shipped',
    description: 'Package is on the move with courier updates.',
    icon: Truck,
    status: 'completed',
  },
  {
    title: 'Out for delivery',
    description: 'Delivery is scheduled for later today.',
    icon: MapPin,
    status: 'current',
  },
  {
    title: 'Escrow settlement',
    description: 'Smart contract will release funds after delivery.',
    icon: ShieldCheck,
    status: 'pending',
  },
];

const orders = [
  {
    id: '#1245',
    summary: 'Aurora Smart Speaker',
    status: 'In transit',
    eta: 'Today',
  },
  {
    id: '#1238',
    summary: 'Luna Smartwatch',
    status: 'Delivered',
    eta: 'Jul 9',
  },
  {
    id: '#1221',
    summary: 'Nexa Jacket',
    status: 'Delayed',
    eta: 'Jul 22',
  },
];

export default function TrackingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row">
          <section className="rounded-[2rem] bg-white p-8 shadow-soft lg:w-[58%]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Track delivery</p>
                <h1 className="mt-3 text-3xl font-semibold text-slate-950">Delivery status timeline</h1>
              </div>
              <Link href="/dashboard" className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200">Back to dashboard</Link>
            </div>

            <div className="mt-10 space-y-8">
              {trackingSteps.map((step, index) => {
                const Icon = step.icon;
                const isCompleted = step.status === 'completed';
                const isCurrent = step.status === 'current';
                return (
                  <div key={step.title} className="relative pl-12">
                    <div className="absolute left-5 top-0 h-full w-0.5 bg-slate-200"></div>
                    <div className="relative flex items-start gap-4">
                      <div className={`mt-1 flex h-11 w-11 items-center justify-center rounded-full ${isCompleted ? 'bg-bengal-blue text-white' : isCurrent ? 'bg-bengal-blue/10 text-bengal-blue' : 'bg-slate-100 text-slate-500'}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-950">{step.title}</p>
                        <p className="mt-1 text-sm text-slate-500">{step.description}</p>
                        <span className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${isCompleted ? 'bg-emerald-100 text-emerald-700' : isCurrent ? 'bg-bengal-blue/10 text-bengal-blue' : 'bg-slate-100 text-slate-500'}`}>
                          {step.status.replace('current', 'In progress')}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-slate-500">
                <FileText className="h-4 w-4" />
                <span>Smart contract escrow</span>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Tx count</p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">3</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Escrow holder</p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">0x9b...fa1c</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Amount</p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">0.159 ETH</p>
                </div>
              </div>
            </div>
          </section>

          <aside className="space-y-6 lg:w-[40%]">
            <div className="rounded-[2rem] bg-white p-8 shadow-soft">
              <div className="flex items-center gap-4 text-slate-700">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-bengal-blue/10 text-bengal-blue">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Delivery details</p>
                  <p className="mt-2 text-xl font-semibold text-slate-950">Your order is arriving soon</p>
                </div>
              </div>

              <div className="mt-6 space-y-4 rounded-[1.75rem] bg-slate-50 p-5">
                <div className="flex items-center justify-between text-sm text-slate-700">
                  <span>Courier</span>
                  <span className="font-semibold text-slate-900">Blue Express</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-700">
                  <span>Delivery window</span>
                  <span className="font-semibold text-slate-900">Today, 4-7 PM</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-700">
                  <span>Tracking number</span>
                  <span className="font-semibold text-slate-900">ZX-9212-21</span>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-soft">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Your orders</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-950">Master-detail</h2>
                </div>
                <Link href="/dashboard/orders" className="text-sm font-semibold text-bengal-blue">View all</Link>
              </div>

              <div className="mt-8 space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="rounded-[1.75rem] border border-slate-200 p-4 hover:border-bengal-blue hover:bg-slate-50">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-slate-950">Order {order.id}</p>
                        <p className="text-sm text-slate-500">{order.summary}</p>
                      </div>
                      <span className="text-sm font-semibold text-slate-900">{order.eta}</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
                      <span>Status: {order.status}</span>
                      <span>{order.status === 'Delivered' ? 'Delivered' : 'Active'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
