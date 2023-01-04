import { Box, Grid } from '@mui/material';
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
import axios from 'axios';
import { useContext } from 'react';
import { SearchContext } from '../App.js';
import qs from 'qs';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoryId, sortType, currentPage } = useSelector((state) => state.filter);
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { searchValue } = useContext(SearchContext);
  const [posts, setPosts] = useState([]);
  const [isloading, setISLoading] = useState(false);

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

  const fetchSneakers = () => {
    setISLoading(true);

    const sortBy = sortType.replace('-', '');
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    axios
      .get(
        `https://62fafe68abd610251c00224e.mockapi.io/posts?p=${currentPage}&l=5&${category}&sortBy=${sortBy}&order=${order}${search}`,
      )
      .then((res) => {
        setPosts(res.data);
        setISLoading(false);
      });
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
      fetchSneakers();
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
        container
        padding={{ xs: 1, sm: 1, md: 5 }}
        spacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent={{ xs: 'center', sm: 'flex-start', md: 'flex-start', lg: 'flex-start' }}
        alignItems="stretch">
        {isloading ? [...new Array(6)].map((_, index) => <Preloader key={index} />) : sneakers}
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
