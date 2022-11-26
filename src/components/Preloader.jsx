import { Box, Card, CardActions, CardContent, Grid } from '@mui/material';
import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const Preloader = (props) => (
  <>
    <Grid item xs={10} sm={6} md={6} lg={4}>
      <Card
        sx={{
          borderRadius: '15px',
          height: '100%',
          marginBottom: '2%',
        }}>
        <Skeleton variant="rectangular" width={'100%'} height={'400px'} />
        <CardContent>
          <Skeleton variant="text" width={'100%'} height={'25px'} />
          <Skeleton variant="text" width={'25%'} height={'25px'} />
        </CardContent>
        <CardActions sx={{ paddingLeft: '13px' }}>
          <Box sx={{ width: '100%' }}>
            <Skeleton variant="text" width={'45%'} height={'65px'} />
            <Skeleton variant="text" width={'40%'} height={'35px'} />
          </Box>
        </CardActions>
      </Card>
    </Grid>
  </>
);

export default Preloader;
