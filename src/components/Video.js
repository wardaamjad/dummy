import React from 'react'
import { useTheme } from '@mui/material/styles';
function Video() {
  const theme = useTheme(); 
  return (
    <h1
    style={{
        background:theme.palette.video.lightgrey,
        height:"90vh",
        width:"100%",
        color:theme.palette.text.main,
        marginTop:"-4px",
        textAlign:"center"
    }}>Video</h1>
  );
}

export default Video;