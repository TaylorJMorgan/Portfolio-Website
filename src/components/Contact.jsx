import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import Socials from './Socials';

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
                    <form action='https://formsubmit.co/ceba88f1658810bbbfd2f384009ed535' method='POST' encType='multipart/form-data'>
                        <div className='contact-form m-5'>
                            <input type='text' name='name' className='form-control my-2' placeholder='Your name' />
                            <input type='email' name='email' className='form-control my-2' placeholder='Your email' />
                            <input type='text' name='_honey' style={{ display: 'none' }}></input>
                            <input type='hidden' name='_captcha' value='false'></input>
                            <input type='hidden' name='_next' value='www.localhost:3000/contact'></input>
                            <textarea name='message' className='form-control my-2' placeholder='Your message' rows='4' />
                            <button type='submit' className='btn-submit btn btn-md btn-outline-light my-2'>Submit</button>
                        </div>
                    </form>
                </div>

                <Socials />

            </div>
            <Footer />
        </motion.div>
    )
}

export default Contact;