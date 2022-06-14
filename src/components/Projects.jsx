import React from 'react';
import Carousel from './Carousel';
import { motion } from 'framer-motion';
import justBird from '../images/justBird.png';

function Projects() {
    return (
        <motion.div
            initial={{ y: -(window.innerHeight) }}
            animate={{ y: 0, transition: { duration: 0.5 } }}
            exit={{ y: -(window.innerHeight), transition: { duration: 0.5 } }}
            className='page-background'>
            <h1 className='page-title'>PROJECTS</h1>
            <div className='row d-flex m-5 justify-content-center'>
                <Carousel
                    img1={justBird}
                    label1='Nothing here at the moment.'
                    description1='Come back when I have some projects to show you!'
                />
            </div>

        </motion.div>
    )
}

export default Projects;