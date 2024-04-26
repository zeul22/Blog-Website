import React, { useState } from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div>
      <div className="nav h-[6.5vh] items-center flex justify-between max-sm:justify-center sticky p-4 font-semibold bg-primary-1 text-[#F2613F]">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex gap-6 items-center "
        >
          <div
            className="absolute bg-orange-500 rounded-full p-5
            max-sm:h-[3.5vh] max-sm:w-[4.5vw]
            max-md:h-[4.5vh] max-md:w-[4.5vw]
            md:h-[4.5vh] md:w-[3.5vw]
            lg:h-[4.5vh] lg:w-[3vw]
            xl:h-[4vh] xl:w-[2vw]
            "
          >
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative bg-orange-200 rounded-full
           max-sm:h-[2.5vh] max-sm:w-[4.5vw] max-sm:right-3 max-sm:bottom-3 
           max-md:h-[3.5vh] max-md:w-[4.5vw] max-md:right-[15px] max-md:bottom-[16px]
           md:h-[3.5vh] md:w-[3.5vw] md:right-[15.5px] md:bottom-[16px]
           lg:h-[3.5vh] lg:w-[3vw] lg:right-[17px] lg:bottom-[16px]
           xl:h-[3.vh] xl:w-[1.8vw] xl:right-[17.2px] xl:bottom-[16.5px] "
            ></motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={isHovered ? { opacity: 1, x: 50, zIndex: 999 } : {}}
            transition={{ duration: 1 }}
            className="text-white"
          >
            FLIP!
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.3 }}
          className="flex max-sm:hidden gap-3  "
        >
          {["Home", "Benefits", "Work", "Pricing", "FAQs", "About"].map(
            (item, index) => (
              <motion.div transition={{ staggerChildren: 0.4 }} key={index}>
                {item}
              </motion.div>
            )
          )}
        </motion.div>
        <div className="hidden xl:flex">LOG IN</div>
      </div>
    </div>
  );
};

export default Navbar;
