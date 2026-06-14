export default function ContactPage() {
  return (
    <main className="min-h-[80vh] bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-10 text-6xl font-bold">
          Contact Us
        </h1>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 outline-none backdrop-blur-xl"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 outline-none backdrop-blur-xl"
          />

          <textarea
            rows={6}
            placeholder="Your Message"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 outline-none backdrop-blur-xl"
          />

          <button className="rounded-2xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}