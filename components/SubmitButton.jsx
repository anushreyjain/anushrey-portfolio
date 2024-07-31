import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="border border-zinc-600 lg:border-zinc-800 outline-none text-gray-50 py-2 lg:py-3 px-7 flex items-center 
    gap-2 rounded-full lg:hover:scale-[1.05] lg:hover:border-zinc-500 active:scale-105 
    transition group w-fit lg:text-lg"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all 
          lg:group-hover:translate-x-0.5 lg:group-hover:-translate-y-0.5 " />
        </>
      )}
    </button>
  );
};

export default SubmitButton;
