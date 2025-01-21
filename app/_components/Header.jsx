import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  // Menu Array
  const menu = [
    { id: 1, name: "About Us", path: "/about" },
    { id: 2, name: "Contact Us", path: "/contact" },
    { id: 3, name: "Terms & Conditions", path: "/terms" },
  ];

  return (
    <>
      <Head>
        <title>AI Course Generator - Create Personalized AI Courses</title>
        <meta
          name="description"
          content="Generate personalized AI courses with our easy-to-use tool. Explore various topics and create your own curriculum today!"
        />
        <meta
          name="keywords"
          content="AI, Course Generator, Online Learning, Educational Tool, Machine Learning, Deep Learning"
        />
        <meta property="og:title" content="AI Course Generator" />
        <meta
          property="og:description"
          content="Create personalized AI courses tailored to your needs."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Course Generator" />
      </Head>
      <header className="flex justify-between items-center p-5 shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" width={44} height={44} alt="AI Course Generator Logo" />
          <span className="font-extrabold text-2xl tracking-wide hover:opacity-90">
            AI Course Generator
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 font-medium">
          {menu.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className="hover:text-indigo-200 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

       

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 7.5h16.5m-16.5 7.5h16.5"
              />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
