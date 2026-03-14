import About from '../sections/About';
import Activities from '../sections/Activities';
import Admissions from '../sections/Admissions';
import Contact from '../sections/Contact';
import CTA from '../sections/CTA';
import Gallery from '../sections/Gallery';
import Hero from '../sections/Hero';
import LearningPhilosophy from '../sections/LearningPhilosophy';
import Programs from '../sections/Programs';
import Testimonials from '../sections/Testimonials';
import TrustBadges from '../sections/TrustBadges';
import WhyChooseUs from '../sections/WhyChooseUs';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <About />
      <Programs />
      <LearningPhilosophy />
      <WhyChooseUs />
      <Activities />
      <Gallery />
      <Testimonials />
      <Admissions />
      <CTA />
      <Contact />
    </>
  );
}
