import Seo from '../components/common/Seo';
import Button from '../components/common/Button';
import Reveal from '../components/common/Reveal';

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you were looking for could not be found." path="/404" noindex />
      <section className="bg-peach py-24">
        <Reveal from="zoom" className="container-x max-w-xl text-center">
          <p className="text-7xl font-bold text-primary-600">4<span className="text-accent-500">0</span>4</p>
          <h1 className="mt-4 text-2xl font-semibold">Page not found</h1>
          <p className="mt-3">Sorry, we couldn&apos;t find that page. It may have moved or no longer exists.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/">Back to Home</Button>
            <Button to="/treatments" variant="outline">View Treatments</Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
