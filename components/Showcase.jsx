"use client";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import ShowcaseCard from "./ShowcaseCard";
import { showcase } from "@/lib/data";
import AnimatedLine from "./AnimatedLine";
import SectionWarpper from "./SectionWarpper";

const Showcase = () => {
  const { ref } = useSectionInView("Showcase", 0.5);

  return (
    <>
      <SectionWarpper
        routeLink={'https://www.linkedin.com/in/anushrey-jain-95857a135/details/projects/'}
        title={"Accolades"}
        lineColor={'#0A0A0D'}
        ref={ref}
        id={'projects'}
      >
        <div className=" bg-opacity-5 -z-10 absolute top-[20%] right-[-40rem] h-[40rem] w-[40rem] rounded-full blur-[10rem] lg:w-[68.75rem] bg-[#E8CBC0]">
          <div className="bg-opacity-10 -z-10 absolute top-[-1rem] left-[-35rem] 
          h-[40rem] w-[50rem] rounded-full blur-[10rem] lg:w-[68.75rem] md:left-[-33rem]
           lg:top-[10rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left:[-5rem] bg-[#636FA4]"></div>
        </div>
        {showcase.map((item, index) => (
          <ShowcaseCard key={index} item={item} />
        ))}
      </SectionWarpper>
    </>
  );
};

export default Showcase;
