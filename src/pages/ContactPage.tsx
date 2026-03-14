import { motion } from 'framer-motion';
import Contact from '../sections/Contact';

export default function ContactPage() {
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
              Get In Touch
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Visit us or reach out to learn more about enrolling your child at Rhythm n Rhymez
            </p>
          </motion.div>
        </div>
      </section>
      <Contact />
    </>
  );
}
