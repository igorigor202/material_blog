import { Box } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

const FullItem = () => {
  const params = useParams();
  console.log(params);
  return <Box flex={35}>Кроссовки nike </Box>;
};

export default FullItem;
