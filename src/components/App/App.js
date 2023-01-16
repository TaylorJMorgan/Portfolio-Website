import React, { Suspense, Fragment, useState } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';
import Navigation from '../UI/Navigation';
// import Home from '../Home/Home';
// import About from '../About/About';
// import Projects from '../Projects/Projects';
// import Contact from '../Contact/Contact';
import { AnimatePresence } from 'framer-motion';
import LoadingSpinner from '../UI/LoadingSpinner';

const Home = React.lazy(() => import('../Home/Home'));
const About = React.lazy(() => import('../About/About'));
const Projects = React.lazy(() => import('../Projects/Projects'));
const Contact = React.lazy(() => import('../Contact/Contact'));

const App = (props) => {
  const location = useLocation();

  const [active, setActive] = useState('home');

  return (
    <Fragment>
      <Navigation
        active={active}
        setActive={setActive}
      />
      <main>
        <AnimatePresence exitBeforeEnter>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes
              location={location}
              key={location.pathname}
            >
              <Route
                path='/'
                element={<Home setActive={setActive} />}
              />
              <Route
                path='/About'
                element={<About />}
              />
              <Route
                path='/Projects'
                element={<Projects />}
              />
              <Route
                path='/Contact'
                element={<Contact />}
              />
              <Route
                path='/*'
                element={<Home />}
              />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
    </Fragment>
  );
};

export default App;
