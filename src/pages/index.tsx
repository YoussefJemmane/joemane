import Head from "next/head";
import Email from "@/components/Email";
import Loader from "@/components/Loader";
import SocialIcons from "@/components/SocialIcons";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import React, { useState } from "react";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";

function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return (
    <div className="app">
      <Head>
        <title>Youssef Jemmane</title>
        <link rel="icon" href="./favicon.ico" />
        <meta name="keywords" content="HTML, CSS, JavaScript, PHP, Laravel, React, Next.js, Tailwind, Bootstrap, SQL, Python, Full Stack Developer, Youssef Jemmane, JoeMane, Moroccan Developer " />
        <meta
  name="description"
  content="Youssef Jemmane - Full Stack Web Developer Portfolio. 
           Explore my projects and expertise in React, Laravel, Express, Node.js, and more. 
           Get in touch for new job opportunities and collaborations."
/>

      </Head>
      {showContent && (
        <>
          <Navbar />
          <SocialIcons />
          <Email />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </div>
  );
}

export default Index;
