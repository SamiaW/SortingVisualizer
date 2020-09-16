import React, { useState } from 'react';
import './SmallToBig.css';
import { Flipper, Flipped } from 'react-flip-toolkit';
import SortingPage from "./SortingPage";
import code from './static_data';
import { CodeBlock, codepen } from "react-code-blocks";
import CloseIcon from '@material-ui/icons/Close';
import  {codeSelection} from './static_data';


function SmallToBig({ names }) {
  const [fullScreen, setFullScreen] = useState(false);
  const toggleFullScreen = () => setFullScreen(prevState => !prevState);

  const name = () => {

    if (fullScreen && names == "Bubble") {
      return (
        <div onClick={event => event.stopPropagation()}>
          <SortingPage names={names} />
          <div className="">
          <CodeBlock 
            text={code}
            language="javascript"
            showLineNumbers={true}
            theme={codepen}
          />
          </div>
        </div>
      )

    }
    else if (fullScreen && names == "Selection") {
      return (
        <div onClick={event => event.stopPropagation()}>
          <SortingPage names={names} />
          <div className="">
          <CodeBlock 
            text={codeSelection}
            language="javascript"
            showLineNumbers={true}
            theme={codepen}
          />
          </div>
        </div>
      )

    }
    else {
      return (
        <span className="name"> {names} Sort </span>

      )
    }
  }

  return (
    <div className="smallToBig">

      <Flipper flipKey={fullScreen}>
        <Flipped flipId="square">
          <div
            className={fullScreen ? 'full-screen-square' : 'square'}
            onClick={toggleFullScreen}
          >
            {fullScreen && (<CloseIcon className="close" fontSize="large"/>)}
            {name()}

          </div>
        </Flipped>
      </Flipper>

    </div>
  );
}

export default SmallToBig;