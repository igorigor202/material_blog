import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

const AllSize = [
  { label: '12 US / 46 EU' },
  { label: '11.5 US / 45.5 EU' },
  { label: '11 US / 45 EU' },
  { label: '10.5 US / 44.5 EU' },
  { label: '10 US / 44 EU' },
  { label: '9.5 US / 43 EU45.5 EU' },
  { label: '9 US / 42.5 EU' },
  { label: '8.5 US / 42 EU' },
  { label: '8 US / 41 EU' },
  { label: '7.5 US / 40.5 EU' },
  { label: '7 US / 40 EU' },
  { label: '6.5 US / 39 EU' },
  { label: '6 US / 38.5 EU' },
];

const Size = () => {
  return (
    <Autocomplete
      size="small"
      disablePortal
      id="combo-box-demo"
      options={AllSize}
      sx={{ width: { xs: '200px', sm: '250px', md: '280px', lg: '265px' } }}
      renderInput={(params) => <TextField {...params} label="Выберите размер" />}
    />
  );
};

export default Size;
