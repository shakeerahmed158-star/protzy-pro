"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_LINKS } from "../../../constants/routes";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-8 md:flex">
      {NAV_LINKS.map((link) => {
        const active = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm transition ${
              active
                ? "text-white"
                : "text-white/60 hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}