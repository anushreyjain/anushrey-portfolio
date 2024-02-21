"use client";

import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaBehance } from "react-icons/fa";

const Contact = () => {
  const { ref } = useSectionInView("Let's talk", 0.5);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="text-center py-32 w-full px-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading title={"Let's talk ✉️"} />

      <div className="bg-opacity-20 -z-10 absolute -bottom-20 right-[35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:right-[-33rem] lg:right-[-28rem] xl:right-[-20rem] 2xl:right:[-5rem] bg-[#636FA4]"></div>

      <div className="flex items-center justify-center gap-36 w-full py-32 h-full">
        <div>
          <p className="mt-3 text-white/80">
            Please context me directly at{" "}
            <a
              className="hover:text-zinc-400 transition-all underline font-medium"
              href="mailto:anushrey1998@gmail.com"
            >
              {" "}
              anushrey1998@gmail.com{" "}
            </a>{" "}
            or through this form.
          </p>
          <form
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);
              if (error) {
                toast.error(error);
                return;
              }

              toast.success("Email sent succesfully");
              formData.get("senderEmail");
            }}
            className="mt-5 flex flex-col dark:text-black/80"
          >
            <input
              className="h-14 rounded-lg px-4 text-zinc-200 bg-zinc-800 bg-opacity-80 focus:bg-zinc-900 border border-transparent focus:border-zinc-700 transition-all outline-none"
              type="email"
              name="senderEmail"
              required
              maxLength={500}
              placeholder="Your email"
            />
            <textarea
              className="h-52 my-3 rounded-lg p-4 text-zinc-200 bg-zinc-800 bg-opacity-80 focus:bg-zinc-900 border border-transparent focus:border-zinc-700 transition-all outline-none"
              name="senderMessage"
              placeholder="Your message"
              required
              maxLength={5000}
            />
            <SubmitButton />
          </form>
        </div>

        <div className="">
          <h3 className="text-4xl">
            Do you have any <span className="font-semibold"> Questions, </span>{" "}
            <br />{" "}
            <span className="font-semibold">suggestions or feedback.</span>{" "}
            <br /> I would love to hear from you.
          </h3>
          <div className="flex mt-5 w-full justify-center gap-3">
            <a
              href=""
              className="flex items-center gap-2 bg-white p-4 text-gray-700 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition group cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
            >
              <BsLinkedin />
            </a>

            <a
              href=""
              className="flex items-center gap-2 bg-white p-4 text-gray-700 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition group cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
            >
              <BsGithub />
            </a>

            <a
              href=""
              className="flex items-center gap-2 bg-white p-4 text-gray-700 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition group cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
            >
              <BsInstagram />
            </a>

            <a
              href=""
              className="flex items-center gap-2 bg-white p-4 text-gray-700 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition group cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
            >
              <FaBehance />
            </a>
          </div>
        </div>
      </div>

      <footer className="mb-10 px-4 text-center text-zinc-500 absolute bottom-0 w-full">
        <small className="mb-2 block text-sm">
          &copy; Anushrey. All rights reserved.
        </small>
        <p className="text-sm">
          <span className="font-semibold">About this website:</span> built with
          React & Next.js, Typescript, Tailwind CSS,Framer Motion, Resend and
          Vercel Hosting.
        </p>
      </footer>
    </motion.section>
  );
};

export default Contact;
