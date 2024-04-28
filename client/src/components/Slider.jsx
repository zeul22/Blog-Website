import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
const Slider = ({ works }) => {
  const [current, setCurrent] = useState(0);
  const length = works.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(works) || works.length <= 0) {
    return null;
  }

  return (
    <div
      id="4"
      className=" flex items-center justify-center max-sm:w-full md:w-[60vw]"
    >
      <button onClick={prevSlide} className="left-0 z-10 text-black p-2 m-2">
        <FaArrowCircleLeft className="text-3xl bg-transparent rounded-full text-red" />
      </button>

      {works.map((work, index) => (
        <AnimatePresence initial={false} key={index}>
          <motion.div
            key={current}
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 100 },
              opacity: { duration: 3 },
            }}
            custom={1}
            className="flex flex-col gap-2 text-black"
          >
            {index === current && (
              <div className="flex flex-col gap-2 text-black">
                <div className="flex justify-center h-[10vh] rounded-full">
                  <div className="flex justify-center">
                    <img
                      src="https://source.unsplash.com/random"
                      className="rounded-full flex items-center h-[10vh] w-[10vh]"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex justify-center font-bold uppercase text-3xl mb-6 tracking-widest">
                  <div className=" tracking-widest">{work.title}</div>
                </div>
                <div className="font-extralight text-2xl text-white flex justify-center">
                  {work.description}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      ))}
      <button onClick={nextSlide} className="right-0 z-10  text-black p-2 m-2">
        <FaArrowCircleRight className="text-3xl bg-transparent rounded-full text-red" />
      </button>
    </div>
  );
};

export default Slider;
