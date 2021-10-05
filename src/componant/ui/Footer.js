import React from 'react';
import { Box, Link, Typography } from '@mui/material';
function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://www.keev.tech/'>
        Keev
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
  return (
    <div>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component='footer'>
        <Typography
          variant='subtitle1'
          align='left'
          color='text.secondary'
          component='p'>
          We make algorithmic trading simple for you. Usually, you might need to
          invest in infrastructure and write tons of code to perform any kind of
          algorithmic trading. But with us, you can do all this in a few clicks
          on our dashboard.
        </Typography>
        <Copyright />
      </Box>
    </div>
  );
};

export default Footer;
