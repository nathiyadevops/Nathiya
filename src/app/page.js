import About from "@/components/About/About";
import HeroSection from "@/components/Hero/HeroSection";
import Achivements from "@/components/Achivements/Achivements";
import Promotional from "@/components/promotional/Promotional";
import Footer from "@/components/Footer/Footer";
import Testimonial from "@/components/Testinomial/Testinomial";
import Navbar from "@/components/Navbar/Navbar";
import Mission from "@/components/Mission/Mission";
import Training from "@/components/Training/Training";
import Services from "@/components/ServicesSection/Services";
import { JobSection } from "@/components/JobSection/JobSection";
import DemoTest from "@/components/demoTest/DemoTest";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}

      <main>
        <HeroSection />
        <About />
        <Mission />
        <Services />
        <Training />
        <DemoTest />
        <Achivements />
        <JobSection />
        <Promotional />
        <Testimonial />
        <Footer />
      </main>
    </>
  );
}
