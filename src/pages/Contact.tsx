/** @format */

import {
  Clock3,
  GitFork,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import type React from "react";
import { useRef, useState } from "react";
import { Mailer } from "../components/MessageTemplate";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Contact = () => {
  const Name = useRef<HTMLInputElement>(null);
  const Email = useRef<HTMLInputElement>(null);
  const Header = useRef<HTMLInputElement>(null);
  const textMessage = useRef<HTMLTextAreaElement>(null);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    const newDetails = {
      name: Name.current?.value,
      email: Email.current?.value,
      header: Header.current?.value,
      message: textMessage.current?.value,
    };

    if (!newDetails.name || !newDetails.email || !newDetails.message) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log("message gotten successfully", newDetails);
      await Mailer(
        newDetails.name,
        newDetails.email,
        "charlesuchendu750@gmail.com" ,
        newDetails.header || "Portfolio Contact",
        newDetails.message,
      );

      setSubmitStatus({
        type: "success",
        message:
          "Your message has been sent successfully. I will get back to you soon.",
      });

      Name.current!.value = "";
      Email.current!.value = "";
      Header.current!.value = "";
      textMessage.current!.value = "";
    } catch (error) {
      console.error("Failed to send message:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="h-auto bg-[#0b1324] lg:px-5 lg:py-6 text-white">
      <div className="text-center mb-[2rem]">
        <h3 className="text-[rgb(143,130,218)] font-semibold text-[14px]  lg:mt-[4rem]] pt-[3rem] pb-[2.5rem]">
          GET IN TOUCH
        </h3>
        <h2 className="lg:text-[40px] text-[28px] font-semibold">Contact Me</h2>
        <p className="text-slate-400 text-[16px] mb-[4rem]" >
          Open to new Opportunities, Collaboration, and interesting <br></br>{" "}
          projects. Let's build something great together{" "}
        </p>
      </div>
      <div className="md:mx-auto w-full max-w-5xl px-4 sm:px-6 grid grid-cols-1 gap-8 lg:grid-cols-[1.04fr_0.96fr]">
        {/* ================= LEFT: CONTACT FORM ================= */}
        <div className="lg:rounded-lg md:border md:border-[#202d42] md:bg-[#0f172a] md:p-6 md:shadow-sm">
          {/* Heading */}
          <div className="mb-7">
            <h2 className="text-xl font-bold text-[#f4f6ff]">Send a Message</h2>

            <p className="mt-2 text-[16px] text-[#526886]">
              I typically respond within 24 hours.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {submitStatus && (
              <div
                className={`mb-4 rounded-md border px-4 py-3 text-sm ${
                  submitStatus.type === "success"
                    ? "border-green-500/30 bg-green-500/10 text-green-300"
                    : "border-red-500/30 bg-red-500/10 text-red-300"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            {/* Name + Email */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#9cb0d0]">
                  Name <span className="text-[#ff5264]">*</span>
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  ref={Name}
                  className="
                    h-12 w-full rounded-md
                    border border-[#223149]
                    bg-[#0e1729]
                    px-4
                    text-[15px] text-[#e8edfa]
                    outline-none
                    placeholder:text-[#647b9e]
                    focus:border-[#7d8cf4]
                    focus:ring-2
                    focus:ring-[#7d8cf4]/10
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#9cb0d0]">
                  Email <span className="text-[#ff5264]">*</span>
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  ref={Email}
                  className="
                    h-12 w-full rounded-md
                    border border-[#223149]
                    bg-[#0e1729]
                    px-4
                    text-[15px] text-[#e8edfa]
                    outline-none
                    placeholder:text-[#647b9e]
                    focus:border-[#7d8cf4]
                    focus:ring-2
                    focus:ring-[#7d8cf4]/10
                  "
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#9cb0d0]">
                Subject
              </label>

              <input
                type="text"
                placeholder="Project opportunity, collaboration..."
                ref={Header}
                className="
                  h-12 w-full rounded-md
                  border border-[#223149]
                  bg-[#0e1729]
                  px-4 py-3
                  text-[15px] leading-6 text-[#e8edfa]
                  outline-none
                  placeholder:text-[#647b9e]
                  focus:border-[#7d8cf4]
                  focus:ring-2
                  focus:ring-[#7d8cf4]/10
                "
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#9cb0d0]">
                Message <span className="text-[#ff5264]">*</span>
              </label>

              <textarea
                rows={6}
                placeholder="Tell me about the project, role, or idea..."
                ref={textMessage}
                className="min-h-[140px] w-full resize-y rounded-md border border-[#223149] bg-[#0e1729] px-4 py-3 text-[15px] leading-6 text-[#e8edfa] outline-none placeholder:text-[#647b9e] focus:border-[#7d8cf4] focus:ring-2 focus:ring-[#7d8cf4]/10"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                flex h-[54px] w-full
                items-center justify-center gap-2
                rounded-[10px]
                bg-[#7d88ed]
                text-[16px] font-bold text-white
                transition
                hover:bg-[#6f7bea]
                active:translate-y-px
                disabled:cursor-not-allowed disabled:opacity-70
              "
            >
              <Send size={18} />
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            </button>
          </form>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="flex flex-col gap-[19px]">
          {/* ================= QUICK INFO ================= */}
          <div className="rounded-[19px] border border-[#202d42] bg-[#101827] p-7">
            <h2 className="mb-6 text-xl font-bold text-[#f4f6ff]">
              Quick Info
            </h2>

            <div className="flex flex-col gap-[17px]">
              {/* Location */}
              <div className="flex items-center gap-3.5">
                <div
                  className="
                    flex h-[43px] w-[43px] shrink-0
                    items-center justify-center
                    rounded-[10px]
                    border border-[#6c79e4]/30
                    bg-[#626cc8]/10
                    text-[#7e8cf9]
                  "
                >
                  <MapPin size={20} />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[12px] font-bold tracking-[1.1px] text-[#4f6585]">
                    LOCATION
                  </span>

                  <strong className="text-[15px] font-bold text-[#f0f3fc]">
                    Lagos, Nigeria
                  </strong>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3.5">
                <div
                  className="
                    flex h-[43px] w-[43px] shrink-0
                    items-center justify-center
                    rounded-[10px]
                    border border-[#00ade5]/30
                    bg-[#00a5da]/10
                    text-[#00b9ff]
                  "
                >
                  <Mail size={20} />
                </div>

                <div className="flex min-w-0 flex-col gap-1">
                  <span className="text-[12px] font-bold tracking-[1.1px] text-[#4f6585]">
                    EMAIL
                  </span>

                  <strong className="break-all text-[15px] font-bold text-[#f0f3fc]">
                    charlesuchendu750@email.com
                  </strong>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-center gap-3.5">
                <div
                  className="
                    flex h-[43px] w-[43px] shrink-0
                    items-center justify-center
                    rounded-[10px]
                    border border-[#00c373]/30
                    bg-[#00be70]/10
                    text-[#19d87a]
                  "
                >
                  <Clock3 size={20} />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[12px] font-bold tracking-[1.1px] text-[#4f6585]">
                    RESPONSE TIME
                  </span>

                  <strong className="text-[15px] font-bold text-[#f0f3fc]">
                    Within 24 hours
                  </strong>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div
              className="
                mt-6 flex h-[49px]
                items-center gap-2
                rounded-[9px]
                border border-[#00c47c]/30
                bg-[#00b579]/10
                px-[17px]
                text-sm font-bold text-[#14d777]
              "
            >
              <span className="h-[11px] w-[11px] exp-status-dot" />

              <span>Available for new opportunities</span>
            </div>
          </div>

          {/* ================= FIND ME ONLINE ================= */}
          <div className="rounded-[19px] border border-[#202d42] bg-[#101827] p-7">
            <h2 className="mb-6 text-xl font-bold text-[#f4f6ff]">
              Find Me Online
            </h2>

            <div className="flex flex-col gap-3">
              {/* LinkedIn */}
              {/* <a
                href="#"
                className="
                  flex min-h-[76px] items-center gap-[15px]
                  rounded-[11px]
                  border border-[#223149]
                  bg-[#0e1729]
                  px-4 py-3
                  transition
                  hover:border-[#30415e]
                  hover:bg-[#111d31]
                "
              > */}
              {/* <div
                  className="
                    flex h-[43px] w-[43px] shrink-0
                    items-center justify-center
                    rounded-[10px]
                    border border-[#0077dc]/25
                    bg-[#006cca]/10
                    text-[#0879d1]
                  "
                >
                  <LinkedInIcon />
                </div> */}

              {/* <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <strong className="text-[16px] font-bold text-[#e9edf7]">
                    LinkedIn
                  </strong>

                  <span className="text-[13px] text-[#526782]">
                    Connect professionally
                  </span>
                </div> */}
              {/* 
                <span className="hidden whitespace-nowrap text-sm font-bold text-[#0875cf] sm:block">
                  Charles Chinedu Uchendu
                </span>
              </a> */}

              {/* GitFork */}
              <Link
                to={`https://github.com/${import.meta.env.VITE_GITHUB}`}
                className="
                  flex min-h-[76px] items-center gap-[15px]
                  rounded-[11px]
                  border border-[#223149]
                  bg-[#0e1729]
                  px-4 py-3
                  transition
                  hover:border-[#30415e]
                  hover:bg-[#111d31]
                "
              >
                <div
                  className="
                    flex h-[43px] w-[43px] shrink-0
                    items-center justify-center
                    rounded-[10px]
                    border border-[#737de2]/30
                    bg-[#6771db]/10
                    text-[#8994f9]
                  "
                >
                  <GitFork size={21} />
                </div>

                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <strong className="text-[16px] font-bold text-[#e9edf7]">
                    GitHub
                  </strong>

                  <span className="text-[13px] text-[#526782]">
                    Browse my repositories
                  </span>
                </div>

                <span className="hidden whitespace-nowrap text-sm font-bold text-[#8993f2] sm:block">
                  focusgabriel
                </span>
              </Link>

              {/* WhatsApp */}
              <Link
                to={`https://wa.me/${import.meta.env.VITE_WHATSAPP}`}
                className="
                  flex min-h-[76px] items-center gap-[15px]
                  rounded-[11px]
                  border border-[#223149]
                  bg-[#0e1729]
                  px-4 py-3
                  transition
                  hover:border-[#30415e]
                  hover:bg-[#111d31]
                "
              >
                <div
                  className="
                    flex h-[43px] w-[43px] shrink-0
                    items-center justify-center
                    rounded-[10px]
                    border border-[#00c572]/30
                    bg-[#00c171]/10
                    text-[#08d878]
                  "
                >
                  <MessageCircle size={21} />
                </div>

                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <strong className="text-[16px] font-bold text-[#e9edf7]">
                    WhatsApp
                  </strong>

                  <span className="text-[13px] text-[#526782]">
                    Chat directly
                  </span>
                </div>

                <span className="hidden whitespace-nowrap text-sm font-bold text-[#09d875] sm:block">
                  +234 901 177 2683
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

/**
 * LinkedIn doesn't have to be a separate package.
 * This keeps the icon dependency small while still
 * matching the screenshot reasonably closely.
 */
// // const LinkedInIcon = () => {
// //   return (
// //     <svg
// //       width="21"
// //       height="21"
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       xmlns="http://www.w3.org/2000/svg"
// //     >
// //       <path
// //         d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"
// //         stroke="currentColor"
// //         strokeWidth="2"
// //         strokeLinecap="round"
// //         strokeLinejoin="round"
// //       />

// //       <rect
// //         x="2"
// //         y="9"
// //         width="4"
// //         height="12"
// //         rx="1"
// //         stroke="currentColor"
// //         strokeWidth="2"
// //       />

// //       <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" />
// //     </svg>
// //   );
// };

export default Contact;
