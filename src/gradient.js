import React from 'react';
import { Button } from '@mui/material';

function GradientButton() {
  return (
    <Button
          variant="contained"
          sx={{
            background: 'radial-gradient(circle, #FE6B8B 30%, #FF8E53 90%)',
            color: 'white',
            fontSize: '8rem',
            marginTop: '10px',
            '&:hover': {
              background: 'radial-gradient(circle, #FF8E53 30%, #FE6B8B 90%)', // Change on hover
            },
          }}
        >
          Radial Gradient Button
        </Button>
  );
}

export default GradientButton;
