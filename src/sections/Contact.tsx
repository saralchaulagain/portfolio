"use client";
import { Box, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_u29cajs",
        "template_q8zydcx",
        formRef.current,
        "gh6LRxi_8CGjPjF3o"
      )
      .then(() => {
        setStatus("sent");
      })
      .then(() => {
        setStatus("error");
      });
  };
  return (
    <Box className="about h-screen w-full flex justify-center items-center pt-2 bg-transparent">
      <Box className="w-2/3">
        {/* Title */}
        <Box className="w-full flex flex-col items-center justify-center mb-8">
          <Typography className="headers" variant="subtitle2">
            Get in touch
          </Typography>
          <Typography className="headers" variant="h4">
            CONTACT
          </Typography>
        </Box>

        {/* Contact Section */}
        <Box className="flex  gap-8 items-stretch bg-[#ffffff] px-2 py-1">
          {/* Left side — contact info */}
          <Box className=" flex  flex-col justify-center gap-4 card-text flex-1">
            <Box className="border bg-bgLight py-3 px-4 flex items-center gap-4 rounded-2xl card-hover">
              <img src="/phone-call.png" alt="phone icon" className="h-6" />
              <Typography variant="body1">9845765515</Typography>
            </Box>

            <Box className="border bg-bgLight py-3 px-4 flex items-center gap-4 rounded-2xl card-hover">
              <img src="/email.png" alt="email icon" className="h-6" />
              <Typography variant="body1">
                saral.chaulagain@gmail.com
              </Typography>
            </Box>

            <Box className="border bg-bgLight py-3 px-4 flex items-center gap-4 rounded-2xl card-hover">
              <img src="/location.png" alt="location icon" className="h-6" />
              <Typography variant="body1">Kathmandu, Nepal</Typography>
            </Box>
          </Box>
          {/* Divider */}
          <Box className="w-[2px] bg-divider self-stretch" />
          {/* Form Section */}
          <Box>
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border p-2 rounded"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="border p-2 rounded"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="border p-2 rounded"
                required
              />
              <button
                type="submit"
                className="bg-black text-white py-2 rounded hover:opacity-80"
              >
                Send
              </button>
              {status === "sent" && (
                <p className="text-green-500">
                  Message Delivered Successfully.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500">Something went wrong.</p>
              )}
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
