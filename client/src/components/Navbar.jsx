import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import Login from "./Login";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const { isloggedin, setToken, setauthUser } = useAuth();

  return (
    <div className="sticky top-0 z-[999] w-full">
      <div className="nav h-[6.5vh] items-center flex justify-between max-sm:justify-center p-4 font-semibold bg-primary-1 text-[#F2613F]">
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
            <Link to="/">MAKEURSTORY</Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.3 }}
          className="flex max-sm:hidden gap-3  "
        >
          {["Home", "About", "FAQs", "Testimonials"].map((item, index) => (
            <motion.div
              className="tracking-wider uppercase cursor-pointer"
              transition={{ staggerChildren: 0.4 }}
              key={index}
            >
              <Link to={`/#${index + 1}`}>{item}</Link>
            </motion.div>
          ))}
        </motion.div>

        {!isloggedin ? (
          <div className="hidden xl:flex cursor-pointer">
            <Link to={`/login`}>LOG IN</Link>
          </div>
        ) : (
          <div className="hidden xl:flex cursor-pointer">
            <button
              onClick={(e) => {
                e.preventDefault();
                setToken(null);
                setauthUser(null);
                localStorage.removeItem("accessToken");
                localStorage.removeItem("authUser");
                localStorage.removeItem("authDetails");
              }}
            >
              LOGOUT
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
