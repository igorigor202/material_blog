import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Size from './Size.jsx';
import { Box } from '@mui/system';

const Post = ({ image, title, price }) => {
  return (
    <>
      <Grid item xs={10} sm={6} md={6} lg={4}>
        <Card
          sx={{
            borderRadius: '15px',
            height: '100%',
            marginBottom: '2%',
          }}>
          <CardMedia component="img" image={image} alt={title} title={title} sx={{ height: 420 }} />
          <CardContent>
            <Typography fontSize={18} variant="h6" component="h5">
              {title}
            </Typography>
            <Typography variant="body1">Цена: {price}</Typography>
          </CardContent>
          <CardActions>
            <Box>
              <Size />
              <Button sx={{ marginTop: '15px' }}>Добавить в корзину</Button>
            </Box>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default Post;
