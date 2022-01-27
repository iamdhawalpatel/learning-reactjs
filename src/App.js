import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
  
function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
  
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography component="h1" variant="h1" align="center" 
           color="textPrimary" gutterBottom>
            Geeks for Geeks
          </Typography>
          <Typography variant="h2" align="center" 
           color="textSecondary">
            h2 Typography with secondary text colour
          </Typography>
          <br />
          <Typography variant="h3" align="center" 
           color="textPrimary" paragraph>
            h3 Typography variant with primary text colour
          </Typography>
          <br />
          <Button variant="contained" 
                  color="primary" > Primary 
          </Button>
          <Button variant="contained" 
                  color="secondary"> Secondary
          </Button>
          {/* Since, color prop only takes primary and 
          secondary as values,we define other colors 
          in component's style */}
          <Button variant="contained"
          style={{background:theme.palette.error.main, margin: "0 10px"}}>
          Error </Button>
          <Button variant="contained" 
          style={{background:theme.palette.warning.main}}>
          Warning </Button>
          <Button variant="contained" 
          style={{background:theme.palette.info.main}}>
          Info </Button>
          <Button variant="contained" 
          style={{background:theme.palette.success.main}}>
          Success </Button>
  
          <br /><br />
        </Container>
  
      </ThemeProvider>
    </React.Fragment>
  
  );
}
  
export default App;