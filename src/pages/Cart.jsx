import {
  Avatar,
  Box,
  Button,
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

const Cart = () => {
  return (
    <Box flex={35} sx={{ border: '1px solid red', width: '200px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: '30px',
        }}>
        <Typography
          sx={{
            height: '30px',
            pl: '40px',
            fontSize: '40px',
            display: 'flex',
            alignItems: 'center',
          }}
          variant="h2">
          <LocalGroceryStoreIcon /> Корзина
        </Typography>
        <Button sx={{ height: '30px' }} variant="outlined" color="error">
          Удалить все
        </Button>
      </Box>

      <List component="nav" aria-label="mailbox folders">
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          }>
          <ListItemAvatar>
            <Avatar>
              <ShoppingBagIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Кроссовки Nike dunk What the Paul" secondary="Размер 10 US" />
        </ListItem>

        <Divider />

        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          }>
          <ListItemAvatar>
            <Avatar>
              <ShoppingBagIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Кроссовки Nike dunk What the Paul" secondary="Размер 10 US" />
        </ListItem>

        <Divider />

        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          }>
          <ListItemAvatar>
            <Avatar>
              <ShoppingBagIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Кроссовки Nike dunk What the Paul" secondary="Размер 10 US" />
        </ListItem>

        <Divider light />

        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          }>
          <ListItemAvatar>
            <Avatar>
              <ShoppingBagIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Кроссовки Nike dunk What the Paul" secondary="Размер 10 US" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Cart;
