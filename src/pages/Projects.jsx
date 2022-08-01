import React from 'react';
import Carousel from '../components/Carousel';
import { motion } from 'framer-motion';
import justBird from '../images/justBird.png';
import yysecrets from '../images/yysecrets.png';

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
                    img1={yysecrets}
                    label1='YYC Hacks - 3rd place winner, “YYSecrets” | July 2022'
                    description1='Developed a web app using HTML, CSS, React, JavaScript, Go, MySQL, and a custom API to help tourists discover “hidden gem” businesses, events, and restaurants in downtown Calgary.'
                />
            </div>

        </motion.div>
    )
}

export default Projects;