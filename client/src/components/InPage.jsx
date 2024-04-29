import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import FAQ from "./FAQ";
import { Link as LinkScroll } from "react-scroll/modules";
import { useAuth } from "../store/auth";

const InPage = () => {
  const { token } = useAuth();
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

  return (
    <>
      {!token && (
        <>
          <Home />
          <About />
          <FAQ faqData={faqData} />
          <Footer />
        </>
      )}
      {token && <div>CREATE SOMETHING HERE</div>}
    </>
  );
};

export default InPage;
