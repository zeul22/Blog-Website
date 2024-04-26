import React from "react";
import { circIn, circInOut, motion } from "framer-motion";

const blog = [
  "#WebDesign",
  "#UXDesign",
  "#UIUX",
  "#InfiniteScroll",
  "#CreativeCoding",
  "#FrontEndDeveloper",
  "#JavaScript",
  "#CSS",
  "#HTML5",
  "#Animation",
  "#WebDevelopment",
  "#InteractiveDesign",
  "#UserExperience",
  "#InnovativeDesigns",
  "#GraphicDesign",
  "#DigitalArt",
  "#WebAnimation",
  "#ModernWeb",
  "#WebsiteInspiration",
  "#TechArt",
];
const Home = () => {
  return (
    <div className=" border-t border-zinc-800 w-[100vw] bg-primary-2
    max-sm:h-[67vh]
    sm:h-[80vh]
    md:h-[77vh]
    lg:h-[74vh]

    ">
      <div className=" mt-0 flex flex-col justify-center gap-4">
        <div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute  h-[0.5vw] bg-red-200 rotate-90
               
                sm:w-[30vh] sm:right-[0vw] sm:top-[42vh]
                max-md:w-[4vh] max-md:right-[0px] max-md:top-[330px]
                md:w-[50vh] md:right-[0px] md:top-[35vh]
                

                max-sm:w-[30vh] max-sm:right-[0px] max-sm:top-[24vh]
                sm:text-9xl
                md:text-3xl
            "
          ></motion.div>
          <div
            className="font-extralight tracking-tighter mt-[5vh] ml-[5vw]  items-center text-xs
            xs:text-xl
            max-sm:text-5xl 
            sm:text-9xl
            md:text-8xl md:flex
            lg:text-8xl lg:flex
            "
          >
            You Decide
            <div>
              Your {"  "}
              <motion.span
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.6 }}
                className="font-bold absolute"
              >
                Story!
              </motion.span>{" "}
            </div>
          </div>
        </div>

        {/* Text  */}
        <div
          className="flex justify-center gap-1 font-extralight tracking-tighter items-center absolute right-[2.5vw] 
          xs:text-xl 
          max-sm:text-3xl max-sm:top-[25vh]
          sm:text-4xl sm:top-[43vh]
          md:text-6xl md:top-[36vh]
        "
        >
          WE{" "}
          <motion.span
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.6 }}
            className="font-bold z-[10]"
          >
            ACHIEVE
          </motion.span>{" "}
          IT
        </div>
      </div>
      {/* Text Animation */}
      <div className="flex overflow-hidden mt-[15vh]">
        <div
          className="flex justify-center gap-8 font-extralight

          max-sm:text-2xl max-sm:mt-[2vh]
          sm:text-3xl 
          md:text-[2xl]  md:-mb-[vh]
          lg:flex lg:mt-[10vh] 

          t-xl 
          md:text-4xl md:mt-[12vh]
          animate-loop-scroll
      "
        >
          {blog.map((item, index) => (
            <div key={index} className="z-[999]">
              {item}
            </div>
          ))}
        </div>
        <div
          className="flex justify-center gap-8 font-extralight

          max-sm:text-2xl max-sm:mt-[2vh]
          sm:text-3xl 
          md:text-[2xl]  md:-mb-[vh]
          lg:flex lg:mt-[10vh] 

          t-xl 
          md:text-4xl md:mt-[12vh]
          animate-loop-scroll
      "
        >
          {blog.map((item, index) => (
            <div key={index} className="z-[999]">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div
        className="justify-center mt-[4.5vh] -mb-[8vh] tracking-tighter font-extralight cursor-pointer
        xs:text-xl
        max-sm:flex 
        sm:hidden
        md:hidden
        lg:hidden "
      >
        <button className="p-5 flex items-center justify-center rounded-full bg-orange-600 hover:bg-orange-500 transition-all duration-200 hover:text-white">
          Write Yours
        </button>
      </div>
      {/* Images  Animation */}
      <div className="flex overflow-hidden  mb-[10vh]">
        <div
          className="flex justify-center gap-12 font-extralight mb-[4vh]
          xs:text-xl
          sm:mt-[15vh]
          max-sm:mt-[19vh]
          md:mt-[19vh]
          lg:mt-[14vh] 
          animate-loop-scroll
      "
        >
          {blog.map((item, index) => (
            <div
              key={index}
              className=" bg-[url('https://source.unsplash.com/random')] bg-cover bg-center rounded-md shadow-xl 
              xs:h-[10vh] max-xs:w-[10vw]
              max-sm:h-[20vh] max-sm:w-[40vw]
              sm:h-[30vh] sm:w-[40vw]
              md:h-[25vh] md:w-[25vw]
              lg:h-[30vh] max-md:w-[30vw]
              "
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
