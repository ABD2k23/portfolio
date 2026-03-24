import Work from "./Work";

type WorkItem = {
  src: string;
  alt: string;
  name: string;
  description: string;
  role: string;
  year: string;
  url: string;
};

const WorkSection = () => {
  const works: WorkItem[] = [
    {
      src: "/bnf.png",
      alt: "Beast and Fur website's image",
      name: "Beast & Fur",
      description:
        "A nature-focused park concept blending ethical animal interaction with a premium, family-friendly experience.",
      role: "Website Design & Full Stack Development",
      year: "2025",
      url: "https://beast-and-fur-tau.vercel.app/",
    },
    {
      src: "/hh.png",
      alt: "Halal Heat's website image",
      name: "Halal Heat",
      description:
        "A bold food brand centered around spicy, halal street-style flavors with strong identity potential",
      role: "Wesbite design and Frontend Development",
      year: "2024",
      url: "https://abd2k23.github.io/Halal-Heat/",
    },
    {
      src: "/DL.png",
      alt: "Devlogs website's image",
      name: "Devlogs",
      description:
        "Your personal dev-focused platform showcasing projects, ideas, and growth as a full-stack developer.",
      role: "Full Stack Development",
      year: "2026",
      url: "https://devlogs-coral.vercel.app/",
    },
  ];

  return (
    <div className="flex flex-col gap-[32px] md:gap-[96px] ">
      {works.map((work, index) => (
        <Work key={work.src} {...work} priority={index === 0} />
      ))}
    </div>
  );
};

export default WorkSection;
