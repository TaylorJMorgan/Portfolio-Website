import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Socials() {
    return (
        <div className='d-flex social-div align-items-center justify-content-center'>
            <a href='https://github.com/TaylorJMorgan'>
                <div className='social-box'>
                    <GitHubIcon sx={{ color: 'white', fontSize: 60 }} />
                </div>
            </a>
            <a href='https://www.facebook.com/taylorjamesmorgan/'>
                <div className='social-box'>
                    <FacebookIcon sx={{ color: 'white', fontSize: 60 }} />
                </div>
            </a>
            <a href='https://www.linkedin.com/in/taylor-morgan-213761223/'>
                <div className='social-box'>
                    <LinkedInIcon sx={{ color: 'white', fontSize: 60 }} />
                </div>
            </a>
        </div>
    )
}

export default Socials;