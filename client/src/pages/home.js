// TODO: make toggle functional
  // buttons, exit, and clear page
// TODO: take toggle funtion and create it into a component to import
// TODO: finish creating different "pages" for toggle
// TODO: Comparmentalize style into themes to compate code
// TODO: connect graphql, then data set, then map over data for projects 

// Import react to iniatiallize page
import React from 'react';

// Import components from material ui
import {makeStyles} from "@material-ui/core";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, } from "@material-ui/core/styles";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


// toggle 
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
  // toggle icons
  import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
  import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

// import makeStyles from "@material-ui/core";
// import { borderRadius } from '@mui/system';


// toggle function
// import Toggle from '../components/Toggle'

const theme = createTheme({
  typography: {
    fontFamily: [
      "Tinos",
      "Roboto",
      "Inter"
    ].join(",")
  },
});

const homeTheme = makeStyles((theme) => ({
  toggleButton: {
    borderRadius: 10,
    border: "solid #000000 1px",
    backgroundColor: "#E4E4E4",
    fontSize: "20px",
    fontFamily: 'Inter',
    color: 'black',
    textTransform: 'none',
  },
  connectButton:{
    borderRadius: 2,
    border: "solid #000000 1px",
    backgroundColor: "#E4E4E4",
    // padding: "10px 40px",
    fontSize: "20px",
    fontFamily: 'Inter',
    color: 'black',
    textTransform: 'none',
  }
}));

