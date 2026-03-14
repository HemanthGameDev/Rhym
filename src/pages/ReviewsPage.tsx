import { motion } from 'framer-motion';
import Testimonials from '../sections/Testimonials';
import CTA from '../sections/CTA';

export default function ReviewsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Parent Reviews
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Real stories from families who have entrusted us with their children's education
            </p>
          </motion.div>
        </div>
      </section>
      <Testimonials />
      <CTA />
    </>
  );
}
