import React from 'react';
import {
  Autocomplete,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice.js';

const Post = ({ id, image, title, price, sizes }) => {
  const [size, setValue] = React.useState(sizes[0]);
  const [inputValue, setInputValue] = React.useState('');

  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id));
  const addedCount = cartItem ? cartItem.count : 0;
  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      image,
      size,
    };
    dispatch(addItem(item));
  };
  return (
    <>
      <Grid item xs={10} sm={6} md={6} lg={4}>
        <Card
          sx={{
            borderRadius: '15px',
            height: '100%',
            marginBottom: '2%',
          }}>
          <CardMedia component="img" image={image} alt={title} title={title} sx={{ height: 420 }} />
          <CardContent>
            <Typography fontSize={18} variant="h6" component="h5">
              {title}
            </Typography>
            <Typography variant="body1">Цена: {price} руб</Typography>
          </CardContent>
          <CardActions>
            <Box>
              <Autocomplete
                value={size}
                options={sizes}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                size="small"
                id="disable-clearable"
                disableClearable
                sx={{ width: { xs: '200px', sm: '250px', md: '280px', lg: '265px' } }}
                renderInput={(params) => (
                  <TextField {...params} label="Выберите размер" variant="standard" />
                )}
              />

              <Button
                onClick={onClickAdd}
                variant="outlined"
                sx={{
                  marginTop: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Typography fontSize={14} variant="h6">
                  Добавить в корзину {addedCount > 0 && <>{addedCount}</>}
                </Typography>
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default Post;
