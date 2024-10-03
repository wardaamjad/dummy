import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { useTheme } from "@mui/material/styles";

const AdvertisementSection = () => {
  const theme = useTheme(); // Access the theme

  return (
    <Container>
<div style={{ padding: '2rem 0', mixBlendMode: "screen",
                    background: theme.palette.button.black, }}>
      <Typography
        variant="h6"
        align="center"
        style={{ color: 'white', marginBottom: '1rem' }}
      >
        ADVERTISEMENT
      </Typography>
      <Grid container justifyContent="center" spacing={3}>
        {[...Array(4)].map((_, index) => (
          <Grid item key={index}>
            {/* Advertisement cards with static content for now */}
            <div
              style={{
                width: '200px',
                height: '200px',
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#000',
                fontWeight: 'bold',
                fontSize: '18px',
              }}
            >
              AD {index + 1}
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
    </Container>
    
  );
};

export default AdvertisementSection;
