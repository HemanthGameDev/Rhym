import { motion } from 'framer-motion';
import { Award, BookOpen, Heart, Sparkles, Users } from 'lucide-react';

const focusAreas = [
  { icon: BookOpen, text: 'Academic basics' },
  { icon: Sparkles, text: 'Creative expression' },
  { icon: Users, text: 'Social skills' },
  { icon: Heart, text: 'Cultural values' },
  { icon: Award, text: 'Discipline' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              About Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Rhythm n Rhymez
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Rhythm n Rhymez is a nurturing preschool dedicated to building a strong educational foundation for young learners.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our teachers create a warm environment where children explore, learn, and grow with confidence.
            </p>
            <div className="space-y-4">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <area.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{area.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-64 rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src="/images/Screenshot_2026-03-14_170218.png"
                  alt="Preschool children learning together with classroom guidance"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-64 rounded-2xl overflow-hidden shadow-xl mt-8"
              >
                <img
                  src="/images/school-7.png"
                  alt="Happy preschoolers enjoying a playful learning moment"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-64 rounded-2xl overflow-hidden shadow-xl -mt-8"
              >
                <img
                  src="/images/school-8.png"
                  alt="Children taking part in creative preschool art activities"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-64 rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src="/images/school-9.png"
                  alt="Group learning session for preschool children in a bright classroom"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full blur-3xl opacity-50"
            ></motion.div>
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-400 rounded-full blur-3xl opacity-50"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
