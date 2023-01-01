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

const buttons = [
  <Button key="one">+</Button>,
  <Button key="two">1</Button>,
  <Button key="three">-</Button>,
];
const CartItem = ({}) => {
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
              <Avatar>
                <ShoppingBagIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Кроссовки Nike dunk What the Paul" secondary="Размер 10 US" />
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
  );
};

export default CartItem;
