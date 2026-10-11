import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-5 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold text-ink">
        This page could not be found.
      </h1>
      <p className="mt-4 text-muted">
        The page may have moved or the address may be incorrect.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white"
      >
        Return home
      </Link>
    </section>
  );
}