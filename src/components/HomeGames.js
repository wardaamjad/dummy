import React from 'react'
import { useTheme } from '@mui/material/styles';
const HomeGames = () => {
  const theme = useTheme(); 
  return (
    <div
    style={{
        background: theme.palette.gradients.defaultGradiants,
        padding:"40px",
        marginTop:"-22px"
    }}>
        <h2>
        Recommended
        </h2>
    </div>
  )
}

export default HomeGames