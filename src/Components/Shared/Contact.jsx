

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Container from "./Container";
import SectionHeader from "./SectionHeader";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,

      import.meta.env.VITE_PUBLICE_KEY
    );
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLICE_KEY
      )
      .then(
        (result) => {
          toast.success(
            "Thank you for contacting me. I'll get back to you as soon as possible!!. Thank you"
          );
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="min-h-[80vh] bg-black-dark" id="contact">
      <Container>
        <SectionHeader name="CONTACT" />
        <p className="text-[#6F6F6F] text-[12px] mt-10">
          🤚 Hello, Let's get in touch
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <div className="my-10 flex flex-col">
            <label
              htmlFor="name"
              className="cursor-pointer text-[#6F6F6F] font-generalSemibold text-md"
            >
              Name
            </label>
            <input
              id="name"
              name="from_name"
              type="text "
              className=" border-b border-[#343434] text-[#6F6F6F] text-sm caret-white focus:outline-none bg-transparent w-full md:w-3/5 lg:w-2/5 pt-3"
            />
          </div>
          <div className="my-10 flex flex-col">
            <label
              htmlFor="email"
              className="cursor-pointer text-[#6F6F6F] font-generalSemibold text-md"
            >
              Email
            </label>
            <input
              required
              type="text "
              id="email"
              name="from_email"
              className=" border-b border-[#343434] text-[#6F6F6F] text-sm caret-white focus:outline-none bg-transparent w-full md:w-3/5 lg:w-2/5"
            />
          </div>
          <div className="my-10 flex flex-col">
            <label
              htmlFor="message"
              className="cursor-pointer text-[#6F6F6F] font-generalSemibold text-md"
            >
              Message
            </label>
            <input
              required
              id="message"
              name="message"
              type="text "
              className=" border-b border-[#343434] text-[#6F6F6F] text-sm caret-white focus:outline-none bg-transparent w-full md:w-3/5 lg:w-2/5 mt-12"
            />
          </div>
          <button className="bg-[#FFFFFF] text-[#000000] border border-black px-6 py-1 md:px-8 md:py-2 mb-4 text-[12px] lg:text-sm active:scale-95 duration-[.4s] font-generalSemibold">
            SEND
          </button>
        </form>
      </Container>
    </div>
  );
};

export default Contact;
