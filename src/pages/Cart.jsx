import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Divider from '@mui/material/Divider';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import HomeIcon from '@mui/icons-material/Home';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem.jsx';
import { clearItems } from '../redux/slices/cartSlice.js';
import CartEmpty from '../components/CartEmpty.jsx';
const Cart = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const onClickClear = () => {
    if (window.confirm('Очистить корзину?')) {
      dispatch(clearItems());
    }
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <Box flex={25} sx={{ minHeight: '98vh' }}>
      <Box sx={{ p: '15px' }}>
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
            <Button onClick={onClickClear} variant="outlined" color="error">
              Очистить корзину
            </Button>
          </Box>
        </Box>

        <Divider sx={{ mt: '10px' }} />

        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="subtitle1">Всего товаров: {totalCount}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">Сумма заказа: {totalPrice} руб</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            mt: '30px',
            justifyContent: 'space-between',
          }}>
          <Button component={Link} to="/material_blog" variant="outlined">
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
