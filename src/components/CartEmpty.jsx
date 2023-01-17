import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <Box flex={35} sx={{ height: '100vh' }}>
      <Typography variant="h2" sx={{ margin: '50px' }}>
        Ваша корзина пустая
      </Typography>

      <Typography
        variant="body1"
        sx={{ margin: '50px', fontSize: { xs: '17px', sm: '17px', md: '20px' } }}>
        <Button variant="contained" component={Link} to="/material_blog">
          Вернуться назад
        </Button>
      </Typography>
    </Box>
  );
};

export default CartEmpty;
