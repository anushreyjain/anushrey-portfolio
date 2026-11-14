"use client";
import { useSectionInView } from "@/lib/hooks";
import ShowcaseCard from "./ShowcaseCard";
import { showcase } from "@/lib/data";
import SectionWarpper from "./SectionWarpper";

const Showcase = () => {
  const { ref } = useSectionInView("Showcase", 0.3);

  return (
    <SectionWarpper
      routeLink={'https://www.linkedin.com/in/anushrey-jain-95857a135/details/projects/'}
      title={"Accolades"}
      index="03"
      label="Selected products"
      ref={ref}
      id={'projects'}
    >
      <div>
        {showcase.map((item) => (
          <ShowcaseCard key={item.sNo} item={item} />
        ))}
      </div>
    </SectionWarpper>
  );
};

export default Showcase;
