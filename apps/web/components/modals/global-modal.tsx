"use client";

import { AnimatePresence, motion } from "framer-motion";

import { useModalStore } from "../../store/modal-store";

export function GlobalModal() {
  const {
    isOpen,
    modalType,
    closeModal,
  } = useModalStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="
              fixed
              inset-0
              z-[100]
              bg-black/40
              backdrop-blur-md
            "
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              fixed
              left-1/2
              top-1/2
              z-[101]
              w-[90%]
              max-w-lg
              -translate-x-1/2
              -translate-y-1/2
              rounded-[32px]
              border
              border-white/20
              bg-white/80
              p-10
              
              shadow-[0_20px_100px_rgba(59,130,246,0.2)]
            "
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="
                absolute
                right-5
                top-5
                text-zinc-700
                transition
                hover:text-black
              "
            >
              ✕
            </button>

            {/* Dynamic Content */}
            {modalType === "auth" && (
              <div>
                <h2 className="text-3xl font-bold text-zinc-900">
                  Welcome Back
                </h2>

                <p className="mt-3 text-zinc-600">
                  Login to continue into Goopsy.
                </p>
              </div>
            )}

            {modalType === "dealer" && (
              <div>
                <h2 className="text-3xl font-bold text-zinc-900">
                  Become A Dealer
                </h2>

                <p className="mt-3 text-zinc-600">
                  Join the premium dealer ecosystem.
                </p>
              </div>
            )}

            {modalType === "repair" && (
              <div>
                <h2 className="text-3xl font-bold text-zinc-900">
                  Book Repair
                </h2>

                <p className="mt-3 text-zinc-600">
                  Schedule premium repair service.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}