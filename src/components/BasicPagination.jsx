import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination({ currentPage, onChangePage }) {
  const handleChange = (event, value) => {
    onChangePage(value);
  };
  return (
    <Stack spacing={2}>
      <Pagination page={currentPage} onChange={handleChange} count={2} color="primary" />
    </Stack>
  );
}
