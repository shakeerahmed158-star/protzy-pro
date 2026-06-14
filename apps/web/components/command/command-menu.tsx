"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "cmdk";

import { AnimatePresence, motion } from "framer-motion";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { useUIStore } from "../../store/ui.store";

const routes = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Buy Devices",
    href: "/buy",
  },
  {
    title: "Sell Device",
    href: "/sell",
  },
  {
    title: "Repair Service",
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

export function CommandMenu() {
  const router = useRouter();

  const {
    isCommandOpen,
    openCommand,
    closeCommand,
  } = useUIStore();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (
        (e.metaKey || e.ctrlKey) &&
        e.key === "k"
      ) {
        e.preventDefault();

        if (isCommandOpen) {
          closeCommand();
        } else {
          openCommand();
        }
      }
    };

    document.addEventListener(
      "keydown",
      down
    );

    return () =>
      document.removeEventListener(
        "keydown",
        down
      );
  }, [
    isCommandOpen,
    openCommand,
    closeCommand,
  ]);

  return (
    <AnimatePresence>
      {isCommandOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCommand}
            className="
              fixed
              inset-0
              z-[100]
              bg-black/20
              backdrop-blur-sm
            "
          />

          {/* Command Box */}
          <motion.div
            initial={{
              opacity: 0,
              y: -40,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -40,
              scale: 0.95,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              left-1/2
              top-[12%]
              z-[101]
              w-[92%]
              max-w-2xl
              -translate-x-1/2
              overflow-hidden
              rounded-[32px]
              border
              border-white/20
              bg-white/80
              
              shadow-[0_20px_80px_rgba(59,130,246,0.18)]
            "
          >
            <Command className="bg-transparent">
              
              <CommandInput
                placeholder="Search protzy..."
                className="
                  h-16
                  w-full
                  border-none
                  bg-transparent
                  px-6
                  text-lg
                  outline-none
                "
              />

              <CommandList className="max-h-[400px] overflow-y-auto p-3">
                
                <CommandEmpty>
                  No results found.
                </CommandEmpty>

                <CommandGroup heading="Navigation">
                  {routes.map((route) => (
                    <CommandItem
                      key={route.href}
                      onSelect={() => {
                        router.push(route.href);

                        closeCommand();
                      }}
                      className="
                        cursor-pointer
                        rounded-2xl
                        px-4
                        py-4
                        text-zinc-700
                        transition
                        hover:bg-violet-100
                      "
                    >
                      {route.title}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}