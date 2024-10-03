import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const GameCard = ({ icon, name, description }) => {
  return (
    <Card style={{ maxWidth: 345, backgroundColor: 'black', color: 'white' }}>
      <CardMedia
        component="img"
        height="140"
        image={icon} // Icon image passed from the parent component
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name} {/* Game name passed from the parent component */}
        </Typography>
        <Typography variant="body2" color="white">
          {description} {/* Game description (could be dynamic) */}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GameCard;
