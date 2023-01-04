import React from 'react';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../redux/slices/cartSlice.js';

const CartItem = ({ id, title, price, count, image, size }) => {
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickRemove = () => {
    if (window.confirm('Вы уверены, что хотите удалить товар?')) {
      dispatch(removeItem(id));
    }
  };
  const buttons = [
    <Button onClick={onClickMinus} key="three">
      -
    </Button>,
    <Button key="two">{count}</Button>,
    <Button onClick={onClickPlus} key="one">
      +
    </Button>,
  ];
  return (
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
              <Avatar src={image}>
                <ShoppingBagIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={title} secondary={size} />
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
              <ListItemText primary={price * count + ' руб'} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}>
              <IconButton onClick={onClickRemove} aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </ListItem>
      <Divider />
    </List>
  );
};

export default CartItem;
