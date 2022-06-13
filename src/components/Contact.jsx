import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';

function Contact() {

    return (
        <motion.div
            initial={{ y: -(window.innerHeight) }}
            animate={{ y: 0, transition: { duration: 0.5 } }}
            exit={{ y: -(window.innerHeight), transition: { duration: 0.5 } }}
            className='page-background-dark'>
            <div className='inner-page'>
                <h1 className='page-title-dark'>CONTACT</h1>

                <p className='form-header'>Have a question? Send me an email!</p>
                <div className='d-flex align-items-center justify-content-center'>
                    <form className='w-50' action="/" method="post">
                        <div className='contact-form m-5'>
                            <input type='text' className='form-control my-2' placeholder='Your name' />
                            <input type='email' className='form-control my-2' placeholder='Your email' />
                            <textarea className='form-control my-2' placeholder='Your message' rows='4' />
                            <button className='btn btn-md btn-outline-light my-2'>Submit</button>
                        </div>
                    </form>
                </div>

            </div>
            <Footer />
        </motion.div>
    )
}

export default Contact;