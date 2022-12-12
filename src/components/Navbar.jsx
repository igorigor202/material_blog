import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  alpha,
  IconButton,
} from '@mui/material';
import React, { useState } from 'react';
import { FastfoodRounded, ShoppingBasket } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from 'react';
import { SearchContext } from '../App.js';
import { useRef } from 'react';
import debounce from 'lodash.debounce';
import { useCallback } from 'react';

const StyledToolbar = styled(Toolbar)({ display: 'flex', justifyContent: 'space-between' });

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: { display: 'flex' },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 15,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '50%',
    [theme.breakpoints.up('xs')]: {
      width: '15ch',
    },
    [theme.breakpoints.up('sm')]: {
      width: '25ch',
    },
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
    [theme.breakpoints.up('md')]: {
      width: '55ch',
    },
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const [value, setValue] = useState('');

  const inputRef = useRef();

  const onClearInput = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          component={Link}
          to="/material_blog"
          variant="h6"
          sx={{ display: { xs: 'none', sm: 'block' }, textDecoration: 'none', color: 'white' }}>
          Nagibin Shop
        </Typography>
        <FastfoodRounded sx={{ display: { xs: 'block', sm: 'none' } }} />

        <Search>
          <SearchIconWrapper
            sx={{
              display: 'flex',
              width: '95%',
              justifyContent: 'space-between',
            }}>
            <SearchIcon />
          </SearchIconWrapper>

          <StyledInputBase
            value={value}
            ref={inputRef}
            onChange={onChangeInput}
            sx={{ widht: '95%' }}
            placeholder="Найти..."
            inputProps={{ 'aria-label': 'search' }}
          />
          {value && (
            <IconButton onClick={onClearInput}>
              <CloseIcon />
            </IconButton>
          )}
        </Search>

        <Icons>
          <Badge badgeContent={2} color="success">
            <ShoppingBasket />
          </Badge>
          <Avatar
            sx={{ width: 40, height: 40 }}
            src="https://avatarzo.ru/wp-content/uploads/squid-game-player456-2.jpg"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
