import React from 'react';
import taylorBirdWithBorder from '../images/taylorBirdWithBorder.png';
import Card from './Card';
import Navbar from './Navbar';

function About() {
    return (
        <div className='flex about-background'>
            <Navbar />
            <section id='about'>
                <div className='row mx-0'>
                    <div className='col-sm col-md-6'>
                        <Card 
                            imgSrc={taylorBirdWithBorder}    
                            title="That's Me."
                            subtitle="The guy, not the bird."
                            content="I'm a Junior Full Stack Developer. I only just recently transitioned into Web Development from Prehospital Medical Care."
                        />
                    </div>
                </div>                
            </section>
        </div>
    )
}



export default About;