import React from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import image from '../assets/WZM-GLOBALRELEASE-TOUT 1.png';
import image1 from '../assets/favorites.png';
import theme from '../theme/theme'

const CardComponent = () => {
  return (
    <Card sx={{ width: 290, height: 370 }}>
      <IconButton>
      <img src={image1} alt="Favorite" style={{ width: '24px', height: 'auto' }} />
      </IconButton>
      <CardMedia
        component="img"
        alt="Casino Slots Game"
        image={image}
        title="Casino Slots Game"
        
      />
      <CardContent >
        <Typography variant="h5">
          Casino Slots Game
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor...
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
