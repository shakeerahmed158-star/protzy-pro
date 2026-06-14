import { CommerceCard } from "./commerce-card";

const devices = [
  {
    title: "iPhone 15 Pro",
    price: "₹89,999",
    condition: "Verified",
  },
  {
    title: "Samsung S25 Ultra",
    price: "₹1,09,999",
    condition: "Premium",
  },
  {
    title: "OnePlus 13",
    price: "₹64,999",
    condition: "Like New",
  },
];

export function DevicesGrid() {
  return (
    <section className="px-6 py-16">
      
      <div className="mx-auto max-w-6xl">
        
        {/* Heading */}
        <div className="max-w-3xl">
          
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-700">
            Marketplace
          </p>

          <h2 className="pt-6 text-5xl font-black text-white md:text-6xl">
            Premium Verified Devices
          </h2>

          <p className="pt-8 text-lg leading-relaxed text-zinc-600">
            Discover high-quality verified smartphones
            through the protzy commerce ecosystem.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 pt-20 md:grid-cols-2 lg:grid-cols-3">
          {devices.map((device) => (
            <CommerceCard
              key={device.title}
              title={device.title}
              price={device.price}
              condition={device.condition}
            />
          ))}
        </div>
      </div>
    </section>
  );
}