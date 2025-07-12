import React from 'react';
import { menuList } from '../data/data'; // Assuming you have a data file with menu items
import Layout from '../components/Layout/Layout';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px' , marginTop: '100px'}}>
        {
          menuList.map(menu => (
            <Card sx={{ maxWidth: '390px',m:2 }} key={menu.name}> {/* Added key prop for React list rendering */}
              <CardActionArea>
                <CardMedia sx={{ minHeight: '400px' }} component={'img'} src={menu.image} alt={menu.name} />
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    {menu.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {menu.description}
                    </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        }
      </Box>
    </Layout>
  );
};

export default Menu;