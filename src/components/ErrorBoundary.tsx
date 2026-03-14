import { Component, type ErrorInfo, type ReactNode } from 'react';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Unhandled UI error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <section className="min-h-screen bg-white px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-3xl border border-red-100 bg-red-50 p-8 text-center">
            <h1 className="text-3xl font-bold text-red-700">Something went wrong</h1>
            <p className="mt-3 text-red-600">
              Please refresh the page. If this continues, contact support.
            </p>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}
