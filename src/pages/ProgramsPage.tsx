import { motion } from 'framer-motion';
import Programs from '../sections/Programs';
import LearningPhilosophy from '../sections/LearningPhilosophy';
import CTA from '../sections/CTA';

export default function ProgramsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Programs
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Age-appropriate learning journeys designed for every stage of early childhood
            </p>
          </motion.div>
        </div>
      </section>
      <Programs />
      <LearningPhilosophy />
      <CTA />
    </>
  );
}
