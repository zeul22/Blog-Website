import React from "react";
import { FaUserGraduate } from "react-icons/fa6";
import { MdConnectWithoutContact } from "react-icons/md";
import { CiBadgeDollar } from "react-icons/ci";
import Slider from "./Slider";
const About = () => {
  const work = [
    {
      title: "RAHUL ANAND",
      description:
        "You are seeing my work, if this project helped you somewhere, do give me a follow over my instagram: bliss_anandYou are seeing my work, if this project helped you somewhere, do give me a follow over my instagram: bliss_anand",
    },
    {
      title: "BLISS ANAND",
      description:
        "You are seeing my work, if this project helped you somewhere, do give me a follow over my instagram: bliss_anand",
    },
    {
      title: "ANAND365",
      description:
        "You are seeing my work, if this project helped you somewhere, do give me a follow over my instagram: bliss_anand",
    },
  ];
  return (
    <div id="2">
      <div className="flex justify-center mt-[30vh]">
        <div className="flex flex-col gap-2">
          <div
            className="flex justify-center mb-[1.5vh] 
          max-sm:text-4xl
          sm:text-5xl
          "
          >
            How This Platform Works
          </div>
          {/* Hidden for small screen */}
          <div
            className="hidden font-bold tracking-tighter justify-center 
          lg:flex
          
          md:text-[3vw]
          "
          >
            WRITE STORIES. CONNECT WITH PEOPLE. ACHIEVE YOUR DREAMS
          </div>
          <div className="lg:hidden text-[4vw] flex justify-center font-bold">
            WRITE STORIES
          </div>
          <div className="lg:hidden text-[4vw] flex justify-center font-bold">
            CONNECT WITH PEOPLE
          </div>
          <div className="lg:hidden text-[4vw] flex justify-center font-bold">
            ACHIEVE YOUR DREAMS
          </div>
          <div className="grid grid-rows-* md:grid-cols-3 mt-[2.5vh] gap-12 p-20">
            <div>
              <div className="flex items-center justify-center">
                <FaUserGraduate className="text-6xl " />
              </div>
              <div className="flex items-center justify-center font-bold uppercase tracking-widest mb-[1vh]">
                WRITE
              </div>
              <div className="tracking-tighter">
                Write your stories never before. Make yourself the adventuror
                and venture through difficulties with like minded individuals
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <MdConnectWithoutContact className="text-6xl " />
              </div>
              <div className="flex items-center justify-center font-bold uppercase tracking-widest mb-[1vh]">
                CONNECT
              </div>
              <div className="tracking-tighter ">
                Connect with like minded people with our exclusive messaging app
                that lets you talk to other authors/philosophers!
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <CiBadgeDollar className="text-6xl" />
              </div>
              <div className="flex items-center justify-center font-bold uppercase tracking-widest mb-[1vh]">
                ACHIEVE
              </div>
              <div className="tracking-tighter">
                Achieve your dreams with the support of people that want to see
                you thrive. Be the rebellion within you. Outsmart your
                Procastination!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-start bg-primary-3 mb-[2.5vh] h-[60.5vh]">
        <div className="flex flex-col gap-4 justify-center ">
          <div
            className="flex justify-center mt-[3vh] mb-[1.5vh]
          max-sm:text-3xl
          sm:text-4xl
          "
          >
            Testimonials about the platform
          </div>
          <Slider works={work} />
        </div>
      </div>
    </div>
  );
};

export default About;
