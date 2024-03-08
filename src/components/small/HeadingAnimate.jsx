import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const HeadingAnimate = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let timeoutId;
    const typeText = (index) => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        timeoutId = setTimeout(() => typeText(index + 1), 100);
      }
    };
    typeText(0);
    return () => clearTimeout(timeoutId);
  }, [text]);

  return (
    <AnimatePresence>
      <motion.p
        key={displayText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      > {displayText}
      </motion.p>
    </AnimatePresence>
  );
};
