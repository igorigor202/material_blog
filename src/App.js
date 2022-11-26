import * as React from 'react';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar.jsx';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart.jsx';

function App() {
  const [mode, setMode] = useState('light');
  const [searchValue, setSearchValue] = useState('');
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar
          setMode={setMode}
          mode={mode}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <Stack
          direction={{ sm: 'column', md: 'row', lg: 'row' }}
          spacing={{ sm: 2, md: 15 }}
          justifyContent="space-around">
          <Sidebar setMode={setMode} mode={mode} />
          <Routes>
            <Route path="/material_shop1" element={<Home searchValue={searchValue} />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
