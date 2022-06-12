import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {

    return (
        <motion.div
            initial={{ y: -(window.innerHeight) }}
            animate={{ y: 0, transition: { duration: 0.5 } }}
            exit={{ y: window.innerHeight, transition: { duration: 0.5 } }}
            className='home-background'>
            <section id='home'>
                <div className='flex row home-banner align-items-center'>
                    <div className='col'>
                        Hello, I'm&nbsp;
                        <span className='highlight'>
                            Taylor Morgan
                        </span>
                        ,
                        <br />
                        a full-stack developer.
                        <br />
                        <NavLink to='/about' >
                            <button className="btn btn-outline-light btn-md start-button">
                                Let's start.
                            </button>
                        </NavLink>
                    </div>
                </div>
            </section>
        </motion.div>


    )
}

export default Home;