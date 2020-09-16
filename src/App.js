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
import { CodeBlock, codepen } from "react-code-blocks";
import code from './static_data';


function App() {

  return (
    <div className="App">

      <SmallToBig names="bubble" />
      <SmallToBig names="selection" />
      <CodeBlock className="codeblock"
        text={code}
        language="javascript"
        showLineNumbers={true}
        theme={codepen}
      />

    </div>
  );
}

export default App;
