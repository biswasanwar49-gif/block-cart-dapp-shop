import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-2xl bg-white p-8 shadow-soft">
          <h1 className="text-3xl font-semibold text-slate-900">Contact Us</h1>
          <p className="mt-2 text-sm text-slate-600">Questions, collaborations, or support — we'd love to hear from you.</p>

          <form className="mt-8 grid gap-4">
            <input type="text" placeholder="Your name" className="rounded-lg border border-slate-200 px-4 py-3 outline-none" />
            <input type="email" placeholder="Email address" className="rounded-lg border border-slate-200 px-4 py-3 outline-none" />
            <textarea placeholder="Message" rows={6} className="rounded-lg border border-slate-200 px-4 py-3 outline-none" />
            <div className="flex items-center gap-3">
              <button type="submit" className="rounded-full bg-bengal-blue px-6 py-3 text-sm font-semibold text-white">Send message</button>
              <Link href="/" className="text-sm font-semibold text-slate-700">Back to home</Link>
            </div>
          </form>

          <div className="mt-8 text-sm text-slate-600">
            <p>Or email us: support@bengal-blue.example</p>
            <p className="mt-2">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
      </section>
    </main>
  );
}
