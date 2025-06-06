import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineWhatsApp } from "react-icons/ai";

function AlertGroup({}) {
  const [isOpen, setIsOpen] = useState(true);

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
    exit: { opacity: 0, y: 10 },
  };

  return (
    <>
      {isOpen && (
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "exit"}
          variants={variants}
          transition={{ duration: 0.5 }}
          role="alert"
          className="rounded-xl border border-gray-100 bg-white p-4 shadow w-full"
        >
          <div className="flex items-start gap-4">
            <span>
              <AiOutlineWhatsApp className="text-green-500" size={30} />
            </span>

            <div className="flex-1">
              <strong className="block font-medium text-gray-900">
                {" "}
                Join Whatsapp Group{" "}
              </strong>

              <p className="mt-1 text-sm text-gray-700">
                Pembayaran kamu valid silahkan masuk ke Whatsapp Group.
              </p>

              <div className="mt-4 flex gap-2">
                <a
                  href="https://chat.whatsapp.com/DNnbAqHiD7uJPRmHZUL4ad"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                >
                  <span className="text-sm"> Join Group</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>

                <button
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-4 py-2 text-gray-700 transition hover:bg-gray-100"
                >
                  <span className="text-sm">Tutup</span>
                </button>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 transition hover:text-gray-600"
            >
              <span className="sr-only">Dismiss popup</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default AlertGroup;
