import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
} from '@mui/material';
import React from 'react';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';

const buttons = [
  <Button key="one">+</Button>,
  <Button key="two">1</Button>,
  <Button key="three">-</Button>,
];

const Cart = () => {
  return (
    <Box flex={25} sx={{ height: '100vh' }}>
      <Box sx={{ p: '10px' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', s: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Box
            sx={{
              pl: { xs: 'none', s: '10px', md: '10px' },
              mb: { xs: '30px', s: '30px', md: '0px' },
              display: 'flex',
            }}>
            <Typography sx={{ fontSize: { xs: '35px', s: '35px', md: '40px' } }} variant="h2">
              <LocalGroceryStoreIcon /> Корзина
            </Typography>
          </Box>

          <Box>
            <Button sx={{}} variant="outlined" color="error">
              Очистить корзину
            </Button>
          </Box>
        </Box>

        <Divider sx={{ mt: '10px' }} />

        <List component="nav" aria-label="mailbox folders">
          <ListItem>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row', md: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ListItemAvatar>
                  <Avatar>
                    <ShoppingBagIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Кроссовки Nike dunk What the Paul"
                  secondary="Размер 10 US"
                />
              </Box>

              <Box
                sx={{
                  width: { xs: '100%', s: '70%', md: '50%' },
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                <Box
                  sx={{
                    width: { xs: '50%', s: '30%', md: '30%' },
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                  <ButtonGroup size="small" aria-label="small button group">
                    {buttons}
                  </ButtonGroup>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '25%',
                  }}>
                  <ListItemText primary="30000 руб" />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}>
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </ListItem>
          <Divider />
        </List>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="subtitle1">Всего товаров: 1</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">Сумма заказа: 30000 руб</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            mt: '30px',
            justifyContent: 'space-between',
          }}>
          <Button variant="outlined">
            <HomeIcon />
            Вернуться назад
          </Button>
          <Button variant="outlined" color="success">
            Перейти к оплате
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
