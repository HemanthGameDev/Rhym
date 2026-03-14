import { motion } from 'framer-motion';
import Activities from '../sections/Activities';
import Gallery from '../sections/Gallery';
import CTA from '../sections/CTA';

export default function ActivitiesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Fun & Learning Activities
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Engaging experiences that spark curiosity, creativity, and growth every day
            </p>
          </motion.div>
        </div>
      </section>
      <Activities />
      <Gallery />
      <CTA />
    </>
  );
}
