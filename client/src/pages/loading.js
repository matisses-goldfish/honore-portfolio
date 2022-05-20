// Import react to iniatiallize page
// possible animation to create typing affect?? 
// is would be cool for the mouse to change as well 
import React from 'react';
// Import components from material ui

// add/delete as needed
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// wonder if I could add an animation to the loading
function Loading(){
    return(
      <Box sx={{ width: '50%' }}>
      <Typography variant="h5" gutterBottom component="div">
        Hello world...
      </Typography>
      </Box>
    );
}

export default Loading; 