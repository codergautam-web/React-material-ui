import React from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';

const MainPage = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}>
      <Container maxWidth='lg'>
        <Typography
          component='h1'
          variant='h2'
          align='center'
          color='text.primary'
          gutterBottom>
          About Keev Tech
        </Typography>
        <Typography variant='p' align='center' color='text.secondary' paragraph>
          We make algorithmic trading simple for you. Usually, you might need to
          invest in infrastructure and write tons of code to perform any kind of
          algorithmic trading. But with us, you can do all this in a few clicks
          on our dashboard. Because at KEEV we will help to unleash the immense
          power of trading and combine it with market data and information sour
          ced from various platforms and brokers.
        </Typography>
        <Typography variant='p' align='center' color='text.secondary' paragraph>
          That's not all, we also help you backtest and optimise your trade
          strategies. As we understand that, unless you do your own research or
          get a scientific explanation for the recommendation made by an
          industry expert, you would choose to stay away from the markets. To
          satiate this curiosity, we bring you user-friendly algorithm trading
          platform
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction='row'
          spacing={2}
          justifyContent='center'>
          <Button variant='contained'>Read More</Button>
          <Button variant='outlined'>Contact Us</Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default MainPage;
