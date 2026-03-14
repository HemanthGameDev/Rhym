import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
import { galleryImages } from '../data/content';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = '';
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      }

      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => (current === null ? current : (current + 1) % galleryImages.length));
      }

      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => (current === null ? current : (current - 1 + galleryImages.length) % galleryImages.length));
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex]);

  const activeImage = activeIndex !== null ? galleryImages[activeIndex] : null;
  const activeImageNumber = activeIndex !== null ? activeIndex + 1 : 0;

  const showPrevious = () => {
    setActiveIndex((current) => (current === null ? current : (current - 1 + galleryImages.length) % galleryImages.length));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === null ? current : (current + 1) % galleryImages.length));
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Gallery
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Moments of Joy & Learning
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Glimpses of happy children exploring, learning, and growing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.id}
              type="button"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveIndex(index)}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg transition-all hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-200"
              aria-label={`Open gallery image: ${image.alt}`}
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold">{image.alt}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

      </div>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 p-4 sm:p-6"
            onClick={() => setActiveIndex(null)}
          >
            <div className="flex h-full w-full items-center justify-center">
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveIndex(null);
                }}
                className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
                aria-label="Close gallery preview"
              >
                <X className="h-6 w-6" />
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
                aria-label="Show previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-5xl"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="overflow-hidden rounded-3xl bg-white/5 shadow-2xl backdrop-blur">
                  <div className="flex max-h-[78vh] items-center justify-center bg-black/30">
                    <img
                      src={activeImage.src}
                      alt={activeImage.alt}
                      loading="lazy"
                      decoding="async"
                      className="max-h-[78vh] w-auto max-w-full object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4 text-white">
                    <div>
                      <p className="text-lg font-semibold">{activeImage.alt}</p>
                      <p className="text-sm text-white/70">
                        Image {activeImageNumber} of {galleryImages.length}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={showNext}
                      className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium transition hover:bg-white/20"
                      aria-label="Show next image"
                    >
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
                aria-label="Show next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
