const plans = [
  {
    name: "Starter",
    price: "₹999",
    description: "Perfect for small dealers",
  },
  {
    name: "Growth",
    price: "₹4999",
    description: "Scale your inventory & leads",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Advanced multi-store ecosystem",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-[80vh] bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-16 text-center text-6xl font-bold">
          Pricing
        </h1>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
            >
              <h2 className="mb-4 text-3xl font-bold">
                {plan.name}
              </h2>

              <p className="mb-6 text-5xl font-bold">
                {plan.price}
              </p>

              <p className="text-zinc-600">
                {plan.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}