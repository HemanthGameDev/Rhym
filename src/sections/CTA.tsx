import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>

      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        animate={{
          scale: [1.5, 1, 1.5],
          x: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl"
      ></motion.div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Give Your Child the Best Start
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join our nurturing community where every child is valued, supported, and inspired to reach their full potential.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all flex items-center space-x-2"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="group bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all border-2 border-white/30 flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Book a School Visit</span>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white"
          >
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
              <div className="text-left">
                <p className="font-bold text-lg">4.9 Rating</p>
                <p className="text-sm text-white/80">52 Reviews</p>
              </div>
            </div>
            <div className="w-px h-12 bg-white/30 hidden sm:block"></div>
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                <span className="text-2xl">👨‍👩‍👧</span>
              </div>
              <div className="text-left">
                <p className="font-bold text-lg">50+ Families</p>
                <p className="text-sm text-white/80">Trust Us</p>
              </div>
            </div>
            <div className="w-px h-12 bg-white/30 hidden sm:block"></div>
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
              <div className="text-left">
                <p className="font-bold text-lg">Expert Teachers</p>
                <p className="text-sm text-white/80">Caring & Dedicated</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
