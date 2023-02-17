import { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import TrandingPage from 'pages/TrandingPage/TrandingPage';
import SearchPage from 'pages/SearchPage/SearchPage';

const MovieDetails = lazy(() =>
  import('pages/Movies/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('../pages/Movies/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Movies/Reviews/Reviews'));

export default function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/tranding" element={<TrandingPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/:mediaType/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="revies" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}
