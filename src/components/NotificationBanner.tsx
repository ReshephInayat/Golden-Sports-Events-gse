"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimesCircle } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll"; // Use Link from react-scroll

// Hook to detect if the screen is mobile-sized
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425); // Adjusted to 425px for Mobile L
    };

    handleResize(); // Call on mount
    window.addEventListener("resize", handleResize); // Listen to resize events

    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  return isMobile;
};

const NotificationBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false); // Start with false to delay the visibility
  const isMobile = useIsMobile(); // Check if the screen is mobile

  // Show banner after 1 second if the user hasn't seen it before in the session
  useEffect(() => {
    const hasSeenNotification = sessionStorage.getItem("hasSeenNotification");

    if (!hasSeenNotification) {
      const delayTimer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem("hasSeenNotification", "true"); // Set flag in sessionStorage
      }, 1000); // 1 second delay

      return () => clearTimeout(delayTimer); // Clear timer if component unmounts
    }
  }, []);

  // Auto-close after 10 seconds from when the banner is visible
  useEffect(() => {
    if (isVisible) {
      const autoCloseTimer = setTimeout(() => {
        setIsVisible(false);
      }, 10000); // 10 seconds

      return () => clearTimeout(autoCloseTimer); // Clear timer if component unmounts
    }
  }, [isVisible]);

  // Animation variants based on screen size
  const variants = {
    hidden: isMobile ? { y: "100%" } : { x: "-100%" }, // Slide up from bottom if mobile, from left if desktop
    visible: { x: 0, y: 0 }, // Position it on-screen
    exit: isMobile ? { y: "100%" } : { x: "-100%" }, // Slide down in reverse for mobile
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5 }}
          className={`fixed ${
            isMobile ? "bottom-1 w-full" : "top-24 ml-6 w-96"
          } bg-red-500 text-white rounded-lg shadow-lg p-4 z-50 flex items-center justify-between`}
        >
          <div className="flex items-center">
            <FiAlertCircle className="text-2xl mr-3" />
            <div>
              <p className="font-bold text-lg">Oh snap!</p>
              <p className="text-sm">
                Our social media account is currently not working. We apologize
                for the inconvenience. For further details,
                <ScrollLink
                  to="#contact"
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer text-white underline ml-2 font-bold"
                >
                  Contact Us
                </ScrollLink>
              </p>
            </div>
          </div>
          <button onClick={() => setIsVisible(false)}>
            <FaTimesCircle className="text-xl hover:text-gray-200 absolute top-2 right-2" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationBanner;
