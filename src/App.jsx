import { lazy } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

// Route-level code splitting: every page except Home loads on demand.
const About = lazy(() => import('./pages/About'));
const Treatments = lazy(() => import('./pages/Treatments'));
const DiagnosisDetail = lazy(() => import('./pages/DiagnosisDetail'));
const PracticeLocations = lazy(() => import('./pages/PracticeLocations'));
const Insurance = lazy(() => import('./pages/Insurance'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Reviews = lazy(() => import('./pages/Reviews'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// One dedicated component per treatment page.
const TREATMENT_PAGES = {
  'total-hip-replacement': lazy(() => import('./pages/treatments/TotalHipReplacement')),
  'total-knee-replacement': lazy(() => import('./pages/treatments/TotalKneeReplacement')),
  'partial-knee-replacement': lazy(() => import('./pages/treatments/PartialKneeReplacement')),
  'arthrosamid-injection': lazy(() => import('./pages/treatments/ArthrosamidInjection')),
  'robotic-total-knee-replacement': lazy(() => import('./pages/treatments/RoboticTotalKneeReplacement')),
  'knee-arthroscopy': lazy(() => import('./pages/treatments/KneeArthroscopy')),
  'non-surgical-treatment': lazy(() => import('./pages/treatments/NonSurgicalTreatment')),
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/diagnosis', element: <Treatments /> },
      { path: '/diagnosis/:id', element: <DiagnosisDetail /> },
      { path: '/treatments', element: <Navigate to="/diagnosis" replace /> },
      ...Object.entries(TREATMENT_PAGES).map(([slug, Page]) => ({ path: `/treatments/${slug}`, element: <Page /> })),
      { path: '/practice-locations', element: <PracticeLocations /> },
      { path: '/insurance', element: <Insurance /> },
      { path: '/gallery', element: <Gallery /> },
      { path: '/reviews', element: <Reviews /> },
      { path: '/blog', element: <Blog /> },
      { path: '/blog/:slug', element: <BlogPost /> },
      { path: '/contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
