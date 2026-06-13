import Link from 'next/link';
import { ArrowRight, ShoppingBag, Star, Truck, CreditCard, Heart } from 'lucide-react';

const heroHighlights = [
  'Curated collections for every category',
  'Fast checkout with wallet-friendly payment options',
  'Live stock availability and secure order tracking',
];

const shopProducts = [
  {
    name: 'Nexa Airbuds',
    description: 'True wireless earbuds with spatial audio and comfort fit.',
    price: '$89',
    badge: 'Best seller',
    highlight: 'Free shipping',
  },
  {
    name: 'Luna Smartwatch',
    description: 'Activity tracking, notifications, and premium battery life.',
    price: '$169',
    badge: 'New arrival',
    highlight: '30-day returns',
  },
  {
    name: 'Stellar Backpack',
    description: 'Durable travel pack with dedicated laptop and accessory pockets.',
    price: '$72',
    badge: 'Popular',
    highlight: 'Eco-friendly fabric',
  },
];

const benefits = [
  {
    icon: <ShoppingBag className="h-5 w-5 text-bengal-cyan" />,
    title: 'Wide Selection',
    description: 'Browse curated categories and discover top-rated products.',
  },
  {
    icon: <Truck className="h-5 w-5 text-bengal-cyan" />,
    title: 'Fast Delivery',
    description: 'Speedy shipping options keep orders moving from cart to door.',
  },
  {
    icon: <CreditCard className="h-5 w-5 text-bengal-cyan" />,
    title: 'Secure Checkout',
    description: 'Payment-friendly experience with trusted wallet integration.',
  },
  {
    icon: <Heart className="h-5 w-5 text-bengal-cyan" />,
    title: 'Favorites & Wishlist',
    description: 'Save products, compare your favorites, and checkout later.',
  },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-bengal-blue">
                BlockCart Store
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Browse the dedicated shop for the latest gear and essentials.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Discover products across mobile, fashion, accessories, gaming, and smart home. Filter quickly, compare favorites, and checkout with confidence.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-bengal-blue hover:text-bengal-blue">
                Back to home
              </Link>
              <Link href="/shop" className="inline-flex items-center gap-2 rounded-full bg-bengal-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-bengal-blue-soft">
                Shop all products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {heroHighlights.map((item) => (
              <div key={item} className="rounded-3xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200/70">
                <p className="text-sm font-medium text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_0.8fr] lg:items-start">
          <div className="space-y-8">
            <div className="rounded-[2rem] bg-white p-8 shadow-soft">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-slate-500">
                <ShoppingBag className="h-5 w-5 text-bengal-cyan" />
                <span>Featured products</span>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {shopProducts.map((product) => (
                  <article key={product.name} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-bengal-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-bengal-blue">
                        {product.badge}
                      </span>
                      <span className="text-xs text-slate-500">{product.highlight}</span>
                    </div>
                    <h2 className="mt-6 text-xl font-semibold text-slate-950">{product.name}</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
                    <div className="mt-6 flex items-center justify-between gap-4">
                      <p className="text-lg font-semibold text-slate-950">{product.price}</p>
                      <Link href="/shop" className="text-sm font-semibold text-bengal-blue transition hover:text-bengal-blue-soft">
                        View details
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-soft">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Why shop here</p>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-950">A multipage shopping experience with product clarity.</h2>
                </div>
                <Star className="h-6 w-6 text-bengal-blue" />
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {benefits.map((item) => (
                  <div key={item.title} className="rounded-3xl bg-slate-50 p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-bengal-blue/10 text-bengal-blue">
                      {item.icon}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] bg-bengal-blue p-8 text-white shadow-soft">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90">
                <Truck className="h-5 w-5" /> Fast shipping
              </div>
              <h3 className="mt-6 text-2xl font-semibold">Free delivery on orders over $75</h3>
              <p className="mt-4 text-sm leading-6 text-slate-100/90">
                Enjoy smart logistics and easier checkout for premium and everyday essentials.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-soft">
              <div className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-slate-500">
                <CreditCard className="h-4 w-4 text-bengal-cyan" /> Secure checkout
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">Multiple wallet-friendly options</h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Connect securely, review your order, and complete the purchase with confidence.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
