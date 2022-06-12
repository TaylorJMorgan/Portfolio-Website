import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
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
                    </Routes>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Main;
