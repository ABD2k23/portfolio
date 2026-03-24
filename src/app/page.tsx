import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WorkSection from "@/components/WorkSection";

const page = () => {
  return (
    <div className="bg-skin text-green">
      <Navbar />
      <Hero />
      <WorkSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
