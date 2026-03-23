import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";

const page = () => {
  return (
    <div className="bg-skin text-green ">
      <Navbar />
      <Hero />
      <Work />
    </div>
  );
};

export default page;
