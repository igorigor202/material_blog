import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function Sort({ sortType, onChangeSort }) {
  const handleChange = (event) => {
    onChangeSort(event.target.value);
  };

  return (
    <Box
      sx={{
        minWidth: { xs: '250px', sm: '250px', md: '150px', lg: '160px' },
        m: { xs: '10px', sm: '10px', md: '10px', lg: '10px' },
      }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Сортировать по</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortType}
          label="Сортировать по"
          onChange={handleChange}>
          <MenuItem value={'rating'}>популярности (DESC)</MenuItem>
          <MenuItem value={'-rating'}>популярности (ASC)</MenuItem>
          <MenuItem value={'price'}>цене (DESC)</MenuItem>
          <MenuItem value={'-price'}>цене (ASC)</MenuItem>
          <MenuItem value={'title'}>алфавиту (DESC)</MenuItem>
          <MenuItem value={'-title'}>алфавиту (ASC)</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Sort;
