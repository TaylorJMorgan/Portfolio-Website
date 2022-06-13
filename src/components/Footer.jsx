import React from 'react';

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <div className='footer'>
            <p className='footer-text'>Copyright Taylor Morgan, <span className='highlight'>{currentYear}</span></p>
        </div>
    )
}

export default Footer;