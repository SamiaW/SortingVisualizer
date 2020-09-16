import React, { useState } from 'react';
import './SmallToBig.css';
import { Flipper, Flipped } from 'react-flip-toolkit';
import SortingPage from "./SortingPage";

function SmallToBig({names}) {
    const [fullScreen, setFullScreen] = useState(false);
    const toggleFullScreen = () => setFullScreen(prevState => !prevState);
  
    const name = () => {
  
      if (fullScreen) {
        return (
          <SortingPage names={names} />
        )
  
      }
      else {
        return (
        <span className="name"> {names} Sort </span>
          
        )
      }
    }
  
    return (
      <div className="App">
  
        <Flipper flipKey={fullScreen}>
          <Flipped flipId="square">
            <div
              className={fullScreen ? 'full-screen-square' : 'square'}
              onClick={toggleFullScreen}
            >
              {name()}
  
            </div>
          </Flipped>
        </Flipper>
      </div>
    );
  }
  
  export default SmallToBig;