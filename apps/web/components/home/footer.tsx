import Link from "next/link";
import {
  Globe,
  Camera,
  Bird,
  Briefcase,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071327] text-white pt-16 pb-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Premium CTA Strip */}
        <div className="mb-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md px-6 md:px-10 py-8 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div>
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
              Upgrade Smarter
            </p>
            <h3 className="mt-2 text-2xl md:text-3xl font-bold">
              Sell Old Devices. Buy Better Ones.
            </h3>
            <p className="mt-2 text-white/70 max-w-xl leading-7">
              Trusted pricing, free pickup, secure payments, and premium
              refurbished gadgets — all in one platform.
            </p>
          </div>

          <Link
            href="/sell-phone"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-medium"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 pb-10 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                G
              </div>

              <div>
                <h3 className="text-2xl font-bold">protzy</h3>
                <p className="text-sm text-white/60">
                  Premium Gadget Marketplace
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm text-white/70 max-w-md leading-7">
              protzy helps users sell old phones, laptops, and gadgets instantly
              while also offering trusted refurbished devices at smart prices.
              Built for speed, trust, and convenience.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[Globe, Camera, Bird, Briefcase].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-xl bg-white/10 hover:bg-blue-600 transition flex items-center justify-center"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg">Quick Links</h4>

            <div className="mt-4 space-y-3 text-sm text-white/70">
              <Link href="/sell-phone" className="block hover:text-white">
                Sell Phone
              </Link>
              <Link href="/buy-refurbished" className="block hover:text-white">
                Buy Refurbished
              </Link>
              <Link href="/repair" className="block hover:text-white">
                Repair Services
              </Link>
              <Link href="/exchange" className="block hover:text-white">
                Exchange Device
              </Link>
              <Link href="/blogs" className="block hover:text-white">
                Blogs
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg">Support</h4>

            <div className="mt-4 space-y-3 text-sm text-white/70">
              <Link href="/faq" className="block hover:text-white">
                FAQ
              </Link>
              <Link href="/track-order" className="block hover:text-white">
                Track Order
              </Link>
              <Link href="/privacy" className="block hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block hover:text-white">
                Terms & Conditions
              </Link>
              <Link href="/contact" className="block hover:text-white">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg">Contact</h4>

            <div className="mt-4 space-y-4 text-sm text-white/70">
              <div className="flex gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                Bengaluru, Karnataka
              </div>

              <div className="flex gap-2">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                +91 98765 43210
              </div>

              <div className="flex gap-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                support@protzy.in
              </div>
            </div>
          </div>

        </div>

        {/* SEO Mini Links */}
        <div className="py-6 border-b border-white/10 text-sm text-white/50 leading-8">
          Sell Old Phone • Sell iPhone • Sell Laptop • Sell MacBook • Buy
          Refurbished Phones • Buy Used Laptop • Phone Repair • Exchange Old
          Phone • Best Resale Value
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-sm text-white/50">
          <p>© 2026 protzy. All rights reserved.</p>
          <p>Built for Smart Gadget Users 🚀</p>
        </div>

      </div>
    </footer>
  );
}