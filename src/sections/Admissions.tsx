import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Admissions() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fff9f4] via-white to-[#eef6ff] py-20">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-pink-200 blur-3xl" />
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-blue-200 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-yellow-200 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[2rem] bg-white/90 p-8 shadow-[0_30px_80px_-40px_rgba(74,144,226,0.55)] ring-1 ring-blue-100 backdrop-blur md:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1.3fr,0.7fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Admissions 2026
              </div>
              <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
                Admissions Open for 2026
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
                Secure your child&apos;s place in a joyful learning environment built around curiosity, care, and strong early foundations.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="rounded-3xl bg-gradient-to-br from-blue-600 via-sky-500 to-pink-500 p-6 text-white shadow-xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">Visit and Enroll</p>
              <p className="mt-3 text-xl font-semibold">Meet the teachers, explore the campus, and choose the right program.</p>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
                >
                  Enroll Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  <CalendarDays className="h-4 w-4" />
                  Book School Visit
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
