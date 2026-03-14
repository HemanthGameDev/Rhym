import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WhatsAppButton from './components/WhatsAppButton';
import { useScrollToTop } from './hooks/useScrollToTop';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';

const Home = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProgramsPage = lazy(() => import('./pages/ProgramsPage'));
const ActivitiesPage = lazy(() => import('./pages/ActivitiesPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

function RouteLoadingFallback() {
  return (
    <section className="min-h-[50vh] pt-28 pb-10">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />
      </div>
    </section>
  );
}

function AppContent() {
  useScrollToTop();

  return (
    <>
      <Navbar />
      <Suspense fallback={<RouteLoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <WhatsAppButton />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
