import React, { useRef } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, } from "@material-ui/core/styles";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import Stack from '@mui/material/Stack';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

  // toggle icons
  import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
  import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

  const theme = createTheme({
    typography: {
      fontFamily: [
        "Tinos",
        "Roboto",
        "Inter"
      ].join(",")
    },
  });
  
function Toggle() {

  const main = useRef(null);
  const colors = useRef(null);
  const fonts = useRef(null);
  const stickers = useRef(null);
  const notes = useRef(null);


  const displayHome = () => {
    // TODO: need to target display 
  };

  const displayColors = () => {
    // TODO: need to target display 


  };

  const displayFonts = () => {
    // TODO: need to target display 

  };

  const displayStickers = () => {
    // TODO: need to target display 


  };

  const displayNotes = () => {
    // TODO: need to target display 


  };

  return (
    <React.Fragment>    
    <CssBaseline />
    {/* toggle */}
    <Draggable>
      {/* TODO: make toggle position right on page- abosulte but aslo sticky?IDK*/}
        <Box  theme={theme} sx={{ 
          bgcolor: '#F3F3F3', 
          height: '32vh', 
          width:'50vh', 
          p: 1.5, 
          borderRadius: 5, 
          border: "solid #000000 1px",
          }} 
          position="absolute" justifyContent="end"
          >
          <Container ref={main} sx={{display: 'block'}}>
          <Grid container direction="row"> 
            <Grid Item sx={{ml:.5}}>
              <CloseRoundedIcon/>
            </Grid>
            <Grid Item sx={{ml:3}}>
              <Typography align="center" sx={{fontFamily: 'Inter', fontWeight:600, fontSize:18, mb:2}}>
                customize this page
              </Typography>
            </Grid>
          </Grid>
          
          <Stack direction="Column" justifyContent="center"> 
            <Stack spacing={3} sx={{mb:2}} direction="row" justifyContent="center">
              <Button 
                onClick ={() => { 
                  displayColors();
                }}
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
                onClick ={() => { 
                  displayStickers();
                }}
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
                onClick ={() => { 
                  displayFonts();
                }}
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
                onClick ={() => { 
                  displayNotes();
                }}
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
              // onclick function that deletes local storage
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
          </Container>

          {/* background color */}
          <Container ref={colors} sx={{display: 'none'}}> 
          <Grid container direction="row"> 
            <Grid Item sx={{ml:0}}>
              <CloseRoundedIcon/>
              <Button 
              onClick ={() => { 
                displayHome();
              }}>
              <ArrowBackRoundedIcon/>
              </Button>
            </Grid>
            <Grid Item sx={{ml:1}}>
              <Typography align="center" sx={{fontFamily: 'Inter', fontWeight:600, fontSize:18, mb:2}}>
                background color
              </Typography>
            </Grid>
          </Grid>
          
          <Stack direction="Column" justifyContent="center"> 
            <Stack spacing={1} sx={{mb:1}} direction="row" justifyContent="center">
              <Button 
                style={{
                  borderRadius: 17,
                  border: "solid #000000 1px",
                  backgroundColor: "#B7DFC0",
                  width: '130px',
                  height: '60px',
                  alt:"light green"
                  }}>
                </Button>
                <Button 
                  style={{
                    borderRadius: 17,
                    border: "solid #000000 1px",
                    backgroundColor: "#FFD89E",
                    width: '130px',
                    height: '60px',
                    alt:"light yellow"
                    }}>
                    </Button>
                    <Button 
                  style={{
                    borderRadius: 17,
                    border: "solid #000000 1px",
                    backgroundColor: "#FFC6DA",
                    width: '130px',
                    height: '60px',
                    alt: 'light pink'
                    }}>
                    </Button>
                    <Button 
                  style={{
                    borderRadius: 17,
                    border: "solid #000000 1px",
                    backgroundColor: "#BFD9FF",
                    width: '130px',
                    height: '60px',
                    alt:'light blue'
                    }}>
                    </Button>
            </Stack>

            <Stack spacing={1} sx={{mb:2}} direction="row" justifyContent="center"> 
              <Button            
                style={{
                  borderRadius: 17,
                  border: "solid #000000 1px",
                  backgroundColor: "#246532",
                  width: '130px',
                  height: '60px',
                  alt:'dark green'
                  }}>
                  </Button>
              <Button 
                style={{
                  borderRadius: 17,
                  border: "solid #000000 1px",
                  backgroundColor: "#FF9900",
                  width: '100px',
                  height: '60px',
                  alt:'orange'
                  }}>
                  </Button>

                <Button 
                  style={{
                    borderRadius: 17,
                    border: "solid #000000 1px",
                    backgroundColor: "#F45890",
                    width: '130px',
                    height: '60px',
                    alt:'pink'
                    }}>
                    </Button>

                  <Button 
                    style={{
                      borderRadius: 17,
                      border: "solid #000000 1px",
                      backgroundColor: "#3777D8",
                      width: '130px',
                      height: '60px',
                      alt:'blue'
                      }}>
                      </Button>
            </Stack>

          </Stack>
          </Container>

          {/* fonts */}
          <Container ref={fonts} sx={{display: 'none'}}> 
          <Grid container direction="row"> 
            <Grid Item sx={{ml:0}}>
              <CloseRoundedIcon/>
              <ArrowBackRoundedIcon/>
            </Grid>
            <Grid Item sx={{ml:8}}>
              <Typography align="center" sx={{fontFamily: 'Inter', fontWeight:600, fontSize:18, mb:2}}>
                fonts
              </Typography>
            </Grid>
          </Grid>
          
          <Stack direction="Column" justifyContent="center"> 
          <Button 
          sx={{mb:1}}
              // onclick function that deletes local storage
                style={{
                    borderRadius: 17,
                    border: "solid #000000 1px",
                    backgroundColor: "#DCDCDC",
                    width: '260px',
                    fontSize: "15px",
                    fontFamily: 'Inter',
                    color: 'black',
                    textTransform: 'none',
                  }}>
                  Comic Sans & Slabo
                </Button>
                <Button 
                sx={{mb:1}}
                style={{
                    borderRadius: 17,
                    border: "solid #000000 1px",
                    backgroundColor: "#DCDCDC",
                    width: '260px',
                    fontSize: "15px",
                    fontFamily: 'Inter',
                    color: 'black',
                    textTransform: 'none',
                  }}>
                  Gravitas One & Inconsolata 
                </Button>
                <Button 
                style={{
                    borderRadius: 17,
                    border: "solid #000000 1px",
                    backgroundColor: "#DCDCDC",
                    width: '260px',
                    fontSize: "15px",
                    fontFamily: 'Inter',
                    color: 'black',
                    textTransform: 'none',
                  }}>
                  Goldman & Gloria Hallelujah 
                </Button>
  

          </Stack>
          </Container>

          {/* stickers */}
          <Container ref={stickers} sx={{display: 'none'}}> 
          <Grid container direction="row"> 
            <Grid Item sx={{ml:0}}>
              <CloseRoundedIcon/>
              <ArrowBackRoundedIcon/>
            </Grid>
            <Grid Item sx={{ml:6}}>
              <Typography align="center" sx={{fontFamily: 'Inter', fontWeight:600, fontSize:18, mb:2}}>
                stickers
              </Typography>
            </Grid>
          </Grid>
          
          <Stack direction="Column" justifyContent="center"> 
            <Stack spacing={1} sx={{mb:1}} direction="row" justifyContent="center">
              <Button 
                style={{
                  borderRadius: 17,
                  border: "solid #000000 1px",
                  backgroundColor: "#F3F3F3",
                  width: '130px',
                  height: '60px',
                  alt:"cherry sticker"
                  }}>
                    <img alt="" src="../images/cherry.png"/>
                </Button>
                <Button 
                  style={{
                    borderRadius: 17,
                    border: "solid #000000 1px",
                    backgroundColor: "#F3F3F3",
                    width: '130px',
                    height: '60px',
                    alt:"yellow star sticker"
                    }}>
                      <img alt="" src="../images/star.png"/>
                    </Button>
                    <Button 
                  style={{
                    borderRadius: 17,
                    border: "solid #000000 1px",
                    backgroundColor: "#F3F3F3",
                    width: '130px',
                    height: '60px',
                    alt: 'strawberry sticker'
                    }}>
                      <img alt="" src="../images/strawberry.png"/>
                    </Button>
                    <Button 
                  style={{
                    borderRadius: 17,
                    border: "solid #000000 1px",
                    backgroundColor: "#F3F3F3",
                    width: '130px',
                    height: '60px',
                    alt:'blue heart sticker'
                    }}>
                      <img alt="" src="../images/blueheart.png"/>
                    </Button>
            </Stack>

            <Stack spacing={1} sx={{mb:1}} direction="row" justifyContent="center"> 
              <Button            
                style={{
                  borderRadius: 17,
                  border: "solid #000000 1px",
                  backgroundColor: "#F3F3F3",
                  width: '130px',
                  height: '60px',
                  alt:'pink smile-face sticker'
                  }}>
                    <img alt="" src="../images/smile.png"/>
                  </Button>
              <Button 
                style={{
                  borderRadius: 17,
                  border: "solid #000000 1px",
                  backgroundColor: "#F3F3F3",
                  width: '100px',
                  height: '60px',
                  alt:'lemon sticker'
                  }}>
                    <img alt="" src="../images/lemon.png"/>
                  </Button>

                <Button 

                  style={{
                    borderRadius: 17,
                    border: "solid #000000 1px",
                    backgroundColor: "#F3F3F3",
                    width: '130px',
                    height: '60px',
                    alt:'squiggly line sticker'
                    }}> 
                    <img alt="" src="../images/squiggly.png"/>
                    </Button>

                  <Button 
                    style={{
                      borderRadius: 17,
                      border: "solid #000000 1px",
                      backgroundColor: "#F3F3F3",
                      width: '130px',
                      height: '60px',
                      alt:'red heart sticker'
                      }}>
                      <img alt="" src="../images/redheart.png"/>
                      </Button>
            </Stack>

          </Stack>
            
          </Container>

          {/* note pad */}
          <Container ref={notes} sx={{display: 'none'}}> 
          <Grid container direction="row"> 
            <Grid Item sx={{ml:0}}>
              <CloseRoundedIcon/>
              <ArrowBackRoundedIcon/>
            </Grid>
            <Grid Item sx={{ml:6.5}}>
              <Typography align="center" sx={{fontFamily: 'Inter', fontWeight:600, fontSize:18, mb:2}}>
                notes
              </Typography>
            </Grid>
          </Grid>
           <Stack spacing={1} direction="row" justifyContent="center">
                <Button 
                  style={{
                    border: "solid #000000 1px",
                    backgroundColor: "#FFDCE9",
                    width: '160px',
                    height: '120px',
                    }}>
                </Button>
                <Button 
                  style={{
                    border: "solid #000000 1px",
                    backgroundColor: "#C8EDD0",
                    width: '160px',
                    height: '120px',
                    }}>
                </Button>

                <Button 
                  style={{
                    border: "solid #000000 1px",
                    backgroundColor: "#FFF5D3",
                    width: '160px',
                    height: '120px',
                    }}>
                </Button>
            </Stack>            
          </Container>
          
        </Box>
        </Draggable>
        </React.Fragment>
  )
}
  
  export default Toggle;