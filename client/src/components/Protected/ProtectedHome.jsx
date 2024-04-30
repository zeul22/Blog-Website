import React from "react";
import { useAuth } from "../../store/auth";
import FAQ from "../FAQ";
import Slider from "../Slider";
import toast from "react-hot-toast";

const faqData = [
  {
    question: "How do I sign up to write a blog?",
    answer:
      "Signing up is easy! Just visit our homepage and click on the 'Sign Up' button. Fill out the required information, verify your email, and you're all set to start writing your own blogs.",
  },
  {
    question: "Can I connect with other authors on the platform?",
    answer:
      "Absolutely! Our platform allows you to follow other authors, comment on their posts, and even collaborate through various community features. Just visit an author's profile page to start connecting.",
  },
  {
    question: "What tools are available to help me write better posts?",
    answer:
      "We provide a variety of tools to help you create engaging content, including a rich text editor, SEO recommendations, and analytics to track the performance of your posts. These tools are designed to enhance your writing experience and boost your post's visibility.",
  },
  {
    question: "Is there a limit to how many posts I can publish?",
    answer:
      "No, there is no limit! You can publish as many posts as you like. We encourage active engagement and frequent posting to keep your audience coming back for more.",
  },
  {
    question: "How can I monetize my blogs?",
    answer:
      "Our platform offers several monetization options, including ad revenue sharing, sponsored posts, and subscription-based content. You can access these options in your dashboard and choose what best fits your blogging goals.",
  },
  {
    question: "What kind of support does the platform offer to new bloggers?",
    answer:
      "We provide comprehensive support to all our users, including detailed guides on how to get started, tips for writing engaging content, and technical support for any issues you might encounter. Our community forum is also a great place to seek advice and feedback from fellow bloggers.",
  },
  {
    question: "How do I ensure my blog reaches the right audience?",
    answer:
      "Make use of our built-in SEO tools and tips provided in the platform. Additionally, you can share your posts on social media directly from our site and engage with followers through comments and discussions to grow your audience.",
  },
  {
    question: "Can I import content from another blog?",
    answer:
      "Yes, our platform supports importing content from other blogging platforms. You can easily transfer your existing posts to our site using our import tool in the settings. This process maintains your formatting and linked media.",
  },
  {
    question:
      "What happens if I find another user violating community guidelines?",
    answer:
      "We take community guidelines very seriously. If you encounter any behavior that violates our terms, please report it immediately using the 'Report' button on the specific content or contact our support team. We are committed to maintaining a safe and respectful environment.",
  },
  {
    question:
      "How often does the platform update, and will it affect my published content?",
    answer:
      "We regularly update our platform to introduce new features and improvements. All updates are designed to be seamless and should not affect your published content. We will notify you in advance if any major updates require your attention.",
  },
];

const ProtectedHome = () => {
  const { authDetails } = useAuth();
  const { isloggedin, setToken, setauthUser } = useAuth();

  const user = JSON.parse(authDetails);
  return (
    <div className="flex flex-col h-screen w-full">
      <div className="flex flex-col items-center justify-center bg-orange-500 h-[25vh] w-full">
        <div className="font-extralight h-[25vh] flex items-center md:text-4xl lg:text-6xl text-[6vw]">
          Hi, <span className="font-bold">{user.user.fname}</span>! Welcome
          Back!
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            setToken(null);
            setauthUser(null);
            localStorage.removeItem("accessToken");
            localStorage.removeItem("authUser");
            localStorage.removeItem("authDetails");
            toast.success("Logout Successfull");
          }}
          className="xl:hidden absolute top-[23vh] cursor-pointer bg-black text-white uppercase p-2 rounded-md"
        >
          Logout
        </div>
      </div>
      <div className="flex justify-center h-[25vh] mt-6 mb-6 items-center md:text-4xl lg:text-6xl font-bold tracking-tighter text-[6vw]">
        WRITE. CONNECT. ACHIEVE
      </div>

      <div className="flex flex-col gap-2 mb-6 items-center">
        <div className="tracking-tighter font-light mx-3 ">
          Write your <span>{faqData.length > 0 ? "Another" : "First"}</span>{" "}
          Story!
        </div>
        <form action="">
          <div className="flex flex-col gap-3 items-center">
            <div>
              <input
                type="text"
                placeholder="TITLE"
                className="rounded-md outline-none text-center w-[50vw] h-[8vh]  md:text-2xl font-extralight p-2 border-none hover:bg-gray-100 transition-all duration-200"
              />
            </div>
            <div>
              <textarea
                type="text"
                placeholder="Description"
                className="rounded-md outline-none h-[25vh] w-[80vw] leading-none tracking-tighter p-2 border-none hover:bg-gray-100 transition-all duration-200 text-wrap"
              />
            </div>
            <div>
              <button className="bg-gray-200 p-3 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300">
                Publish
              </button>
            </div>
          </div>
        </form>
      </div>
      <div
        className="flex flex-col gap-6
      md:text-3xl lg:text-4xl text-[4vw]
      mt-2 font-extralight tracking-widest max-sm:items-center"
      >
        <div className="flex justify-center ">Your existing stories</div>
        <div
          className="grid
        grid-rows-* md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-[3vw] md:mx-12        "
        >
          {/* User Posts/Blogs */}
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100
          h-[30vh] w-[50vw] rounded-md text-[3vw]
          md:h-[50vh] md:w-[40vw] 
          lg:h-[40vh] lg:w-[20vw] lg:text-[1vw] 
          flex flex-col  gap-2 p-2   
          "
            >
              <div className="mt-2 flex justify-center uppercase ">
                {item.question}
              </div>
              <div
                className="mt-2 items-start
            sm:text-[1vw] font-normal tracking-tighter md:text-3xl lg:text-[1.5vw]"
              >
                {item.answer.length < 150 ? (
                  <span className="leading-none tracking-tighter">
                    {item.answer}
                  </span>
                ) : (
                  <span>
                    {item.answer.substring(0, 120)}.....
                    <span className="cursor-pointer font-semibold text-orange-500">
                      {" "}
                      Read More
                    </span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="flex justify-center w-full mt-6 mb-6 bg-orange-500 p-6 text-white tracking-widest uppercase">
            People You May love to Talk!
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtectedHome;
