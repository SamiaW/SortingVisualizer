import React, { useState } from 'react';
import './App.css';
import { Flipper, Flipped } from 'react-flip-toolkit';
import SortingPage from "./SortingPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SmallToBig from "./SmallToBig";
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';


const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
// }));


function App() {

  return (
    <div className="App">
      <div className="heading">
        <h2 className="head">Sorting Algorithms</h2>
        <p className="desc"><pre>
          This project explores various animation techniques to visualize various algorithms.
            <br />
            Check out the github page for source code.
          </pre></p>
        <ColorButton variant="contained" color="primary" href="https://github.com/SamiaW/SortingVisualizer" >
          View on Github
      </ColorButton>
      </div>
      <div className="sortingList">
        <SmallToBig names="Bubble" />
        <SmallToBig names="Selection" />
      </div>
    </div>
  );
}

export default App;
