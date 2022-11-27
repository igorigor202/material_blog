import * as React from 'react';

import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart.jsx';
import { createContext } from 'react';

export const SearchContext = createContext('');

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
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Box bgcolor={'background.default'} color={'text.primary'}>
          <Navbar setMode={setMode} mode={mode} />
          <Stack
            direction={{ sm: 'column', md: 'row', lg: 'row' }}
            spacing={{ sm: 2, md: 15 }}
            justifyContent="space-around">
            <Sidebar setMode={setMode} mode={mode} />
            <Routes>
              <Route path="/material_shop" element={<Home />} />
              <Route path="/*" element={<NotFound />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Stack>
        </Box>
      </SearchContext.Provider>
    </ThemeProvider>
  );
}

export default App;
