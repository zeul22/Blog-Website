import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  return (
    <div className="bg-primary-1 h-[25vh] text-white ">
      <div className="flex items-start justify-center bg-inherit mt-6 py-6 text-xl font-extralight">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex gap-6 items-center "
        >
          <div
            className="absolute bg-orange-500 rounded-full p-5
            max-sm:h-[3.5vh] max-sm:w-[3.5vh]
            max-md:h-[4.5vh] max-md:w-[4.5vh]
            md:h-[4.5vh] md:w-[4.5vh]
            lg:h-[4.5vh] lg:w-[4.5vh]
            xl:h-[4vh] xl:w-[4vh]
            "
          >
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative bg-orange-200 rounded-full
           max-sm:h-[2.5vh] max-sm:w-[2.5vh] max-sm:right-3 max-sm:bottom-3 
           max-md:h-[3.5vh] max-md:w-[3.5vh] max-md:right-[15px] max-md:bottom-[16px]
           md:h-[3.5vh] md:w-[3.5vh] md:right-[15.5px] md:bottom-[16px]
           lg:h-[3.5vh] lg:w-[3.5vh] lg:right-[17px] lg:bottom-[16px]
           xl:h-[3vh] xl:w-[3vh] xl:right-[14.5px] xl:bottom-[15px] "
            ></motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={isHovered ? { opacity: 1, x: 50, zIndex: 999 } : {}}
            transition={{ duration: 1 }}
            className="text-white"
          >
            MAKEURSTORY
          </motion.div>
        </div>
      </div>
      <div className="grid max-sm:grid-cols-3 grid-cols-4 bg-inherit">
        <div className="bg-inherit p-2 font-extralight max-sm:text-xs md:text-m">
          Bliss Anand, Hyderabad, India
          <div className="flex gap-3 p-2 bg-inherit">
            <div>
              <FaInstagram className="text-2xl bg-inherit" />
            </div>
            <div>
              <FaLinkedin className="text-2xl bg-inherit" />
            </div>
            <div>
              <FaTwitter className="text-2xl bg-inherit" />
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-inherit max-sm:text-xs font-extralight text-md gap-2">
          <div className="bg-inherit cursor-pointer">Support</div>
          <div className="bg-inherit cursor-pointer">Careers</div>
          <div className="bg-inherit cursor-pointer">About us</div>
          <div className="bg-inherit cursor-pointer">Technician</div>
        </div>
        <div className="flex flex-col bg-inherit max-sm:text-xs font-extralight text-md gap-2">
          <div className="bg-inherit cursor-pointer">Technology</div>
          <div className="bg-inherit cursor-pointer">Forum</div>
          <div className="bg-inherit cursor-pointer">Our Leaders</div>
          <div className="bg-inherit cursor-pointer">News</div>
        </div>
        <div className="max-sm:hidden flex flex-col bg-inherit max-sm:text-xs font-extralight text-md gap-2">
          <div className="bg-inherit cursor-pointer">Culutre</div>
          <div className="bg-inherit cursor-pointer">Anecdotes</div>
          <div className="bg-inherit cursor-pointer">Testimonials</div>
          <div className="bg-inherit cursor-pointer">Blogs</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
