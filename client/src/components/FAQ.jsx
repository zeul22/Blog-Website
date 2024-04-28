import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function FAQ({ faqData }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div id="3">
      <div className="flex justify-center text-[5vw] font-extralight">FAQs</div>
      <div className="flex flex-col gap-2 w-full p-6">
        {faqData.map((item, index) => (
          <div key={index} className="">
            <motion.h2
              className="tracking-tighter bg-gradient-to-r from-bg-gray-200 to-bg-gray-100 transition-all duration-300 p-2
              sm:text-[2vw]
              md:text-[2.5vw]
              lg:text-[1.3vw]"
              initial={false}
              onClick={() => toggleFAQ(index)}
              style={{ cursor: "pointer" }}
              layout
            >
              <span>{index + 1}.</span> {item.question}
            </motion.h2>
            <AnimatePresence
              initial={false}
              className="px-4 tracking-wider font-extralight  sm:text-[3vw]
              md:text-[1.6vw]
              lg:text-[1vw]"
            >
              {activeIndex === index && (
                <motion.p
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <p>{item.answer}</p>
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
