export default function SEOSection() {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-6xl mx-auto space-y-14">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
            Goopsy Advantage
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Smart Way to Sell & Buy Devices
          </h2>
          <p className="mt-4 text-slate-600 text-lg leading-8">
            Premium resale experience, trusted pricing, secure payments, and
            quality refurbished devices — all in one modern platform.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-slate-900">
              Sell Old Phone Instantly
            </h3>
            <p className="mt-4 text-slate-600 leading-8">
              Turn your old smartphone into instant cash with Goopsy. Get a
              real-time quote, free doorstep pickup, quick verification, and
              secure payment without dealing with random buyers or bargaining.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-slate-900">
              Sell Laptop & Gadgets
            </h3>
            <p className="mt-4 text-slate-600 leading-8">
              Sell laptops, tablets, smartwatches, accessories, and premium
              gadgets with transparent pricing and a smooth pickup process.
              Goopsy helps you unlock the best resale value with zero hassle.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-slate-900">
              Buy Refurbished with Confidence
            </h3>
            <p className="mt-4 text-slate-600 leading-8">
              Explore quality-checked refurbished phones and laptops at smart
              prices. Every eligible device is tested for performance,
              reliability, and value before reaching customers.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-slate-900">
              Why Choose Goopsy?
            </h3>

            <ul className="mt-4 space-y-2 text-slate-600 leading-8">
              <li>• Instant price quotes</li>
              <li>• Free doorstep pickup</li>
              <li>• Fast secure payments</li>
              <li>• Trusted verification</li>
              <li>• Premium user experience</li>
              <li>• Reliable support</li>
            </ul>
          </div>

        </div>

        {/* Bottom Long Summary */}
        <div className="rounded-3xl bg-slate-900 text-white p-10 md:p-14">
          <h3 className="text-3xl md:text-4xl font-bold leading-tight">
            Safe, Smart & Built for Modern Users
          </h3>

          <p className="mt-5 text-slate-300 leading-8 text-lg">
            Goopsy is designed for people who value time, trust, and
            convenience. Whether you want to sell your used phone instantly or
            buy a premium refurbished device, our platform delivers a seamless
            modern experience from start to finish.
          </p>

          <p className="mt-4 text-slate-300 leading-8 text-lg">
            No confusion. No hidden pricing. No unnecessary delays. Just a
            smarter and more luxurious way to buy, sell, and upgrade your
            devices.
          </p>
        </div>

        <div className="border-t border-slate-200 pt-10">
  <h3 className="text-2xl font-bold text-slate-900 mb-6">
    Popular Searches
  </h3>

  <div className="flex flex-wrap gap-3">
    {[
      "Sell Old Phone",
      "Sell iPhone",
      "Sell Samsung Phone",
      "Sell OnePlus Phone",
      "Sell Old Laptop",
      "Sell MacBook",
      "Sell Tablet",
      "Buy Refurbished Phones",
      "Buy Refurbished Laptop",
      "Phone Repair Near Me",
      "Doorstep Mobile Pickup",
      "Best Resale Value",
      "Exchange Old Phone",
      "Used Laptop Deals",
    ].map((item, i) => (
      <span
        key={i}
        className="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm text-slate-700 hover:border-blue-500 hover:text-blue-600 transition"
      >
        {item}
      </span>
    ))}
  </div>
</div>

      </div>
    </section>
  );
}