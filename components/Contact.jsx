"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";
import SocialLinksContainer from "./SocialLinksContainer";
import { useState } from "react";
import SectionWarpper from "./SectionWarpper";
import Corners from "./Corners";

const EMAIL = "anushrey1998@gmail.com";

const fieldClasses =
  "w-full bg-transparent border-0 border-b border-line-strong px-0 py-3 text-lg text-ink-bright placeholder:text-ink-faint outline-none transition-colors focus:border-ink";

const Contact = () => {
  const { ref } = useSectionInView("Let's talk", 0.4);
  const [onValue, setOnValue] = useState({
    senderEmail: "",
    senderMessage: "",
  });

  return (
    <SectionWarpper
      routeLink={`mailto:${EMAIL}`}
      title={"Have a project in mind?"}
      index="06"
      label="Contact"
      ref={ref}
      linkLabel={'Connect now'}
      id={'contact'}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8"
      >
        <div className="lg:col-span-5 flex flex-col gap-10">
          <p className="text-base lg:text-lg text-ink-muted leading-relaxed max-w-md">
            Questions, suggestions, or a product you want to bring to life, I
            would love to hear from you. Drop a line here or write to me directly.
          </p>
          <div className="flex flex-col gap-3">
            <span className="eyebrow">Write to me</span>
            <a
              href={`mailto:${EMAIL}`}
              className="link-underline w-fit !text-ink-bright font-serif text-2xl md:text-3xl lg:text-[2.4rem] leading-tight pb-1"
            >
              {EMAIL}
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="eyebrow">Find me on</span>
            <SocialLinksContainer className="flex -mx-3 lg:-mx-5" />
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="framed relative bg-white/[0.015] p-7 lg:p-12">
            <Corners />
            <form
              action={async (formData) => {
                const { error } = await sendEmail(formData);
                if (error) {
                  toast.error(error);
                  return;
                }
                toast.success("Email sent succesfully");
                setOnValue({ senderEmail: "", senderMessage: "" });
              }}
              className="flex flex-col gap-10"
            >
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />
              <label className="flex flex-col gap-1">
                <span className="eyebrow">Your email</span>
                <input
                  className={fieldClasses}
                  type="email"
                  name="senderEmail"
                  value={onValue.senderEmail}
                  required
                  onChange={(e) =>
                    setOnValue((prev) => ({ ...prev, senderEmail: e.target.value }))
                  }
                  maxLength={500}
                  placeholder="you@company.com"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="eyebrow">Your message</span>
                <textarea
                  className={`${fieldClasses} h-36 resize-none`}
                  name="senderMessage"
                  value={onValue.senderMessage}
                  placeholder="Tell me a little about your project"
                  onChange={(e) =>
                    setOnValue((prev) => ({ ...prev, senderMessage: e.target.value }))
                  }
                  required
                  maxLength={5000}
                />
              </label>
              <div className="flex justify-end">
                <SubmitButton />
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </SectionWarpper>
  );
};

export default Contact;
