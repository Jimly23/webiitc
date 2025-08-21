import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const FloatingButton = () => {
  const [isMessageVisible, setIsMessageVisible] = useState(true);
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false);

  useEffect(() => {
    // Check if the user has previously dismissed the message in this session
    const dismissed = sessionStorage.getItem("chatMessageDismissed");
    if (dismissed) {
      setHasBeenDismissed(true);
      setIsMessageVisible(false);
    } else {
      const timer = setTimeout(() => {
        setIsMessageVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const hideMessage = () => {
    setIsMessageVisible(false);
    setHasBeenDismissed(true);
    sessionStorage.setItem("chatMessageDismissed", "true");
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isMessageVisible && (
          <motion.div
            className="bg-white rounded-lg p-4 mb-4 shadow-lg max-w-xs relative"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mt-2">
              <p className="text-gray-800 mb-2">
                Hi, seminar udah dibuka nih yuk daftar sekarang sebelum
                ketinggalan!
              </p>
              <Link
                href="/signup"
                className="text-blue-500 inline-flex items-center font-medium"
              >
                Daftar sekarang!
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsMessageVisible(!isMessageVisible)}
        className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
        style={{ backgroundColor: "#e9a319" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Seminar"
      >
        <div className="relative">
          <img
            src="/images/kala.png"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
          <div className="absolute inset-0 rounded-full border-4 border-blue-400 animate-ping opacity-75"></div>
        </div>
      </motion.button>
    </div>
  );
};

export default FloatingButton;
