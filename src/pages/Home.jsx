import { Box, Grid, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  setCategoryId,
  setCurrentPage,
  setSortType,
  setFilters,
} from '../redux/slices/filterSlice.js';

import React, { useState, useEffect, useRef } from 'react';
import Post from '../components/Post.jsx';
import Categories from '../components/Categories.jsx';
import Preloader from '../components/Preloader.jsx';
import Sort from '../components/Sort.jsx';
import BasicPagination from '../components/BasicPagination.jsx';
import { useContext } from 'react';
import qs from 'qs';
import { fetchSneakers } from '../redux/slices/sneakerSlice.js';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoryId, sortType, currentPage, searchValue } = useSelector((state) => state.filter);
  const { posts, status } = useSelector((state) => state.sneaker);
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const onChangeCategory = (id) => {
    console.log(id);
    dispatch(setCategoryId(id));
  };
  const onChangeSort = (i) => {
    console.log(i);
    dispatch(setSortType(i));
  };
  const onChangePage = (number) => {
    console.log(number);
    dispatch(setCurrentPage(number));
  };

  const getSneakers = async () => {
    const sortBy = sortType.replace('-', '');
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(fetchSneakers({ sortBy, order, category, search, currentPage }));

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortType,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sortType, currentPage]);

  //Если был первый рендер, то проверяем URL-параметры и сохраняем в redux
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(setFilters({ ...params }));
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      getSneakers();
    }
    isSearch.current = false;
  }, [categoryId, sortType, searchValue, currentPage]);

  const sneakers = posts.map((obj) => (
    <Post
      key={obj.id}
      id={obj.id}
      avatarUrl={obj.avatarUrl}
      title={obj.title}
      image={obj.image}
      text={obj.text}
      price={obj.price}
      sizes={obj.size}
    />
  ));

  const skeletons = [...new Array(6)].map((_, index) => <Preloader key={index} />);

  return (
    <Box flex={35}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Categories categoryId={categoryId} onChangeCategory={onChangeCategory} />
        <Sort sortType={sortType} onChangeSort={onChangeSort} />
      </Box>

      <Grid
        sx={{}}
        container
        padding={{ xs: 1, sm: 1, md: 5 }}
        spacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent={{ xs: 'center', sm: 'flex-start', md: 'flex-start', lg: 'flex-start' }}
        alignItems="stretch">
        {status === 'error' ? (
          <Box>
            <Typography variant="h2">Произошла ошибка</Typography>
            <Typography
              variant="body1"
              sx={{ marginTop: '50px', fontSize: { xs: '17px', sm: '17px', md: '20px' } }}>
              Не удалось получить данные по вещам. Попробуйте повторить попытку позже
            </Typography>
          </Box>
        ) : (
          <>{status === 'loading' ? skeletons : sneakers}</>
        )}
      </Grid>
      <Box
        sx={{
          mb: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <BasicPagination currentPage={currentPage} onChangePage={onChangePage} />
      </Box>
    </Box>
  );
};

export default Home;
