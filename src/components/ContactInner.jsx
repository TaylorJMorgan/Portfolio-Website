import React from 'react';
import Socials from './Socials';
import { motion } from 'framer-motion';
import Footer from './Footer';
import { useForm, ValidationError } from '@formspree/react';


function ContactInner(props) {

    const [state, handleSubmit] = useForm("meqnddqv");

    return (
        <motion.div
            initial={{ y: -(window.innerHeight) }}
            animate={{ y: 0, transition: { duration: 0.5 } }}
            exit={{ y: -(window.innerHeight), transition: { duration: 0.5 } }}
            className='page-background-dark'>

            <div className='inner-page'>

                <h1 className='page-title-dark'>CONTACT</h1>

                <p className='form-header'>Have a question? Send me an email!</p>
                <div className='row justify-content-center'>
                    <div className='d-flex col-8 col-lg-6 col-xxl-4 align-items-center'>
                        <form onSubmit={props.handleSubmit} className='mb-5 w-100 contact-form'>
                            <div className=''>
                                <input type='text' name='name' className='form-control my-2' placeholder='Your name' />
                                <input type='email' name='email' className='form-control my-2' placeholder='Your email' />
                                <ValidationError prefix="Email" field="email" errors={props.errors} />
                                <textarea name='message' className='form-control my-2' placeholder='Your message' rows='4' />
                                <ValidationError prefix="Message" field="message" errors={props.errors} />
                                <button type='submit' className='btn-submit btn btn-md btn-outline-light my-2' disabled={props.submitting}>Submit</button>
                            </div>
                        </form>
                    </div>

                </div>

                <Socials />

            </div>
            <Footer />
        </motion.div>
    )
}

export default ContactInner;