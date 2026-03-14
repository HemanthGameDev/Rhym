import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-gradient-to-br from-blue-50 via-white to-pink-50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-xl rounded-3xl bg-white p-10 text-center shadow-2xl ring-1 ring-blue-100">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Home className="h-8 w-8" />
        </div>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">404 Error</p>
        <h1 className="mt-4 text-4xl font-bold text-gray-900">Page Not Found</h1>
        <p className="mt-4 text-lg text-gray-600">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