function Home(){
  const classes = homeTheme();

  return (
    <React.Fragment>    
    <CssBaseline />
    {/* toggle */}
    <Draggable>
      {/* TODO: make toggle position right on page- abosulte but aslo sticky?IDK*/}
        <Box theme={theme} sx={{ 
          bgcolor: '#F3F3F3', 
          height: '30vh', 
          width:'50vh', 
          p: 1.5, 
          borderRadius: 5, 
          border: "solid #000000 1px",
          }} 
          position="absolute">
            
          <Grid container direction="row" > 
            <Grid Item>
              <CloseRoundedIcon/>
            </Grid>
            <Grid Item sx={{ml:6}}>
              <Typography align="center" sx={{fontFamily: 'Inter', fontWeight:600, fontSize:18, mb:2}}>
                customize this page
              </Typography>
            </Grid>
          </Grid>
          
          <Stack direction="Column" justifyContent="center"> 
            <Stack spacing={3} sx={{mb:2}} direction="row" justifyContent="center">
              <Button 
                style={{
                  borderRadius: 17,
                  border: "solid #000000 1px",
                  backgroundColor: "#DCDCDC",
                  width: '130px',
                  fontSize: "10px",
                  fontFamily: 'Inter',
                  color: 'black',
                  textTransform: 'none',
                  }}>
                  background color
                </Button>
                <Button 
                  style={{
                    borderRadius: 17,
                    border: "solid #000000 1px",
                    backgroundColor: "#DCDCDC",
                    width: '130px',
                    fontSize: "10px",
                    fontFamily: 'Inter',
                    color: 'black',
                    textTransform: 'none',
                    }}>
                    stickers</Button>
            </Stack>

            <Stack spacing={3} sx={{mb:2}} direction="row" justifyContent="center"> 
              <Button 
                style={{
                  borderRadius: 17,
                  border: "solid #000000 1px",
                  backgroundColor: "#DCDCDC",
                  width: '130px',
                  fontSize: "10px",
                  fontFamily: 'Inter',
                  color: 'black',
                  textTransform: 'none',
                  }}>
                  fonts</Button>
              <Button 
                style={{
                  borderRadius: 17,
                  border: "solid #000000 1px",
                  backgroundColor: "#DCDCDC",
                  width: '130px',
                  fontSize: "10px",
                  fontFamily: 'Inter',
                  color: 'black',
                  textTransform: 'none',
                  }}>
                  notes</Button>
            </Stack>
            <Stack spacing={3} direction="row" justifyContent="center">
              <Button 
                style={{
                    borderRadius: 17,
                    border: "solid #000000 1px",
                    backgroundColor: "#DCDCDC",
                    width: '290px',
                    fontSize: "10px",
                    fontFamily: 'Inter',
                    color: 'black',
                    textTransform: 'none',
                  }}>
                  clear page 
                  </Button>
            </Stack>

          </Stack>
        </Box>
        </Draggable>
        {/* end toggle */}
        
    <Container sx={{ mx: 'auto', mt: 20 }}>
      <Grid>
        <Box sx={{ bgcolor: '#FFFFFF', height: '100vh', width:'130vh', p: 5, margin: 'auto'}} alignItems='right'>
        
        <ThemeProvider theme={theme}>
          <Typography align="left" sx={{fontFamily: 'Inter', fontWeight:600, fontSize:45}}>
            hello world...
          </Typography>
        </ThemeProvider>

        <ThemeProvider theme={theme}>
          <Typography align="left" sx={{fontFamily: 'Tinos', fontSize:30}}>
            my name is Honore and I’m a software engineer with a focus on UI/UX design. My goal is to  create a clean and a memorable user-experience.         
          </Typography>
        </ThemeProvider>

        </Box>
        
      </Grid>
    </Container>
    <span id="projects"/>
    {/* I need to map over my data, that way I can create a new porject in a form and automatically have it added to this page */}
    <Container sx={{ mx: 'auto' , my:7}}>
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Box alignItems="left" sx={{p:3}}>
              {/* need to change to take into account the data collected */}
            <Box
              component="img"
              sx={{
                borderRadius: '5%',
                height: 400,
                width: 550,
              }}
              alt="random image"
              src="https://www.grahambrown.com/dw/image/v2/BBBG_PRD/on/demandware.static/-/Sites-product-master/default/dw496dc722/images/large/CT-060-096_1.jpg?sw=1024&sh=1024&sm=fit"
            />
            <ThemeProvider theme={theme}>
              <Typography align="left" sx={{fontFamily: 'Inter', fontWeight: 600, fontSize: 40}}>
                name
              </Typography>
              <Typography variant="h6" component="h3" align="left" sx={{fontFamily: 'Inter', fontWeight:800, fontSize: 25, color: '#676767' }}>
                ROLE
              </Typography>

              <Typography align="left" sx={{fontFamily: 'Tinos', fontSize: 20, mb:2}}>
              short descirption of application, features, and goals. Include design features, and possibly application process              </Typography>
            </ThemeProvider>

            <Button               
              style={{
                borderRadius: 10,
                border: "solid #000000 1px",
                backgroundColor: "#E4E4E4",
                padding: "10px 25px",
                fontSize: "20px",
                fontFamily: 'Inter',
                color: 'black',
                textTransform: 'none',
                }}
                variant="contained" disableElevation color="inherit">
              explore more...
            </Button>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box alignItems="left" sx={{p:3}}>
              {/* need to change to take into account the data collected */}
            <Box
              component="img"
              sx={{
                borderRadius: '5%',
                height: 400,
                width: 550,
              }}
              alt="random image"
              src="https://www.grahambrown.com/dw/image/v2/BBBG_PRD/on/demandware.static/-/Sites-product-master/default/dw496dc722/images/large/CT-060-096_1.jpg?sw=1024&sh=1024&sm=fit"
            />
            <ThemeProvider theme={theme}>
              <Typography align="left" sx={{fontFamily: 'Inter', fontWeight: 600, fontSize: 40}}>
                name
              </Typography>
              <Typography variant="h6" component="h3" align="left" sx={{fontFamily: 'Inter', fontWeight:800, fontSize: 25, color: '#676767' }}>
                ROLE
              </Typography>

              <Typography align="left" sx={{fontFamily: 'Tinos', fontSize: 20, mb:2}} >
              short descirption of application, features, and goals. Include design features, and possibly application process              </Typography>
             </ThemeProvider>

            <Button 
              style={{
                borderRadius: 10,
                border: "solid #000000 1px",
                backgroundColor: "#E4E4E4",
                padding: "10px 25px",
                fontSize: "20px",
                fontFamily: 'Inter',
                color: 'black',
                textTransform: 'none',
                }}
                variant="contained" disableElevation color="inherit">
              explore more...
            </Button>
            </Box>
          </Grid>

        </Grid>
      </Box>
    </Container>

    <span id="connect"/>
    <Container sx={{ m: 'auto', my:25}}>
      <ThemeProvider theme={{theme}}>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid Item xs={4}>
          <Box>
          <Box
              component="img"
              sx={{
                height: '70%',
                width: '70%',
                borderRadius: '50%'
              }}
              alt="random image"
              src="https://www.grahambrown.com/dw/image/v2/BBBG_PRD/on/demandware.static/-/Sites-product-master/default/dw496dc722/images/large/CT-060-096_1.jpg?sw=1024&sh=1024&sm=fit"
            />
          </Box>
        </Grid>

        <Grid Item xs={8}>
          <Box>
          <Typography align="left" sx={{fontFamily: 'Inter', fontWeight:600, fontSize: 40}}>
              I'd like to connect...
            </Typography>
            <Typography align="left" sx={{fontFamily: 'Tinos',fontSize: 25}}>
            Hi, I’m Honore (on-er) and I’m a Front-end developer with a focus on UI and UX design. My goal as a developer is to offer users a convenient and enjoyable user experience with a playful and memorable design edge. I enjoy producing products that are both practical and functional, in order to create a flow of convenience to lessen user stress. I’m eager to leverage my aptitudes as a design-driven front-end developer while establishing new skill sets to elevate and advance a user’s experience. 
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{m:10}} align="center">
        <Stack spacing={15} direction="row" justifyContent="center">
          <ThemeProvider theme={theme}>
            <Button     
              style={{
              borderRadius: 10,
              border: "solid #000000 1px",
              backgroundColor: "#E4E4E4",
              padding: "10px 40px",
              fontSize: "20px",
              fontFamily: 'Inter',
              color: 'black',
              textTransform: 'none',
              }}
              variant="outlined" href="mailto:honoregn@gmail.com" target="_blank">email</Button>
            <Button               
            style={{
              borderRadius: 10,
              border: "solid #000000 1px",
              backgroundColor: "#E4E4E4",
              padding: "10px 40px",
              fontSize: "20px",
              fontFamily: 'Inter',
              color: 'black',
              textTransform: 'none',
              }}
              variant="outlined" href="https://drive.google.com/file/d/12qwy5SmQSipDRl1OphmPEt9mDL22XvbD/view?usp=sharing" target="_blank"> resume</Button>
            <Button 
              style={{
                borderRadius: 10,
                border: "solid #000000 1px",
                backgroundColor: "#E4E4E4",
                padding: "10px 40px",
                fontSize: "20px",
                fontFamily: 'Inter',
                color: 'black',
                textTransform: 'none',
                }}
              variant="outlined" href="https://www.linkedin.com/in/honor%C3%A9-nelson-250487228/" target="_blank">linkedin</Button>
            <Button             
              style={{
                borderRadius: 10,
                border: "solid #000000 1px",
                backgroundColor: "#E4E4E4",
                padding: "10px 40px",
                fontSize: "20px",
                fontFamily: 'Inter',
                color: 'black',
                textTransform: 'none',
                }}
              variant="outlined"href="https://github.com/matisses-goldfish" target="_blank">github</Button>
          </ThemeProvider>
        </Stack>
      </Box>

      </ThemeProvider>
    </Container>
  </React.Fragment>
  );
}


export default Home; 