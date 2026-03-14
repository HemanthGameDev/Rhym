import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import AdmissionForm from '../components/AdmissionForm';
import { schoolInfo } from '../data/content';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Visit Us Today
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;d love to meet you and show you around our preschool. Schedule a visit today!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {schoolInfo.address.line1}<br />
                    {schoolInfo.address.line2}<br />
                    {schoolInfo.address.line3}<br />
                    {schoolInfo.address.city}, {schoolInfo.address.state} {schoolInfo.address.pin}<br />
                    {schoolInfo.address.country}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Phone</h3>
                  <a
                    href={`tel:${schoolInfo.phone}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
                  >
                    {schoolInfo.phone}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Working Hours</h3>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-semibold text-gray-800">Monday - Saturday:</span><br />
                    8:00 AM onwards<br /><br />
                    <span className="font-semibold text-gray-800">Sunday:</span><br />
                    Closed
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Email</h3>
                  <a
                    href="mailto:info@rhythmnrhymez.com"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    info@rhythmnrhymez.com
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <div className="w-full h-[450px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.6437822002626!2d78.55949697493344!3d17.33272798354511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9fa78037b8bd%3A0xef4617938f502bbc!2sRhythm%20n%20Rhymez!5e0!3m2!1sen!2sin!4v1773489524779!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
                title="Google map for Rhythm n Rhymez Preschool in Vanasthalipuram"
              ></iframe>
            </div>
          </motion.div>
        </div>

        <div className="mt-12">
          <AdmissionForm />
        </div>
      </div>
    </section>
  );
}
