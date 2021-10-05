import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, Slide, Toolbar, Typography, useScrollTrigger } from '@mui/material';



const HideOnScroll = (props) => {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
};

const Header = (props) => {
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar position='fixed' color="secondary">
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'>
              <MenuIcon />
            </IconButton>
            <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
              Coder Gautam
            </Typography>
            <Button color='inherit'>Login</Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default Header;
