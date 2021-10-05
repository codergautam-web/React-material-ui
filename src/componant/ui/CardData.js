import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardActions,
  Typography,
  Button,
  CardContent,
} from '@mui/material';
const cards = [1, 2, 3, 4, 5, 6, 7, 8];
const CardData = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth='lg'>
      {/* End hero unit */}
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}>
              <CardMedia
                component='img'
                image='https://static.wixstatic.com/media/814501_2e259b25c77f47f7854656a332b3e1df~mv2.jpg/v1/fill/w_540,h_389,al_c,q_80,usm_0.66_1.00_0.01/814501_d39d1f91340f40779080b1abba2ada4a_.webp'
                alt='random'
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant='h5' component='h2'>
                  Heading
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis numquam totam atqu
                </Typography>
              </CardContent>
              {/* <CardActions>
                <Button size='small'>View</Button>
                <Button size='small'>Edit</Button>
              </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardData;
