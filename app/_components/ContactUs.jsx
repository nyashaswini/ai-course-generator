"use client";
import Head from "next/head";
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    try {
      setName("");
      setEmail("");
      setMessage("");
      toast.success(`Thank you for your message, ${name}! I'll get back to you soon. 👏`);
    } catch (error) {
      toast.error(`Something went wrong. Please try again, ${name}.`);
    }
  };

  return (
    <>
      <Header />
      <Head>
        <title>Contact Us | AI Course Generator</title>
        <meta
          name="description"
          content="Get in touch with AI Course Generator for any inquiries, feedback, or support."
        />
        <meta name="keywords" content="contact, customer support, AI courses" />
        <link
          rel="canonical"
          href="https://your-custom-domain.vercel.app/contact-us"
        />
      </Head>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col items-center gap-5 border p-3 shadow-sm"
          >
            <h2 className="text-2xl font-normal">Feedback or suggestions</h2>
            <h4 className="text-xl font-mono">we are Very Responsive to Messages</h4>

            <div className="w-full md:w-1/2 flex flex-col gap-2">
              <input
                {...register("name", { required: true })}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-[50px] rounded-full leading-tight border py-2 px-4"
                type="text"
                placeholder="Name"
              />
              {errors.name && <span className="text-red-300">This field is required</span>}
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-2">
              <input
                {...register("email", { required: true })}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[50px] rounded-full border py-2 px-4"
                type="email"
                placeholder="Email"
              />
              {errors.email && <span className="text-red-300">This field is required</span>}
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-2">
              <textarea
                {...register("message", { required: true })}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full h-[140px] rounded-md border py-2 px-4"
                placeholder="Enter Your Message"
              />
              {errors.message && <span className="text-red-300">This field is required</span>}
            </div>

            <div className="w-1/2 flex items-center justify-center">
              <button
                type="submit"
                className="px-10 py-3 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
