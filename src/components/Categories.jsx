import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import Sort from './Sort.jsx';

const Categories = ({ categoryId, onChangeCategory }) => {
  const categories = ['Все', 'Adidas', 'Nike', 'New balance'];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: { xs: '100%', sm: '100%', md: '100%', lg: '90%' },
        alignItems: 'center',
        overflowX: { xs: 'scroll', sm: 'scroll  ', md: 'scroll', lg: 'visible' },
      }}>
      {categories.map((value, i) => (
        <Button
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            p: {
              xs: '15px 50px 15px 50px',
              sm: '15px 50px 15px 50px',
              md: '15px 50px 15px 50px',
              lg: '15px 50px 15px 50px',
            },
            width: { xs: '25%', sm: '25%', md: '25%', lg: '55%' },
            m: {
              xs: 0.5,
              sm: 1,
              md: 1,
              lg: 2,
            },
            borderRadius: '20px',
            fontSize: { xs: '15px', sm: '15px', md: '15px', lg: '15px' },
          }}
          key={i}
          onClick={() => onChangeCategory(i)}
          variant={categoryId === i ? 'contained' : 'outlined'}>
          {value}
        </Button>
      ))}
    </Box>
  );
};

export default Categories;
