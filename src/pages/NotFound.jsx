import { MoodBad } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';

const NotFound = () => {
  return (
    <Box flex={35} sx={{}}>
      <Typography variant="h2" sx={{ margin: '50px' }}>
        По вашему запросу ничего не найдено <MoodBad fontSize="large" />
      </Typography>
      <Typography
        variant="body1"
        sx={{ margin: '50px', fontSize: { xs: '17px', sm: '17px', md: '20px' } }}>
        К сожалению данная страница не существует в интернет-магазине
      </Typography>
    </Box>
  );
};

export default NotFound;
