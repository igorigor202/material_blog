import { Box, Grid } from '@mui/material';

import React, { useState } from 'react';
import Post from '../components/Post.jsx';
import { useEffect } from 'react';
import Categories from '../components/Categories.jsx';
import Preloader from '../components/Preloader.jsx';
import Sort from '../components/Sort.jsx';

const Home = ({ searchValue }) => {
  const [posts, setPosts] = useState([]);
  const [isloading, setISLoading] = useState(false);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState('rating');

  useEffect(() => {
    setISLoading(true);

    const sortBy = sortType.replace('-', '');
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    fetch(
      `https://62fafe68abd610251c00224e.mockapi.io/posts?${category}&sortBy=${sortBy}&order=${order}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setPosts(arr);
        setISLoading(false);
      });
  }, [categoryId, sortType]);

  return (
    <Box flex={35} sx={{}}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Categories categoryId={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
        <Sort sortType={sortType} onChangeSort={(i) => setSortType(i)} />
      </Box>

      <Grid
        container
        padding={{ xs: 1, sm: 1, md: 5 }}
        spacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent={{ xs: 'center', sm: 'flex-start', md: 'flex-start', lg: 'flex-start' }}
        alignItems="stretch">
        {isloading
          ? [...new Array(6)].map((_, index) => <Preloader key={index} />)
          : posts.map((obj) => (
              <Post
                key={obj.id}
                avatarUrl={obj.avatarUrl}
                title={obj.title}
                image={obj.image}
                text={obj.text}
                price={obj.price}
              />
            ))}
      </Grid>
    </Box>
  );
};

export default Home;
