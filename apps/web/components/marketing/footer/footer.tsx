import Link from "next/link";

const footerLinks = [
  {
    title: "Buy",
    href: "/buy",
  },
  {
    title: "Sell",
    href: "/sell",
  },
  {
    title: "Repair",
    href: "/repair",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-20">
      
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.04),transparent_50%)]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        
        {/* Top Footer */}
        <div
          className="
            flex
            flex-col
            gap-14
            md:flex-row
            md:items-start
            md:justify-between
          "
        >
          
          {/* Brand */}
          <div className="max-w-md">
            <h2 className="text-4xl font-black text-white">
              protzy
            </h2>

            <p
              className="
                mt-6
                leading-relaxed
                text-zinc-600
              "
            >
              Premium ecosystem for buying,
              selling and repairing smartphones
              seamlessly across India.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-10">
            {footerLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="
                  text-sm
                  text-zinc-700
                  transition-all
                  duration-300
                  hover:text-white
                "
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-16
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-8
            text-sm
            text-zinc-700
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>
            © 2026 protzy. All rights reserved.
          </p>

          <p>
            Built with premium commerce infrastructure.
          </p>
        </div>
      </div>
    </footer>
  );
}