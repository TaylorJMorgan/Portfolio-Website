import React, { Fragment, useState } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../Home/Home';
import Navigation from '../UI/Navigation';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import { AnimatePresence } from 'framer-motion';

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
        </AnimatePresence>
      </main>
    </Fragment>
  );
};

export default App;
