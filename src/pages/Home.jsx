import { Box, Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setCurrentPage, setSortType } from '../redux/slices/filterSlice.js';
import React, { useState } from 'react';
import Post from '../components/Post.jsx';
import { useEffect } from 'react';
import Categories from '../components/Categories.jsx';
import Preloader from '../components/Preloader.jsx';
import Sort from '../components/Sort.jsx';
import BasicPagination from '../components/BasicPagination.jsx';
import axios from 'axios';
import { useContext } from 'react';
import { SearchContext } from '../App.js';

const Home = () => {
  const dispatch = useDispatch();
  const { categoryId, sortType, currentPage } = useSelector((state) => state.filter);
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

  const { searchValue } = useContext(SearchContext);
  const [posts, setPosts] = useState([]);
  const [isloading, setISLoading] = useState(false);

  useEffect(() => {
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
  }, [categoryId, sortType, searchValue, currentPage]);

  const sneakers = posts.map((obj) => (
    <Post
      key={obj.id}
      avatarUrl={obj.avatarUrl}
      title={obj.title}
      image={obj.image}
      text={obj.text}
      price={obj.price}
    />
  ));

  return (
    <Box flex={35} sx={{}}>
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
