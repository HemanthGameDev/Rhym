import Hero from '../sections/Hero';
import TrustBadges from '../sections/TrustBadges';
import About from '../sections/About';
import Programs from '../sections/Programs';
import LearningPhilosophy from '../sections/LearningPhilosophy';
import WhyChooseUs from '../sections/WhyChooseUs';
import Activities from '../sections/Activities';
import Gallery from '../sections/Gallery';
import Testimonials from '../sections/Testimonials';
import CTA from '../sections/CTA';
import Contact from '../sections/Contact';

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
      <CTA />
      <Contact />
    </>
  );
}
