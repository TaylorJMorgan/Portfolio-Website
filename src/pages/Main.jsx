import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Navbar from '../components/Navbar';
import About from './About';
import Projects from '../pages/Projects';
import Contact from './Contact';
import { AnimatePresence } from 'framer-motion';

function Main(props) {

    const location = useLocation();

    return (
        <div>
            <Navbar />
            <div>
                <AnimatePresence exitBeforeEnter>
                    <Routes location={location} key={location.pathname}>
                        <Route path='/' element={<Home />} />
                        <Route path='/About' element={<About />} />
                        <Route path='/Projects' element={<Projects />} />
                        <Route path='/Contact' element={<Contact />} />
                    </Routes>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Main;
