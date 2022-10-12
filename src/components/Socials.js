import React from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SocialButton from './SocialButton';

const Socials = (props) => {
  return (
    <div className={`d-flex justify-content-center`}>
      <SocialButton
        icon={<GitHubIcon sx={{ color: 'white', fontSize: 60 }} />}
        href='https://github.com/TaylorJMorgan'
      />
      <SocialButton
        icon={<FacebookIcon sx={{ color: 'white', fontSize: 60 }} />}
        href='https://www.facebook.com/taylorjamesmorgan'
      />
      <SocialButton
        icon={<LinkedInIcon sx={{ color: 'white', fontSize: 60 }} />}
        href='https://www.linkedin.com/in/taylor-morgan-dev/'
      />
    </div>
  );
};

export default Socials;
