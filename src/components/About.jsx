import React from 'react';
import taylorBird from '../images/taylorBird.jpg';
import skills from '../images/skills.png';
import Card from './Card';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

function About() {

    return (
        <motion.div
            initial={{ y: -(window.innerHeight) }}
            animate={{ y: 0, transition: { duration: 0.5 } }}
            exit={{ y: -(window.innerHeight), transition: { duration: 0.5 } }}
            className='page-background'>
            <section id='about'>
                <h1 className='page-title'>ABOUT</h1>
                <div className='row justify-content-center'>
                    <div className='d-flex col-sm-12 col-md-6 col-lg-5 align-items-stretch'>
                        <Card
                            imgSrc={taylorBird}
                            title="That's Me."
                            subtitle="The guy, not the bird."
                            content="I'm a Junior Full Stack Developer. I only just recently transitioned into Web Development from Prehospital Medical Care."
                        />
                    </div>
                    <div className='d-flex col-sm-12 col-md-6 col-lg-5 align-items-stretch'>
                        <Card
                            imgSrc={skills}
                            title="Skills"
                        />
                    </div>
                </div>
            </section>
        </motion.div>
    )
}



export default About;