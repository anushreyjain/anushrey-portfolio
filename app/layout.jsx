import Header from "@/components/Header";
import "./globals.css";
import { Montserrat } from "next/font/google";
import ActiveSectionContextProvider from "@/context/ActiveSectionContextProvider";
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "@/context/ThemeContextProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Anushrey Jain | Portfolio",
  description:
    "Anushrey Jain is a Frontend Engineer with 3 years of experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${montserrat.className} relative bg-zinc-950 text-gray-50 text-opacity-90`}
      >
        <div className=" bg-opacity-20 -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-[#E8CBC0]">
          <div className="bg-opacity-20 -z-10 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left:[-5rem] bg-[#636FA4]"></div>
        </div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            {/* <ThemeSwitch /> */}
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
