import React from 'react';
import taylorBird from '../images/taylorBird.jpg';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import SkillGroup from '../components/SkillGroup';

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
                    <div className='d-flex col-sm-8 col-md-6 align-items-stretch flex-md-row-reverse'>
                        <Card
                            imgSrc={taylorBird}
                            title="That's Me."
                            subtitle="The guy, not the bird."
                            content="I'm a Junior Full Stack Developer. I only just recently transitioned into Web Development from Prehospital Medical Care."
                        />
                    </div>
                    <div className='d-flex col-sm-8 col-md-6 align-items-stretch'>
                        <Card
                            body={<SkillGroup />}
                            title='My Skills.'
                            subtitle='They hopefully pay the bills.'
                            content='I am always trying to learn new skills and better the ones I already have.'
                        />
                    </div>
                </div>
            </section>
        </motion.div>
    )
}



export default About;