import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { useState } from "react";

function App() {

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
  
        <CssBaseline />

        <Container maxWidth="md">

          <Typography variant="h4" align="left" style={{marginTop: "50px"}} 
           color="textPrimary">
            ReactJS App
          </Typography>
          <br />

          <Typography variant="h6" align="left" 
           color="textPrimary" paragraph>
            Working with various objects
          </Typography>

          <div style={{margin: "30px 0 35px"}}>
          <Button variant="contained" color="primary"> Primary</Button>
          <Button variant="contained" color="secondary"> Secondary</Button>

            <Button variant="contained" color="secondary"
            style={{background:theme.palette.error.main}}>
            Error </Button>
            <Button variant="contained" color="secondary"
            style={{background:theme.palette.warning.main}}>
            Warning </Button>
            <Button variant="contained" color="secondary"
            style={{background:theme.palette.info.main}}>
            Info </Button>
            <Button variant="contained" color="secondary"
            style={{background:theme.palette.success.main}}>
            Success </Button>
          </div>

          <form>
            <div style={{marginBottom: "20px"}}>
            <label>Name:<br />
              <input
                className='form-control'
                type="text" 
                placeholder="Enter Your Name"
              />
            </label>
            </div>

            <div style={{marginBottom: "20px"}}>
              <label>Email:<br />
                <input
                  className='form-control'
                  type="email" 
                  placeholder="Enter Your Email"
                />
              </label>
            </div>

            <div style={{marginBottom: "20px"}}>
              <label>Message:<br />
                <textarea
                  className='form-control'
                  type="text" 
                  placeholder="Enter Your Message"
                />
              </label>
            </div>

            <div style={{marginBottom: "20px"}}>
              <label>Gender:</label>
              <div style={{marginTop: "5px"}}>
                <label style={{marginRight: "10px"}}>
                  <input style={{verticalAlign: "text-top", marginLeft: "0"}} type="radio" value="Male" name="gender" /> Male
                </label>
                <label style={{marginRight: "10px"}}>
                  <input style={{verticalAlign: "text-top"}} type="radio" value="Female" name="gender" /> Female
                </label>
                <label>
                  <input style={{verticalAlign: "text-top"}} type="radio" value="Other" name="gender" /> Other
                </label>     
              </div>      
            </div>

          </form>

        </Container>
  
      </ThemeProvider>
    </React.Fragment>
  
  );
}
  
export default App;